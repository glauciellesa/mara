import RootLayout from "@/components/RootLayout";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductScreen = () => {
  console.log("teste");
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <RootLayout title={product.name}>
      <div className="flex">
        <Image
          width={400}
          height={300}
          className="rounded shadow object-cover "
          src={`/img/${product.image}`}
          alt={`${product.name}'s picture`}
        />
        <p>{product.name}</p>
        <p>Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
        <p>
          {product.rating} of {product.numReviews} reviews
        </p>
        <p>Description: {product.description}</p>
      </div>
    </RootLayout>
  );
};

export default ProductScreen;
