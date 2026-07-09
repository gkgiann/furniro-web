import useEmblaCarousel from "embla-carousel-react";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { DotsCarousel } from "./DotCarousel";
import { NextButton } from "./NextButton";
import { Slide } from "./Slide";
import { slides } from "./slides";

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    containScroll: false,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateIndex = () => setCurrentIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("settle", updateIndex);

    return () => {
      emblaApi.off("settle", updateIndex);
    };
  }, [emblaApi]);

  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <div
      className={clsx(
        "embla w-screen pl-1",
        "lg:col-span-3 lg:w-full",
        "xl:col-span-2",
      )}
    >
      <div className="embla__viewport relative pb-10 sm:pb-0" ref={emblaRef}>
        <div className="embla__container items-start select-none">
          {slides.map((slide) => {
            return (
              <Slide
                key={slide.id}
                emblaApi={emblaApi!}
                slide={slide}
                currentIndex={currentIndex}
              />
            );
          })}
        </div>

        <DotsCarousel emblaApi={emblaApi!} currentIndex={currentIndex} />
      </div>
      <NextButton emblaApi={emblaApi!} isLastSlide={isLastSlide} />
    </div>
  );
}
