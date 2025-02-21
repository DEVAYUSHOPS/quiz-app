import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 p-4 text-white flex justify-start">
      <Link href="/" className="font-bold pr-4">
        Home
      </Link>
      <Link href="/dashboard" className="font-bold">
        Dashboard
      </Link>
    </nav>
  );
}
