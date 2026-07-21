import express from "express"
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

// app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to the subscription  Tracker API");
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions', subRouter)

app.listen(PORT, async ()=>{
    console.log(`Subscription Tracker API running on https://localhost:${PORT}`);
    await connectToDatabase()
})

export default app