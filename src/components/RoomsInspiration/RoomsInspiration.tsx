import clsx from "clsx";
import { Carousel } from "./Carousel";
import { Info } from "./Info";

export function RoomsInspiration() {
  return (
    <section
      className={clsx(
        "relative mt-17.25 flex flex-col items-center gap-7.5 overflow-hidden bg-inspiration py-11",
        "lg:grid lg:grid-cols-4 lg:pl-10",
        "xl:grid-cols-3 xl:pl-25",
      )}
    >
      <Info />
      <Carousel />
    </section>
  );
}
