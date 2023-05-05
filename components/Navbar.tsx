import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow shadow-gray-500/40 flex h-15 justify-between items-center px-4">
      <Link href="/" className="text-lg font-bold">
        <Image
          className="py-2"
          width={70}
          height={70}
          src="/img/logo-no-background.svg"
          alt="store's logo"
        />
      </Link>

      <div>
        <Link href="/cart" className="p-2">
          Cart
        </Link>
        <Link href="/login" className="p-2">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
