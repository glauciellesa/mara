import { Store } from "@/Context/StoreCartContext";
import { Product } from "@/model/Product";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface ProductProps {
  product: Product;
}

const ProductItem = ({ product }: ProductProps) => {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = (product: Product) => {
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
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          width={300}
          height={200}
          className="rounded-t shadow object-cover "
          src={`/img/${product.image}`}
          alt={`${product.name}'s picture`}
        />
      </Link>
      <div className="flex  flex-col items-center justify-center p-5 ">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg capitalize h-14 ">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="mb-2">${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => {
            addToCartHandler(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
