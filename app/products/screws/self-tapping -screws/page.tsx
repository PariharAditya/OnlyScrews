import { permanentRedirect } from "next/navigation";

export default function RedirectPage() {
  permanentRedirect("/products/screws/self-tapping-screws");
}
