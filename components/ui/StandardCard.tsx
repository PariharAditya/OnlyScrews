import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/lib/theme";

interface StandardCardProps {
  image: string;
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function StandardCard({
  image,
  title,
  href,
  onClick,
  className = "",
}: StandardCardProps) {
  const CardWrapper = href ? Link : 'div';
  const wrapperProps = href ? { href } : {};
  
  return (
    <CardWrapper
      {...wrapperProps}
      onClick={onClick}
      className={`relative cursor-pointer block w-full max-w-[280px] ${className}`}
      style={{
        padding: "10px",
        borderRadius: "16px",
        background: "#000000",
        boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
        border: `3px solid ${COLORS.primary}`,
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)";
      }}
    >
      {/* Inner glow outline */}
      <div
        style={{
          position: "absolute",
          inset: "2px",
          borderRadius: "calc(16px - 2px)",
          pointerEvents: "none",
          boxShadow: `inset 0 0 0 2px rgba(188,255,131,0.18)`,
        }}
      />

      {/* Corner glow */}
      <div
        className="hidden sm:block"
        style={{
          position: "absolute",
          right: "6px",
          top: "6px",
          width: "10px",
          height: "10px",
          borderRadius: "5px",
          background: "rgba(188,255,131,0.08)",
        }}
      />

      {/* Image wrapper */}
      <div
        className="h-[120px] sm:h-[140px] md:h-[160px]"
        style={{
          background: "#000000",
          borderRadius: "12px",
          padding: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 280px"
          loading="lazy"
          style={{
            objectFit: "contain",
            filter: "none",
            background: "transparent",
          }}
        />
      </div>

      {/* Badge bottom-left */}
      <div
        className="text-xs sm:text-sm md:text-[15px]"
        style={{
          position: "absolute",
          left: "6px",
          bottom: "6px",
          background: `rgba(188,255,131,0.95)`,
          color: "#0b0b0b",
          padding: "5px 10px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          fontFamily: '"Nunito Sans", system-ui, sans-serif',
          maxWidth: "calc(100% - 12px)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </div>
    </CardWrapper>
  );
}
