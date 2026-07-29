import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js"

const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.get('/:id', authorize, getUser)

userRouter.post('/', (req, res) => {res.send(200).json('complete')})

userRouter.put('/:id', (req, res) => { res.send({success: true, message: "UPDATE user details"}) })

userRouter.delete('/:id', (req, res) => { res.send({success: true, message: "DELETE a user"}) })


export default userRouter