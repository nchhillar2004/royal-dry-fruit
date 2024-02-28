import { connectDB } from "@/helpers/conn";
import prisma from "@/prisma";

export const getMails = async () => {
    try {
        await connectDB();
        const mails = await prisma.mails.findMany();

        return mails;
    } catch {
        await prisma.$disconnect();
        return null;
    }
};