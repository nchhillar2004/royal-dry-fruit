import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { createLogs } from "@/data/logs";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { id } = await request.json();
    try {
        await connectDB();

        const user = await prisma.users.findUnique({
            where: { id: id },
            select: { id: true },
        });

        if (!user) {
            return new NextResponse("user not found", { status: 404 });
        }

        await prisma.users.delete({ where: { id: id } });
        return new NextResponse("user deleted successfully", { status: 200 });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`Internal Server Error: ${error}`, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
