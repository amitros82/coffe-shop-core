import bcrypt from 'bcryptjs'
import prisma from '../db/prisma';
import { UserInput, UserResponse } from '@models/user.model';

export const getAllUsers = async () : Promise<UserResponse[]> => {
    return await prisma.user.findMany();
};

export const createUser = async (data: UserInput) : Promise<UserResponse> => {

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashedPassword,
            role: data.role,
        },
    });

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword as UserResponse;
};
