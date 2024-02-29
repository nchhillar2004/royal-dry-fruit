import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { id } = await request.json();
    try {
        await connectDB();

        const mail = await prisma.mails.findUnique({
            where: { id: id },
            select: { id: true },
        });

        if (!mail) {
            return new NextResponse("Mail not found", { status: 404 });
        }

        await prisma.mails.delete({ where: { id: id } });
        return new NextResponse("Mail deleted successfully", { status: 200 });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`Internal Server Error: ${error}`, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
