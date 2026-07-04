import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import { Card } from "./Card";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  return (
    <section className="relative flex flex-col items-center gap-8 mt-14">
      <h1 className="text-3xl sm:text-[40px] text-gray-1 leading-[120%] font-bold">
        Our Products
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
      <button className="font-semibold text-yellow-primary border border-yellow-primary py-3 px-20 leading-[150%] transition cursor-pointer hover:bg-yellow-primary hover:text-white">
        Show More
      </button>
    </section>
  );
}
