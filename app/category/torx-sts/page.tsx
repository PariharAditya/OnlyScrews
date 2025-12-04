import { redirect } from "next/navigation";

export default function TorxStsRedirect() {
  // Redirect legacy /category/torx-sts to the Self-Tapping Screws product listing
  redirect("/products/screws/self-tapping-screws/");
}
