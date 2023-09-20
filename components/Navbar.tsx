import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@/Context/StoreCartContext";
import NavLink from "./NavLink";

const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  //Necessary to update the product quantity in the server side
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <nav className="shadow shadow-gray-500/40 flex h-15 justify-between items-center px-4 py-2">
      <NavLink href="/" className="text-lg font-bold">
        <Image
          className="py-2 text-red"
          width={80}
          height={80}
          src="/img/logo-no-background.svg"
          alt="store's logo"
        />
      </NavLink>

      <div>
        <NavLink href="/" className="p-2">
          Store
        </NavLink>
        <NavLink href="/about" className="p-2">
          About
        </NavLink>
        <NavLink href="/contact" className="p-2">
          Contact
        </NavLink>
        <NavLink href="/cart" className="p-2">
          <FontAwesomeIcon icon={faCartShopping} className="pr-2" />

          {cartItemsCount > 0 ? (
            <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
              {cartItemsCount}
            </span>
          ) : null}
        </NavLink>
        <NavLink href="/login" className="p-2">
          <FontAwesomeIcon icon={faUser} className="pr-2" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
