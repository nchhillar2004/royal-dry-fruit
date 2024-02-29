import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    try {
        const { id } = await request.json();
        await connectDB();

        const users = await prisma.users.findUnique({
            where: { id: id },
            include: { mails: true, orders: true, product: true },
        });

        return new NextResponse(JSON.stringify(users), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`Internal Server Error: ${error.message}`, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
