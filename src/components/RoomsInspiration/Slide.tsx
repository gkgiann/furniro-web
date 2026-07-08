import clsx from "clsx";
import type { EmblaCarouselType } from "embla-carousel";
import arrowRightFull from "../../assets/arrow-right-full.svg";
import { slides } from "./slides";

type SlideProps = {
  emblaApi: EmblaCarouselType;
  slide: { id: number; image: string; title: string; info: string };
  currentIndex: number;
};

export function Slide({ emblaApi, slide, currentIndex }: SlideProps) {
  const isLastSlide = slide.id === slides.length - 1;
  const isCurrentSlide = currentIndex === slide.id;
  const [number, text] = slide.info.split(" - ");

  return (
    <div
      key={slide.id}
      className={clsx(
        "embla__slide relative mx-3 w-xs transition-all",
        "md:w-93",
        {
          "w-3xs min-[510px]:w-xs md:w-101": isCurrentSlide,
        },
      )}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className={clsx(
          "w-full object-cover",
          isCurrentSlide ? "h-120 sm:h-145.5" : "h-100 sm:h-121.5",
        )}
      />

      <div
        className={clsx("absolute bottom-6 left-6 flex min-w-66.5 items-end", {
          hidden: !isCurrentSlide,
        })}
      >
        <div className="flex w-max flex-col gap-2 bg-white/70 p-6 pr-4.25 backdrop-blur-xs sm:p-8">
          <span className="flex items-center gap-2 text-sm leading-[150%] font-medium text-gray-2 sm:text-base">
            {number}
            <div className="h-px w-6.75 bg-gray-2" />
            {text}
          </span>
          <h1 className="w-max text-2xl leading-[120%] font-semibold text-gray-1 sm:text-[28px]">
            {slide.title}
          </h1>
        </div>

        <button
          onClick={() =>
            !isLastSlide ? emblaApi?.scrollNext() : emblaApi?.scrollTo(0)
          }
          className={clsx(
            "h-max cursor-pointer bg-yellow-primary px-3.75 py-4.5",
          )}
        >
          <img
            className="w-4.5"
            src={arrowRightFull}
            alt="Seta para a direita"
          />
        </button>
      </div>
    </div>
  );
}
