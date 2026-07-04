import clsx from "clsx";
import { toast } from "react-toastify";
import type { Product } from "../../types/product";
import { IconLabel } from "./IconLabel";

type CardProps = {
  product: Product;
};

export function Card({ product }: CardProps) {
  return (
    <div className="group relative max-w-71.25 transform transition">
      <img
        className="h-75.25 object-cover"
        src={product.url}
        alt={product.title}
      />
      <div className="flex flex-col gap-2 bg-card p-4 pb-7.5">
        <h1 className="text-xl leading-[120%] font-semibold text-gray-1 sm:text-2xl">
          {product.title}
        </h1>
        <span className="text-sm leading-[150%] font-medium text-gray-3 sm:text-base">
          {product.description}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-lg leading-[150%] font-semibold text-gray-1 sm:text-xl">
            {product.price}
          </span>
          <span className="text-sm leading-[150%] text-gray-4 line-through sm:text-base">
            {product.oldPrice}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 z-20 bg-black opacity-0 transition-opacity duration-400 group-hover:opacity-72" />

      <button
        className={clsx(
          "absolute top-43.75 left-1/2 z-30 w-50.5 -translate-x-1/2",
          "translate-y-32 cursor-pointer bg-white px-13 py-3 font-semibold text-yellow-primary",
          "opacity-0 transition-all duration-300 ease-out",
          "group-hover:translate-y-0 group-hover:opacity-100 hover:opacity-90",
        )}
        onClick={() => toast.success("Produto adicionado ao carrinho!")}
      >
        Add to Cart
      </button>

      {product.label && <IconLabel label={product.label} />}
    </div>
  );
}
