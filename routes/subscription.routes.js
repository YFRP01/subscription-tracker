import { Router } from "express";

const subRouter = Router()

subRouter.get('/', (req, res) =>  res.send({success: true, message: "GET all subscriptions"}) )

subRouter.get('/:id', (req, res) => { res.send({success: true, message: "GET a subscription"}) })

subRouter.post('/', (req, res) => { res.send({success: true, message: "CREATE a subscription"}) })

subRouter.put('/:id', (req, res) => { res.send({success: true, message: "UPDATE a subscription"}) })

subRouter.delete('/:id', (req, res) => { res.send({success: true, message: "DELETE a subscription"}) })

subRouter.get('/user/:id', (req, res) => { res.send({success: true, message: "GET all user subscriptions"}) })

subRouter.put('/:id/cancel', (req, res) => { res.send({success: true, message: "CANCEL a subscription"}) })

subRouter.get('/upcoming-renewals', (req, res) => { res.send({success: true, message: "GET upcoming renewals"}) })


export default subRouter