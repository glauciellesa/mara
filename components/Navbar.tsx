import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow shadow-blue-500/40 flex h-12 justify-between items-center px-4">
      <Link href="/" className="text-lg font-bold">
        amazoni
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
