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
    <section className="relative mt-14 flex flex-col items-center gap-8">
      <h1 className="text-3xl leading-[120%] font-bold text-gray-1 sm:text-[40px]">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
      <button className="cursor-pointer border border-yellow-primary px-20 py-3 leading-[150%] font-semibold text-yellow-primary transition hover:bg-yellow-primary hover:text-white">
        Show More
      </button>
    </section>
  );
}
