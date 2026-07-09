import { MosaicImage } from "./MosaicImage";

export function MosaicImages() {
  return (
    <div className="relative h-180.25 w-[1799px]">
      <MosaicImage
        src="/products/1.jpg"
        alt="Imagem 1"
        className="top-0 left-0 h-95.5 w-68.5"
      />
      <MosaicImage
        src="/products/2.jpg"
        alt="Imagem 2"
        className="top-[398.5px] left-0 h-80.75 w-95.25"
      />
      <MosaicImage
        src="/products/3.jpg"
        alt="Imagem 3"
        className="top-[70.5px] left-72.5 h-78 w-112.75"
      />
      <MosaicImage
        src="/products/4.jpg"
        alt="Imagem 4"
        className="top-[398.5px] left-99.25 h-60.5 w-86"
      />
      <MosaicImage
        src="/products/5.jpg"
        alt="Imagem 5"
        className="top-[156.5px] left-189.25 h-98 w-73.75"
      />
      <MosaicImage
        src="/products/6.jpg"
        alt="Imagem 6"
        className="top-[99.5px] left-267 h-87 w-72.5"
      />
      <MosaicImage
        src="/products/7.jpg"
        alt="Imagem 7"
        className="top-[463.5px] left-267 h-60.5 w-44.5"
      />
      <MosaicImage
        src="/products/4.jpg"
        alt="Imagem 8"
        className="top-[14.5px] left-343.5 h-108.25 w-106.25"
      />
      <MosaicImage
        src="/products/2.jpg"
        alt="Imagem 9"
        className="top-[463.5px] left-315.5 h-49 w-64.5"
      />
    </div>
  );
}
