import mongoose from "mongoose";
import User from "../models/user.model.js";
import Users from "../models/user.model.js"
import bcrypt from "bcryptjs";

export const getUsers = async (req, res, next) => {
    try {
        const users = await Users.find();
        res.status(200).json({
            success: true,
            data: users,
        })
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await Users.findById(id).select('-password');
        if(!user){
            const error = new Error('User not found')
            error.statusCode = 404
            throw error
        }
        res.status(200).json({
            success: true,
            data: user,
        })
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) =>{
    try {
        const {name, prevPassword, password, email} = req.body;
        const {id} = req.params;
        if(res.user.id !== id){
            const error = new Error('You are not in your account');
            error.statusCode = 401
            throw error
        }
        const user = await User.findById(res.user.id)
        if(!user){
            const error = new Error("User not found");
            error.statusCode = 404
            throw error
        }                
        
        const isPasswordValid = await bcrypt.compare(prevPassword, user.password);

        if(!isPasswordValid){
            const error = new Error('Invalid password');
            error.statusCode = 401
            throw error
        }
        let hashedPassword = await bcrypt.hash(password, 10)
        const updatedUser = await User.updateOne(
            {_id: id},
            {name, email, password: hashedPassword},
        )        
        if(updatedUser.modifiedCount === 0){
            return res.status(200).json({success:true, message: "No user info updated"})
        }
        const userData = await User.findById({_id: id})
        res.status(200).json(
            {
                success: true, 
                message: "User info updated sucsessful", 
                data: userData
            }
        )
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) =>{
    try {
        const {id} = req.params;

        const user = await User.findById(id);
        if(!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }       
        
        await User.findByIdAndDelete({_id: id})        

        res.status(200).json({success: true, message: "User deleted sucsessfully"})
    } catch (error) {
        next(error)
    }
}

export const createUser = async (req, res, next) => {

    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            const error = new Error('User already exists')
            error.statusCode = 409
            throw error
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        })
    } catch (error) {
        next(error)
    }
}