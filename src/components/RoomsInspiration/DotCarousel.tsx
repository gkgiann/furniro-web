import clsx from "clsx";
import type { EmblaCarouselType } from "embla-carousel";
import { slides } from "./slides";

type DotsCarouselProps = {
  currentIndex: number;
  emblaApi: EmblaCarouselType;
};

export function DotsCarousel({ currentIndex, emblaApi }: DotsCarouselProps) {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-1",
        "min-[550px]:bottom-12 min-[550px]:left-86 min-[550px]:translate-x-0",
        "md:left-110",
      )}
    >
      {slides.map((slide) => (
        <button
          key={slide.id}
          onClick={() => emblaApi.scrollTo(slide.id)}
          className={clsx("cursor-pointer rounded-full p-2", {
            "border border-yellow-primary": currentIndex === slide.id,
          })}
        >
          <div
            className={clsx(
              "h-2.75 w-2.75 rounded-full",
              currentIndex === slide.id ? "bg-yellow-primary" : "bg-gray-5",
            )}
          />
        </button>
      ))}
    </div>
  );
}
