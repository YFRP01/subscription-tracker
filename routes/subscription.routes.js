import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { cancelSubscription, createSubscription, deleteSubscription, getSubscription, getSubscriptions, getUserSubscriptions, putSubscription } from "../controllers/subscription.controller.js";

const subRouter = Router()

subRouter.get('/', getSubscriptions)

subRouter.get('/:id', getSubscription)

subRouter.post('/', authorize, createSubscription)

subRouter.put('/:id', authorize, putSubscription)

subRouter.delete('/:id', authorize, deleteSubscription)

subRouter.get('/user/:id', authorize, getUserSubscriptions)

subRouter.put('/:id/cancel', authorize, cancelSubscription)



export default subRouter