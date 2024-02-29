import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/conn";
import bcrypt from "bcryptjs";
import { createLogs } from "@/data/logs";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { name, email, password, time, image } = await request.json();

    await connectDB();
    const existingEmail = await prisma.users.findUnique({
        where: { email: email },
        select: { email: true },
    });

    if (existingEmail) {
        return new NextResponse("Email already registered", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    try {
        const newUser = await prisma.users.create({
            data: {
                name,
                email,
                time,
                image,
                password: hashedPassword,
            },
        });
        const logData = {
            userId: newUser.id,
            logType: "Success",
            message: "New user registered",
            errorCode: 200,
            endpoint: "/api/register",
            responseBody: "User created",
        };
        createLogs(logData);

        return new NextResponse("User created", { status: 200 });
    } catch (error) {
        console.log(error);
        const err = JSON.stringify({ error });
        const logData = {
            userId: "null",
            logType: "Error",
            message: "Internal server error",
            errorCode: 500,
            endpoint: "/api/register",
            responseBody: err,
        };
        createLogs(logData);
        return NextResponse.json(
            { error },
            {
                status: 500,
            }
        );
    } finally {
        await prisma.$disconnect();
    }
};
