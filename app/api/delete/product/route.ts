import { connectDB } from "@/helpers/conn";
import { NextResponse } from "next/server";
import prisma from "@/prisma";

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
        return new NextResponse("Product deleted successfully", {
            status: 200,
        });
    } catch (error: any) {
        return new NextResponse(`Internal Server Error: ${error}`, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
