import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/conn";

export const POST = async (request: Request) => {
    const { userId, productId, time } = await request.json();

    await connectDB();

    try {
        const user = await prisma.users.findFirst({
            where: { id: userId },
            select: { id: true, email: true },
        });
        const product = await prisma.products.findFirst({
            where: { id: productId },
            select: { id: true, title: true, cost: true },
        });

        const newOrder = await prisma.orders.create({
            data: {
                Products: { connect: { id: product?.id } },
                Users: { connect: { id: user?.id } },
                time,
            },
        });

        if (user) {
            try {
                await prisma.users.update({
                    where: { id: user.id },
                    data: { orders: { connect: { id: newOrder.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO UPDATE USERS orders");
            }
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        if (product) {
            try {
                await prisma.products.update({
                    where: { id: product.id },
                    data: { orders: { connect: { id: newOrder.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO UPDATE Products orders");
            }
        }
        if (!product) {
            return new NextResponse("Product not found", { status: 404 });
        }
        return NextResponse.json({ newOrder }, { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);

        return new NextResponse("error yaha h ", {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
