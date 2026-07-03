type CategoryProps = {
  src: string;
  alt: string;
  title: string;
};

export function Category({ src, alt, title }: CategoryProps) {
  return (
    <div className="max-w-95.25 text-center hover:-translate-y-7 transition">
      <img
        className="h-100 object-cover rounded-lg sm:h-120"
        src={src}
        alt={alt}
      />
      <h2 className="font-semibold mt-7.5 text-xl sm:text-2xl">{title}</h2>
    </div>
  );
}
