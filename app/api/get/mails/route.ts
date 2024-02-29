import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { createLogs } from "@/data/logs";

export const dynamic = "force-dynamic";

export const GET = async () => {
    try {
        await connectDB();

        const mails = await prisma.mails.findMany({
            include: { author: true },
        });

        const logData = {
            userId: "",
            logType: "Success",
            message: "Mails fetched",
            errorCode: 200,
            endpoint: "/api/get/mails",
            responseBody: "Mails list",
        };
        createLogs(logData);
        return new NextResponse(JSON.stringify(mails), {
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
