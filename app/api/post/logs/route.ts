import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/conn";

export const POST = async (request: Request) => {
    const {
        userId,
        logType,
        message,
        errorCode,
        endpoint,
        responseBody,
    } = await request.json();
    const userAgent = request.headers.get("user-agent");
    const ipAddress =
        request.headers.get("x-real-ip") ||
        request.headers.get("x-forwarded-for");
    await connectDB();

    try {
        const user = await prisma.users.findFirst({
            where: { id: userId },
            select: { id: true, email: true },
        });

        const newLogs = await prisma.websiteLogs.create({
            data: {
                logType,
                message,
                endpoint,
                userAgent,
                ipAddress,
                errorCode,
                responseBody,
                usersId: userId,
            },
        });

        if (user) {
            try {
                await prisma.users.update({
                    where: { id: user.id },
                    data: { logs: { connect: { id: newLogs.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO UPDATE USERS Mails");
            }
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        return NextResponse.json({ newLogs }, { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);

        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
