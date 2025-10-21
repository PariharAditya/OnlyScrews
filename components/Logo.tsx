import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-2xl font-semibold">
        Screw<span className="text-[#6A20CD]">Bazar</span>
      </span>
    </Link>
  );
}
