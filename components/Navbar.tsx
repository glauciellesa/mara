import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="shadow shadow-gray-500/40 flex h-15 justify-between items-center px-4 py-2">
      <Link href="/" className="text-lg font-bold">
        <Image
          className="py-2 text-red"
          width={80}
          height={80}
          src="/img/logo-no-background.svg"
          alt="store's logo"
        />
      </Link>

      <div>
        <Link href="/store" className="p-2">
          Store
        </Link>
        <Link href="/about" className="p-2">
          About
        </Link>
        <Link href="/contact" className="p-2">
          Contact
        </Link>
        <Link href="/cart" className="p-2">
          <FontAwesomeIcon icon={faCartShopping} className="pr-2" />
        </Link>
        <Link href="/login" className="p-2">
          <FontAwesomeIcon icon={faUser} className="pr-2" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
