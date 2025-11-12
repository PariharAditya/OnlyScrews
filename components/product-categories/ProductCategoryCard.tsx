import { cn } from "@/lib/utils";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  imageSrc?: string;
  href: string;
  className?: string;
}

export function ProductCategoryCard({ title, imageSrc, href, className }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block rounded-3xl w-full h-64 md:h-80",
        "outline-none focus-visible:ring-4 focus-visible:ring-[hsl(var(--brand))]/40",
        className,
      )}
      aria-label={title}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-3xl bg-black overflow-hidden",
          "border-4 border-[hsl(var(--brand))]",
          "shadow-[0_8px_30px_rgba(163,255,31,0.12)]",
        )}
      >
        <div className="flex h-full items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="max-h-32 md:max-h-40 object-contain"
              draggable={false}
            />
          ) : (
            <div className="w-32 h-32 bg-neutral-800 rounded-md" />
          )}
        </div>

        <div className="absolute left-6 bottom-6">
          <span
            className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-base md:text-lg font-semibold",
                "bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))]",
                "shadow-[inset_0_2px_0_rgba(0,0,0,0.25)]",
                "whitespace-pre-line text-center",
            )}
          >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}
