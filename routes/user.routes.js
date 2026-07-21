import { Router } from "express";

const userRouter = Router()

userRouter.get('/', (req, res) => { res.send({success: true, message: "GET all users"}) })

userRouter.get('/:id', (req, res) => { res.send({success: true, message: "GET a user details"}) })

userRouter.post('/', (req, res) => { res.send({success: true, message: "Create a user"}) })

userRouter.put('/:id', (req, res) => { res.send({success: true, message: "UPDATE user details"}) })

userRouter.delete('/:id', (req, res) => { res.send({success: true, message: "DELETE a user"}) })


export default userRouter