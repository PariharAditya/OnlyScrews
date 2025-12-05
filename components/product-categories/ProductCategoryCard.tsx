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
        "group relative block rounded-2xl sm:rounded-3xl w-full aspect-square sm:aspect-auto sm:h-48 md:h-52 lg:h-56",
        "outline-none focus-visible:ring-4 focus-visible:ring-[hsl(var(--brand))]/40",
        className,
      )}
      aria-label={title}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl sm:rounded-3xl bg-black overflow-hidden",
          "border-2 sm:border-3 md:border-4 border-[hsl(var(--brand))]",
          "shadow-[0_8px_30px_rgba(163,255,31,0.12)]",
        )}
      >
        <div className="flex h-full items-center justify-center p-2 sm:p-3">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              loading="lazy"
              className="max-h-16 sm:max-h-20 md:max-h-28 lg:max-h-32 w-auto object-contain"
              draggable={false}
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-neutral-800 rounded-md" />
          )}
        </div>

        <div className="absolute left-2 bottom-2 right-2 sm:left-3 sm:bottom-3 sm:right-3 md:left-4 md:bottom-4 md:right-4 lg:left-6 lg:bottom-6 lg:right-6">
          <span
            className={cn(
                "inline-block rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-xs sm:text-sm md:text-base font-semibold",
                "bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))]",
                "shadow-[inset_0_2px_0_rgba(0,0,0,0.25)]",
                "whitespace-nowrap overflow-hidden text-ellipsis max-w-full",
            )}
          >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}
