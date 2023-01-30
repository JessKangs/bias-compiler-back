import express, { Express } from "express";
import cors from "cors";
import { loadEnv } from "./config/envs";
import { connectDb, disconnectDB } from "./config/database";

loadEnv();

import { 
    authenticationRouter,
    biasMemoriesRouter,
    biasQuotesRouter,
    myThoughtsRouter,
    biasFactsRouter,
    biasLinksRouter,
    userRouter
 } from "./routers";

const app = express();
app
.use(cors())
.use(express.json())
.use("/", authenticationRouter)
.use("/", biasMemoriesRouter)
.use("/", biasQuotesRouter)
.use("/", myThoughtsRouter)
.use("/", biasFactsRouter)
.use("/", biasLinksRouter)
.use("/", userRouter)

export function init(): Promise<Express>{
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;