import ProductItem from "@/components/ProductItem";
import { Product } from "@/model/Product";
import data from "@/utils/data";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product: Product) => (
          <div key={product.slug}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
