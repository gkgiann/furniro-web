import clsx from "clsx";
type MosaicImageProps = {
  src: string;
  alt: string;
  className?: string;
};
export function MosaicImage({ src, alt, className }: MosaicImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx("absolute object-cover select-none", className)}
    />
  );
}
