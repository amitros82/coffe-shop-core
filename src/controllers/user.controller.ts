import bcrypt from 'bcryptjs';
import {Request, Response} from "express"
import {getAllUsers, createUser} from "@services/user.service";

export const getAllUsersHandler = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.json(users);
}


export const createUserHandler = async (req: Request, res: Response) => {
    const users = await getAllUsers();

    res.json(users);
}