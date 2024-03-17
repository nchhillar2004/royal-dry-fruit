import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/conn";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { name, email, password, time, image } = await request.json();

    await connectDB();
    const existingEmail = await prisma.users.findUnique({
        where: { email: email },
        select: { email: true },
    });

    if (existingEmail) {
        return new NextResponse("Email already registered", { status: 409 });
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

        return new NextResponse("User created", { status: 200 });
    } catch (error) {
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
