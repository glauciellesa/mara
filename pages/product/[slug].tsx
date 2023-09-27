import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import { Store } from "@/Context/StoreCartContext";
import Head from "next/head";
import { GetServerSideProps } from "next";
import db from "@/utils/db";
import Product from "@/Models/Product";
import { ParsedUrlQuery } from "querystring";
import { ProductType } from "@/model/ProductType";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const ProductScreen = (props: ProductType) => {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((item) => {
      if (!item.product) return;
      return item.product.slug === product.slug;
    });

    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { product, quantity } });
    router.push("/cart");
  };

  return (
    <>
      {product ? (
        <>
          {" "}
          <Head>
            <title>{product.name}</title>
          </Head>
          <div className="px-9 pt-9">
            <Link href="/">
              <FontAwesomeIcon icon={faArrowLeft} className="pr-2" />
              Back to all products
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-12 p-9">
            <div className="md:col-span-1">
              <Image
                width={400}
                height={300}
                className="rounded shadow object-cover"
                src={`/img/${product.image}`}
                alt={`${product.name}'s picture`}
              />
            </div>
            <div className="font-bold sm:py-8">
              <p className="capitalize text-lg">{product.name}</p>
              <p>
                Category:{" "}
                <span className="font-normal"> {product.category}</span>
              </p>
              <p>
                Brand: <span className="font-normal">{product.brand}</span>
              </p>
              <p>
                <span className="font-normal">{product.rating}</span>
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
                  <div>
                    {product.countInStock > 0 ? "In Stock" : "Unvailable"}
                  </div>
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
      ) : (
        <div>Product not Found</div>
      )}
    </>
  );
};

export default ProductScreen;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params as Params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();

  await db.disconect();

  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
};
