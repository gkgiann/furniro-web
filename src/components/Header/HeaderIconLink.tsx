type HeaderIconLinkProps = {
  src: string;
  alt: string;
};

export function HeaderIconLink({ src, alt }: HeaderIconLinkProps) {
  return (
    <a href="#">
      <img className="transition hover:scale-110" src={src} alt={alt} />
    </a>
  );
}
