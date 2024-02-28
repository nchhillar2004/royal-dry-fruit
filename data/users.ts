import { connectDB } from "@/helpers/conn";
import prisma from "@/prisma";

export const getUsers = async () => {
    try {
        await connectDB();
        const users = await prisma.users.findMany();

        return users;
    } catch {
        await prisma.$disconnect();
        return null;
    }
};
