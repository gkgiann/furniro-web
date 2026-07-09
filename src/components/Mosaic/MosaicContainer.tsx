import { MosaicImages } from "./MosaicImages";

export function MosaicContainer() {
  return (
    <div className="mx-auto max-w-360 overflow-hidden">
      <div className="flex w-max animate-mosaic gap-4">
        <MosaicImages />
        <MosaicImages />
      </div>
    </div>
  );
}
