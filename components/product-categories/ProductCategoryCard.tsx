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
        "group relative block rounded-3xl w-full h-48 md:h-56",
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
              className="max-h-24 md:max-h-32 object-contain"
              draggable={false}
            />
          ) : (
            <div className="w-24 h-24 bg-neutral-800 rounded-md" />
          )}
        </div>

        <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6">
          <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-semibold",
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
