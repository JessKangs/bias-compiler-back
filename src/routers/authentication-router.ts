import { Router } from "express";
import { signInIsValid, signUpIsValid } from "../middlewares/auth-joi-middleware";
import { createSignIn, createSignUp } from "../controllers/authenticationController"


const authenticationRouter = Router();

authenticationRouter
.post("/signup", signUpIsValid, createSignUp)
.post("/signin", signInIsValid, createSignIn)

export { authenticationRouter };