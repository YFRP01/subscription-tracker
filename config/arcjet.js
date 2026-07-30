import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const aj = arcjet({
  key: ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE", 
      allow: [
        "CATEGORY:SEARCH_ENGINE", "CATEGORY:PREVIEW", // Google, Bing, etc
      ],
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 20, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 50, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj