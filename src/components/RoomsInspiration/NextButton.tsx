import clsx from "clsx";
import type { EmblaCarouselType } from "embla-carousel";
import arrowRight from "../../assets/arrow-right.svg";

export function NextButton({
  emblaApi,
  isLastSlide,
}: {
  emblaApi: EmblaCarouselType;
  isLastSlide: boolean;
}) {
  return (
    <button
      className={clsx(
        "absolute top-130 right-4 cursor-pointer rounded-full bg-white p-3 shadow-[0_0_20px_rgba(0,0,0,0.10)]",
        "min-[425px]:right-8",
        "sm:right-12",
        "lg:top-66.75 lg:right-14",
      )}
      onClick={() =>
        isLastSlide ? emblaApi?.scrollTo(0) : emblaApi?.scrollNext()
      }
    >
      <img className="w-6" src={arrowRight} alt="Seta para a direita" />
    </button>
  );
}
