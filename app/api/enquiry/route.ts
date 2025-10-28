import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const body = await req.json();

        const {
            name,
            email,
            phone,
            message,
        } = body;

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        if (!email) {
            return new NextResponse("Email is required", { status: 400 });
        }

        if (!message) {
            return new NextResponse("Message is required", { status: 400 });
        }

        const enquiry = await prisma.enquiry.create({
            data: {
                name,
                email,
                phone,
                message,
                userId: userId || undefined,
            },
        });

        return NextResponse.json(enquiry);
    } catch (error) {
        console.error("[ENQUIRY_POST]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function GET() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const enquiries = await prisma.enquiry.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(enquiries);
    } catch (error) {
        console.error("[ENQUIRIES_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}