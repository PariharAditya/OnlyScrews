export const runtime = "edge";

export async function GET() {
  // Redirect to the static image in public/images so the PNG is used as the icon.
  return Response.redirect('/images/final%20sb%20favicon.png', 307);
}
