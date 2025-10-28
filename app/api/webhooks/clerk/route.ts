import { headers } from 'next/headers'
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { WebhookEvent } from '@clerk/nextjs/server';

// This will provide typesafe access to User data
type UserEvent = {
  id: string;
  email_addresses: Array<{ email_address: string }>;
  first_name?: string;
  last_name?: string;
  image_url?: string;
};

export async function POST(req: Request) {
  // Get the headers
  const headersList = headers();
  const svix_id = (await headersList).get("svix-id");
  const svix_timestamp = (await headersList).get("svix-timestamp");
  const svix_signature = (await headersList).get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const { type, data } = payload as WebhookEvent;

  // Skip verification in development for easier testing
  // In production you should use Webhook.verify with svix

  try {
    if (type === 'user.created' || type === 'user.updated') {
      const userData = data as UserEvent;

      // For user created or updated, use upsert to handle both cases
      await prisma.user.upsert({
        where: { clerkId: userData.id },
        update: {
          email: userData.email_addresses[0]?.email_address || "",
          name: `${userData.first_name || ""} ${userData.last_name || ""}`.trim(),
          image: userData.image_url,
        },
        create: {
          clerkId: userData.id,
          email: userData.email_addresses[0]?.email_address || "",
          name: `${userData.first_name || ""} ${userData.last_name || ""}`.trim(),
          image: userData.image_url,
        }
      });

      console.log(`User ${type === 'user.created' ? 'created' : 'updated'} in database:`, userData.id);
    } else if (type === 'user.deleted') {
      // For user deleted, we need to handle it differently as the data structure is different
      await prisma.user.deleteMany({
        where: { clerkId: data.id as string },
      });
      console.log('User deleted from database:', data.id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }
}