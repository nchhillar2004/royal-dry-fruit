import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { createLogs } from "@/data/logs";

export const dynamic = "force-dynamic";

export const GET = async () => {
    try {
        await connectDB();

        const orders = await prisma.orders.findMany({
            include: { Users: true, Products: true },
        });
        const logData = {
            userId: "",
            logType: "Success",
            message: "Orders fetched",
            errorCode: 200,
            endpoint: "/api/get/orders",
            responseBody: "Orders",
        };
        createLogs(logData);

        return new NextResponse(JSON.stringify(orders), {
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
