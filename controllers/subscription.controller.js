import { SERVER_URL } from "../config/env.js"
import { workflowClient } from "../config/upstash.js"
import Subscription from "../models/subscription.model.js"


export const getSubscriptions = async (req, res, next) => {
    try {
        const subscriptions = await Subscription.find()
        res.status(200).json({success: true, data: subscriptions})
    } catch (error) {
        next(error)
    }
}

export const getSubscription = async (req, res, next) => {
    try {
        const {id} = req.params
        const subscription = await Subscription.findOne({_id: id})
        res.status(200).json({success: true, data: subscription})
    } catch (error) {
        next(error)
    }
}


export const putSubscription = async (req, res, next) => {
    try {
        const {id} = req.params;
        const subscription = await Subscription.updateOne(
            {_id: id},
            {...req.body}
        )
        if(subscription.matchedCount === 0){
            const error = new Error('Subscription not found')
            error.statusCode = 404
            throw error
        }
        if(subscription.modifiedCount === 0){
            return res.status(200).json({success: true, message: "No changes made"})
        }
        res.status(200).json({success: true, message: "Edit successful"})
    } catch (error) {
        next(error)
    }
}

export const deleteSubscription = async (req, res, next) => {
    try {
        const {id} = req.params
        const checkSubscription = await Subscription.findOne({_id: id})
        if(!checkSubscription){
            const error = new Error('Subscription not found')
            error.statusCode = 404
            throw error 
        }
        const subscription = await Subscription.deleteOne({_id: id})
        if(subscription.deletedCount === 0){
            const error = new Error('No deleted Subscription')
            error.statusCode = 404
            throw error 
        }
        res.status(200).json({success: true, message: "Deletion successful"})        
    } catch (error) {
        next(error)
    }
}

export const cancelSubscription = async (req, res, next) => {
    try {
        const {id} = req.params
        const subscription = await Subscription.updateOne(
            {_id: id},
            {staus: "expired", renewalDate: new Date()}
        )
        if(subscription.matchedCount === 0){
            const error = new Error('Subscription not found')
            error.statusCode = 404
            throw error 
        }
        if(subscription.modifiedCount === 0){
            return res.status(200).json({success:true, message: "No cancelation operated"})
        }
        res.status(200).json({success:true, message: "Cancel successful"})
    } catch (error) {
        next(error)
    }
}

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: res.user._id,
        })        
        
        const {workflowRunId} = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription._id.toString(),
            },         
            headers: { 
                'content-type': 'application/json',
             },             
            retries: 0, 
        })
        res.status(201).json({success: true, data: {subscription, workflowRunId}})
    } catch (error) {
        next(error)
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        const {id} = req.params
        if(res.user.id !== id){
            const error = new Error('You are not the owner of this account')
            error.statusCode = 401
            throw error
        }
        const subscriptions = await Subscription.find({user: id})
        res.status(200).json({
            success: true,
            data: subscriptions
        })
    } catch (error) {
        next(error)
    }
}