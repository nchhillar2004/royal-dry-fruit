import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { createLogs } from "@/data/logs";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { id } = await request.json();
    try {
        await connectDB();

        const mail = await prisma.mails.findUnique({
            where: { id: id },
            select: { id: true, title: true },
        });

        if (!mail) {
            return new NextResponse("Mail not found", { status: 404 });
        }

        await prisma.mails.delete({ where: { id: id } });
        const logData = {
            userId: mail.id,
            logType: "Success",
            message: "Mail deleted",
            errorCode: 200,
            endpoint: "/api/delete/mail",
            responseBody: mail.title,
        };
        createLogs(logData);
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
