import { Product } from "@/model/Product";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: Product;
}

const ProductItem = ({ product }: ProductProps) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          className="rounded shadow"
          src={`/img/${product.image}`}
          width={300}
          height={300}
          alt={`${product.name}'s picture`}
        />
      </Link>
      <div className="flex  flex-col items-center justify-center p-5 ">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg capitalize">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="mb-2">${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
