import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                _count: {
                    select: {
                        products: true,
                    },
                },
            },
        });

        return NextResponse.json(categories);
    } catch (error) {
        console.error("[CATEGORIES_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();

        const {
            name,
            description,
            image,
        } = body;

        if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        }

        const existingCategory = await prisma.category.findUnique({
            where: {
                name,
            },
        });

        if (existingCategory) {
            return new NextResponse("Category already exists", { status: 400 });
        }

        const category = await prisma.category.create({
            data: {
                name,
                description,
                image,
            },
        });

        return NextResponse.json(category);
    } catch (error) {
        console.error("[CATEGORIES_POST]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}