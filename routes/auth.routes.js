import { Router } from "express";
import { signUp, signIn, signOut } from "../controllers/auth.controllers.js";



const authRouter = Router()


// POST /auth/sign-up => user sign up
// POST /auth/sign-in => user sign in
// POST /auth/sign-out => user sign out

// localhost:3000/api/v1/auth/sign-up

authRouter.post('/sign-up', signUp)

authRouter.post('/sign-in', signIn)

authRouter.post('/sign-out', signOut)



export default authRouter;