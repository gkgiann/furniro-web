import { MosaicContainer } from "./MosaicContainer";

export function Mosaic() {
  return (
    <section className="mx-auto max-w-360 overflow-hidden pt-10 pb-12.5">
      <div className="text-center">
        <h3 className="text-base leading-[150%] font-semibold text-gray-2 sm:text-xl">
          Share your setup with
        </h3>

        <h2 className="mt-2 text-3xl leading-[120%] font-bold text-gray-1 sm:text-[40px]">
          #FuniroFurniture
        </h2>
      </div>

      <MosaicContainer />
    </section>
  );
}
