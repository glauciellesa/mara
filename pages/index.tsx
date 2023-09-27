import Product from "@/Models/Product";
import ProductItem from "@/components/ProductItem";
import { ProductType } from "@/model/ProductType";
import db from "@/utils/db";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products
          ? products.map((product: ProductType) => (
              <div key={product.slug}>
                <ProductItem product={product} />
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();

  return {
    props: {
      products: products?.map(db.convertDocToObj),
    },
  };
}
