import { connectDB } from "@/helpers/conn";
import prisma from "@/prisma";

export const getProducts = async () => {
    try {
        await connectDB();
        const products = await prisma.products.findMany();

        return products;
    } catch {
        await prisma.$disconnect();
        return null;
    }
};