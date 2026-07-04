import clsx from "clsx";
import bedroom from "../../assets/bedroom.jpg";
import dining from "../../assets/dining.jpg";
import living from "../../assets/living.jpg";
import { Category } from "./Category";

export function CategoryGrid() {
  return (
    <section
      className={clsx(
        "mt-80 flex flex-col items-center justify-center px-4",
        "sm:mt-42",
        "md:mt-32",
        "lg:mt-16",
        "xl:mt-14",
      )}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold sm:text-[32px]">Browse The Range</h1>
        <span className="text-lg text-secondary sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>

      <div className="mt-15.5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Category
          src={dining}
          alt="Imagem de interior de sala de jantar"
          title="Dining"
        />
        <Category
          src={living}
          alt="Imagem de interior de sala de estar"
          title="Living"
        />
        <Category
          src={bedroom}
          alt="Imagem de interior de quarto"
          title="Bedroom"
        />
      </div>
    </section>
  );
}
