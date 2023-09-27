import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { signOut, useSession } from "next-auth/react";

import { Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";

import { Store } from "@/Context/StoreCartContext";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { status, data: session } = useSession();

  //Necessary to update the product quantity in the server side
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({
      type: "CART_RESET",
      // eslint-disable-next-line no-undef
      payload: { quantity: 0, product: undefined },
    });

    signOut({ callbackUrl: "/" });
  };

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

      <div className="flex gap-2">
        <div className="hidden md:block">
          <NavLink href="/" className="p-2">
            Store
          </NavLink>
          <NavLink href="/about" className="p-2">
            About
          </NavLink>
          <NavLink href="/contact" className="p-2">
            Contact
          </NavLink>
        </div>
        <div className="flex gap-2">
          <NavLink href="/cart" className="p-2">
            <FontAwesomeIcon icon={faCartShopping} className="pr-2" />

            {cartItemsCount > 0 ? (
              <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                {cartItemsCount}
              </span>
            ) : null}
          </NavLink>

          {status === "loading" ? (
            "Loading"
          ) : session?.user ? (
            <Menu as="div" className="relative inline-block">
              <Menu.Button className="text-yellow-500">
                {session.user.name}
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-md bg-gray-900/70">
                <Menu.Item>
                  <DropdownMenu className="dropdown-link" href="/profile">
                    Profile
                  </DropdownMenu>
                </Menu.Item>
                <Menu.Item>
                  <DropdownMenu className="dropdown-link" href="/orderHistory">
                    Order History
                  </DropdownMenu>
                </Menu.Item>
                <Menu.Item>
                  <a
                    className="dropdown-link"
                    href="#"
                    onClick={logoutClickHandler}
                  >
                    Logout
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <NavLink href="/login" className="p-2">
              <FontAwesomeIcon icon={faUser} className="pr-2" />
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
