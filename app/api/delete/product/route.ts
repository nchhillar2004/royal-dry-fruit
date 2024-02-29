import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { createLogs } from "@/data/logs";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { id } = await request.json();
    try {
        await connectDB();

        const product = await prisma.products.findUnique({
            where: { id: id },
            select: { id: true, title: true },
        });

        if (!product) {
            return new NextResponse("Product not found", { status: 404 });
        }

        await prisma.products.delete({ where: { id: id } });
        const logData = {
            userId: product.id,
            logType: "Success",
            message: "Product deleted",
            errorCode: 200,
            endpoint: "/api/delete/product",
            responseBody: product.title,
        };
        createLogs(logData);
        return new NextResponse("Product deleted successfully", {
            status: 200,
        });
    } catch (error: any) {
        console.error("Error:", error);
        const logData = {
            userId: error.id,
            logType: "Error",
            message: "Product NOT deleted",
            errorCode: 500,
            endpoint: "/api/delete/product",
            responseBody: error,
        };
        createLogs(logData);
        return new NextResponse(`Internal Server Error: ${error}`, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
