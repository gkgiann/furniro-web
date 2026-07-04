type CategoryProps = {
  src: string;
  alt: string;
  title: string;
};

export function Category({ src, alt, title }: CategoryProps) {
  return (
    <div className="max-w-95.25 text-center transition hover:-translate-y-7">
      <img
        className="h-100 rounded-lg object-cover sm:h-120"
        src={src}
        alt={alt}
      />
      <h2 className="mt-7.5 text-xl font-semibold sm:text-2xl">{title}</h2>
    </div>
  );
}
