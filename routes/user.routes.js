import { Router } from "express";
import { getUsers } from "../controllers/user.controllers.js";

const userRouter = Router();

// GET /users => get all users
// GET /users/:id => get user by id
// POST /users => create a new user
// PUT /users/:id => update user by id
// DELETE /users/:id => delete user by id

userRouter.get('/', getUsers)

userRouter.get('/:id')

userRouter.post('/', )

userRouter.put('/:id')

userRouter.delete('/:id')

export default userRouter;