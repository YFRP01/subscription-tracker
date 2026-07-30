import aj from "../config/arcjet.js"
import { isSpoofedBot } from "@arcjet/inspect";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });   
        console.log("Arcjet decision:", decision.conclusion);
        console.log("Arcjet decision:", decision.reason);
        
        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ error: "Too Many Requests" });
            }
            if (decision.reason.isBot()) {
                return res.status(403).json({ error: "No bots allowed" });
            } 
            return res.status(403).json({ error: "Forbidden" });
        }
        // if (decision.ip.isHosting()) {
        //     return res.status(403).json({ error: "Forbidden" });
        // } 
        if(decision.results.some(isSpoofedBot)) {
            return res.status(403).json({ error: "No bots allowed" });
        } 
        next()
    } catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error)   
    }
}

export default arcjetMiddleware