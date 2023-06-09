import data from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import { Store } from "@/Context/StoreCartContext";
import Head from "next/head";

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((item) => {
      return item.product.slug === product.slug;
    });

    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { product, quantity: 1 } });
  };

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className="py-3">
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} className="pr-2" />
          Back to all products
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3 pb-20">
        <div className="md:col-span-2">
          <Image
            width={200}
            height={100}
            layout="responsive"
            className="rounded shadow object-cover w-200 "
            src={`/img/${product.image}`}
            alt={`${product.name}'s picture`}
          />
        </div>
        <div className="pl-3 font-bold py-5">
          <p className="capitalize text-lg">{product.name}</p>
          <p>
            Category: <span className="font-normal"> {product.category}</span>
          </p>
          <p>
            Brand: <span className="font-normal">{product.brand}</span>
          </p>
          <p>
            <span className="font-normal">{product.rating}</span> of{" "}
            <span className="font-normal">{product.numReviews} </span>
            reviews
          </p>
          <p>
            Description:
            <span className="font-normal"> {product.description}</span>
          </p>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between w-full">
              <div className="font-bold">Price </div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between w-full">
              <div className="font-bold">Status</div>
              <div>{product.countInStock > 0 ? "In Stock" : "Unvailable"}</div>
            </div>
            <button
              onClick={addToCartHandler}
              className="primary-button w-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
