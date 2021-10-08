import HeaderNavLinks from "./HeaderNavLinks";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto flex justify-between px-4 py-4">
          <div className="text-lg font-semibold">
            <Link href="/">
              <a>Reza Baharvand</a>
            </Link>
          </div>
          <div>
            {HeaderNavLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <a className="text-lg font-normal text-gray-500 hover:text-gray-900 hover:underline p-2 sm:p-4">
                  {link.title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
