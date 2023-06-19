import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mb-4">
      <nav className="flex flex-wrap items-center justify-between bg-blue-500 p-6">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <Link href="/">
            <span className="cursor-pointer text-xl font-semibold tracking-tight">
              GPT Playground
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="flex items-center rounded border border-blue-200 px-3 py-2 text-blue-200 hover:border-white hover:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
          <div className="text-sm lg:flex-grow">
            {isMenuOpen && (
              <div className="lg:hidden">
                <Link
                  href="/playground"
                  className={`mt-4 block text-blue-200 hover:text-white lg:mt-0 lg:inline-block ${
                    router.pathname === "/playground" ? "font-bold" : ""
                  }`}
                >
                  Playground
                </Link>
                <Link
                  href="/admin"
                  className={`mt-4 block text-blue-200 hover:text-white lg:mt-0 lg:inline-block ${
                    router.pathname === "/admin" ? "font-bold" : ""
                  }`}
                >
                  Admin
                </Link>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Link
              href="/playground"
              className={`mr-4 mt-4 block text-blue-200 hover:text-white lg:mt-0 lg:inline-block ${
                router.pathname === "/playground" ? "font-bold" : ""
              }`}
            >
              Playground
            </Link>
            <Link
              href="/admin"
              className={`mr-4 mt-4 block text-blue-200 hover:text-white lg:mt-0 lg:inline-block ${
                router.pathname === "/admin" ? "font-bold" : ""
              }`}
            >
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
