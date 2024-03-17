import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/conn";

export const POST = async (request: Request) => {
    const { title, body, authorEmail, authorId, type, time } =
        await request.json();

    await connectDB();

    try {
        const user = await prisma.users.findFirst({
            where: { id: authorId },
            select: { id: true, email: true },
        });

        const newMail = await prisma.mails.create({
            data: {
                title,
                body,
                type,
                authorEmail,
                author: { connect: { id: user?.id } },
                time,
            },
        });

        if (user) {
            try {
                await prisma.users.update({
                    where: { id: user.id },
                    data: { mails: { connect: { id: newMail.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO UPDATE USERS Mails");
            }
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        return NextResponse.json({ newMail }, { status: 200 });
    } catch (err: any) {
        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
