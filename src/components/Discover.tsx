import clsx from "clsx";
import interior1 from "../assets/interior01.svg";

export function Discover() {
  return (
    <section className="relative">
      <img src={interior1} alt="Imagem de interior de sala" />
      <div
        className={clsx(
          "absolute inset-x-0",
          "max-w-xs mx-auto -mt-14 p-6 pt-7",
          "flex flex-col",
          "bg-yellow-primary-light rounded-[10px]",
          "sm:max-w-lg sm:-mt-30",
          "md:max-w-160.75 md:-mt-40",
          "lg:bottom-12 lg:right-10 lg:left-auto lg:mt-0 lg:mx-0 lg:p-7 lg:pt-10",
          "xl:bottom-29.25 xl:right-15.75 xl:p-9.25 xl:pt-14",
        )}
      >
        <span
          className={clsx(
            "text-primary font-semibold tracking-[3px] text-sm mb-1",
            "xl:text-base",
          )}
        >
          New
        </span>
        <h1
          className={clsx(
            "text-yellow-primary font-bold text-2xl mb-2",
            "xl:text-[52px] leading-8 xl:leading-16.25 xl:mb-4.25",
          )}
        >
          Discover Our <br /> New Collection
        </h1>
        <span
          className={clsx(
            "text-primary font-medium leading-6 mb-6",
            "xl:text-lg xl:mb-11.5",
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </span>

        <button
          className={clsx(
            "w-fit mx-auto px-16 py-4",
            "bg-yellow-primary text-sm text-white font-bold",
            "cursor-pointer transition",
            "lg:mx-0",
            "xl:text-base xl:px-18 xl:py-6.25",
            "hover:scale-105",
          )}
        >
          BUY NOW
        </button>
      </div>
    </section>
  );
}
