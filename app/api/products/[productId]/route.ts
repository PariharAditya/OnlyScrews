import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(
    req: Request,
    { params }: { params: { productId: string } }
) {
    try {
        if (!params.productId) {
            return new NextResponse("Product ID is required", { status: 400 });
        }

        const product = await prisma.product.findUnique({
            where: {
                id: params.productId,
            },
            include: {
                category: true,
            },
        });

        if (!product) {
            return new NextResponse("Product not found", { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("[PRODUCT_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { productId: string } }
) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();

        const {
            name,
            description,
            price,
            categoryId,
            images,
            stock,
        } = body;

        if (!params.productId) {
            return new NextResponse("Product ID is required", { status: 400 });
        }

        const product = await prisma.product.update({
            where: {
                id: params.productId,
            },
            data: {
                name,
                description,
                price,
                categoryId,
                images,
                stock,
            },
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error("[PRODUCT_PATCH]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { productId: string } }
) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!params.productId) {
            return new NextResponse("Product ID is required", { status: 400 });
        }

        const product = await prisma.product.delete({
            where: {
                id: params.productId,
            },
        });

        return NextResponse.json(product);
    } catch (error) {
        console.error("[PRODUCT_DELETE]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}