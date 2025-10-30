import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="block">
      <div className="flex flex-col">
        <div className="relative w-[180px] h-[50px]">
          <Image 
            src="/SB.jpg"
            alt="Screw Bazar Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
