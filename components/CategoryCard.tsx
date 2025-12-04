import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  readonly name: string;
  readonly img: string;
  readonly href: string;
}

export default function CategoryCard({ name, img, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group bg-gray-900/60 card-shadow border border-gray-800 rounded-2xl overflow-hidden 
                 hover:border-primary hover:bg-gray-800 transition p-5 flex flex-col items-center"
    >
      <div className="relative w-36 h-36">
        <Image 
          src={img} 
          alt={name} 
          fill 
          loading="lazy"
          sizes="144px"
          className="object-contain group-hover:scale-105 transition-transform" 
        />
      </div>
      <h3 className="font-heading mt-3 text-lg font-semibold group-hover:text-primary">{name}</h3>
    </Link>
  );
}
