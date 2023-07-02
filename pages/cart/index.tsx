import { Product } from "@/model/Product";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Cart = () => {
  const item: Product = {
    name: "wide led trousers with darts",
    slug: "wide-led-trousers-with-darts",
    category: "trouser",
    image: "trouser1.jpeg",
    price: 50,
    brand: "Zara",
    rating: 4.5,
    numReviews: 8,
    countInStock: 2,
    description:
      "High-waist trousers with front darts. Featuring front pockets and rear false welt pockets. Wide-leg design. Front zip fly, inner button and metal hook fastening.",
  };
  const cartItems = [];
  cartItems.push(item);
  console.log(cartItems);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <div className="flex flex-col pb-9">
        <h1 className=" py-10  text-3xl ">Shopping Cart</h1>
        <form className="m-2 grid grid-cols-1 md:grid-cols-12 gap-x-8">
          <section aria-labelledby="cart-heading" className="col-span-7 ">
            <h2 id="cart-heading" className="hidden">
              Items in your shopping cart
            </h2>
            <ul role="list" className="border-t border-t-gray-500/40">
              <li className="flex gap-5 border-b border-b-gray-500/40 py-8">
                <div>
                  <Image
                    width={150}
                    height={75}
                    className="rounded-t shadow object-cover "
                    src={`/img/${cartItems[0].image}`}
                    alt={`${cartItems[0].name}'s picture`}
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div className=" flex flex-col relative gap-x-0.5">
                    <div className="pr-12 ">
                      <div className="pb-1.5">
                        <h3 className="capitalize">
                          <a href="#">{cartItems[0].name}</a>
                        </h3>
                      </div>
                      <div className="capitalize font-light text-gray-500/90">
                        {cartItems[0].category}
                      </div>
                      <div>
                        <p>${cartItems[0].price}</p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start">
                      <label htmlFor="quantity-0"></label>
                      <select
                        name="quantity-0"
                        id="quantity-0"
                        className="border bg-transparent rounded-md px-3 py-1 outline-0"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      <div className="absolute top-0 right-0">
                        <button type="button">
                          <span className="hidden">Remove</span>
                          <FontAwesomeIcon icon={faX} className="pr-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <FontAwesomeIcon icon={faCheck} className="pr-2" />
                    <span>In Stock</span>
                  </p>
                </div>
              </li>
              <li className="flex gap-5 border-b border-b-gray-500/40 py-8">
                <div>
                  <Image
                    width={150}
                    height={75}
                    className="rounded-t shadow object-cover "
                    src={`/img/${cartItems[0].image}`}
                    alt={`${cartItems[0].name}'s picture`}
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div className=" flex flex-col relative gap-x-0.5">
                    <div className="pr-12 ">
                      <div className="pb-1.5">
                        <h3 className="capitalize">
                          <a href="#">{cartItems[0].name}</a>
                        </h3>
                      </div>
                      <div className="capitalize font-light text-gray-500/90">
                        {cartItems[0].category}
                      </div>
                      <div>
                        <p>${cartItems[0].price}</p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start">
                      <label htmlFor="quantity-0"></label>
                      <select
                        name="quantity-0"
                        id="quantity-0"
                        className="border bg-transparent rounded-md px-3 py-1 outline-0"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      <div className="absolute top-0 right-0">
                        <button type="button">
                          <span className="hidden">Remove</span>
                          <FontAwesomeIcon icon={faX} className="pr-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <FontAwesomeIcon icon={faCheck} className="pr-2" />
                    <span>In Stock</span>
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section
            aria-labelledby="summary-heading"
            className="bg-gray-800/30 flex flex-col h-15 justify-between px-4 py-2 rounded-sm
           col-span-5"
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
      </div>
    </>
  );
};

export default Cart;
