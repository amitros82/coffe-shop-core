import prisma from '../db/prisma';
import {ProductResponse} from "../models/product.model";

export const getAllProducts = async () : Promise<ProductResponse[]> => {
    return await prisma.product.findMany();
};

export const createProduct = async (data: {
    name: string;
    description?: string;
    price: number;
    inStock: number;
}) : Promise<ProductResponse> => {

    return await prisma.product.create({ data });
};
