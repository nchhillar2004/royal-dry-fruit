import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/conn";
import { createLogs } from "@/data/logs";

export const POST = async (request: Request) => {
    const {
        title,
        body,
        mrp,
        cost,
        discount,
        tagLine,
        brand,
        image,
        authorEmail,
        authorId,
        time,
    } = await request.json();

    await connectDB();

    try {
        const user = await prisma.users.findFirst({
            where: { id: authorId },
            select: { id: true, email: true },
        });

        const newProduct = await prisma.products.create({
            data: {
                title,
                body,
                mrp,
                cost,
                discount,
                tagLine,
                brand,
                authorEmail,
                author: { connect: { id: user?.id } },
                time,
            },
        });

        if (user) {
            try {
                await prisma.users.update({
                    where: { id: user.id },
                    data: { product: { connect: { id: newProduct.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO UPDATE USERS products");
            }
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        const logData = {
            userId: user.id,
            logType: "Success",
            message: "Product added successfully",
            errorCode: 200,
            endpoint: "/api/post/product",
            responseBody: title,
        };
        createLogs(logData);
        return NextResponse.json({ newProduct }, { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);
        const logData = {
            userId: "",
            logType: "Error",
            message: "Internal server error while creating product",
            errorCode: 500,
            endpoint: "/api/post/product",
            responseBody: err,
        };
        createLogs(logData);
        return new NextResponse("error yaha h ", {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
