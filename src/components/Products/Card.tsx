import { toast } from "react-toastify";
import type { Product } from "../../types/product";
import { IconLabel } from "./IconLabel";

type CardProps = {
  product: Product;
};

export function Card({ product }: CardProps) {
  return (
    <div className="relative max-w-71.25 transform transition group">
      <img
        className="h-75.25 object-cover"
        src={product.url}
        alt={product.title}
      />
      <div className="p-4 pb-7.5 bg-card flex flex-col gap-2">
        <h1 className="font-semibold text-gray-1 text-xl sm:text-2xl leading-[120%]">
          {product.title}
        </h1>
        <span className="font-medium leading-[150%] text-gray-3 text-sm sm:text-base">
          {product.description}
        </span>
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-lg sm:text-xl text-gray-1 leading-[150%]">
            {product.price}
          </span>
          <span className="line-through text-gray-4 leading-[150%] text-sm sm:text-base">
            {product.oldPrice}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 z-20 bg-black opacity-0 transition-opacity duration-400 group-hover:opacity-72" />

      <button
        className="absolute left-1/2 top-43.75 z-30 w-50.5 -translate-x-1/2 translate-y-32 bg-white px-13 py-3 font-semibold text-yellow-primary opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:opacity-90 cursor-pointer"
        onClick={() => toast.success("Produto adicionado ao carrinho!")}
      >
        Add to Cart
      </button>

      {product.label && <IconLabel label={product.label} />}
    </div>
  );
}
