import clsx from "clsx";
import interior1 from "../../assets/interior01.svg";

export function Discover() {
  return (
    <section className="relative">
      <img src={interior1} alt="Imagem de interior de sala" />
      <div
        className={clsx(
          "absolute inset-x-0 mx-auto -mt-14 flex max-w-2xs flex-col rounded-[10px] bg-yellow-primary-light p-6 pt-7",
          "sm:-mt-30 sm:max-w-lg",
          "md:-mt-40 md:max-w-160.75",
          "lg:right-10 lg:bottom-12 lg:left-auto lg:mx-0 lg:mt-0 lg:p-7 lg:pt-10",
          "xl:right-15.75 xl:bottom-29.25 xl:p-9.25 xl:pt-14",
        )}
      >
        <span className="mb-1 text-sm font-semibold tracking-[3px] text-primary xl:text-base">
          New Arrival
        </span>
        <h1
          className={clsx(
            "mb-2 text-2xl leading-8 font-bold text-yellow-primary",
            "xl:mb-4.25 xl:text-[52px] xl:leading-16.25",
          )}
        >
          Discover Our <br /> New Collection
        </h1>
        <span
          className={clsx(
            "mb-6 leading-6 font-medium text-primary",
            "xl:mb-11.5 xl:text-lg",
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </span>

        <button
          className={clsx(
            "mx-auto w-fit cursor-pointer bg-yellow-primary px-16 py-4 text-sm font-bold text-white transition hover:scale-105",
            "lg:mx-0 xl:px-18",
            "xl:py-6.25 xl:text-base",
          )}
        >
          BUY NOW
        </button>
      </div>
    </section>
  );
}
