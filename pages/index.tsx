import ProductItem from "@/components/ProductItem";
import RootLayout from "@/components/RootLayout";
import { Product } from "@/model/Product";
import data from "@/utils/data";

export default function Home() {
  return (
    <RootLayout title="Home Page">
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product: Product) => (
          <div key={product.slug}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </RootLayout>
  );
}
