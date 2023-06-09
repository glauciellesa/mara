import Head from "next/head";
import { useContext } from "react";
import { Store } from "@/Context/StoreCartContext";
import Link from "next/link";
import Item from "@/components/Item";

const Cart = () => {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  console.log({ cartItems });

  return (
    <>
      <Head>
        <title>Cart Total</title>
      </Head>

      <div className="flex flex-col pb-9 border border-gray-500/40 p-10 rounded-md">
        <h1 className=" py-10  text-3xl ">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            Cart is empty. <Link href="/">Go shopping</Link>
          </div>
        ) : (
          <form className="m-2 grid grid-cols-1 md:grid-cols-12 gap-x-8">
            <section aria-labelledby="cart-heading" className="col-span-8 ">
              <h2 id="cart-heading" className="hidden">
                Items in your shopping cart
              </h2>
              <ul role="list" className="border-t border-t-gray-500/40">
                {cartItems.map((currentItem) => (
                  <Item key={currentItem.product.slug} item={currentItem} />
                ))}
              </ul>
            </section>
            <section
              aria-labelledby="summary-heading"
              className="bg-gray-800/30 flex flex-col h-15 justify-between px-4 py-2 rounded-sm
           col-span-4 h-fit"
            >
              <h2 id="summary-heading" className="pt-1.5 font-bold text-lg">
                Order Summary
              </h2>
              <dl className="mt-6 w-full">
                <div className="flex justify-between border-b border-b-gray-500/40 pb-2">
                  <dt>Subtotal</dt>
                  <dt>$99.00</dt>
                </div>
                <div className="flex justify-between text-sm border-b border-b-gray-500/40 pb-2 pt-2">
                  <dt className="flex">
                    <span>Shipping estimate</span>
                  </dt>
                  <dt>$5.00</dt>
                </div>
                <div className="flex justify-between text-sm border-b border-b-gray-500/40 pb-2 pt-2">
                  <dt className="flex">
                    <span>Tax estimate</span>
                  </dt>
                  <dt>$8.32</dt>
                </div>
                <div className="flex justify-between text-sm">
                  <dt>Order total</dt>
                  <dd>$112.32</dd>
                </div>
              </dl>
              <div className="w-11/12 m-7">
                <button className="primary-button w-full" type="submit">
                  Checkout
                </button>
              </div>
            </section>
          </form>
        )}
      </div>
    </>
  );
};

export default Cart;
