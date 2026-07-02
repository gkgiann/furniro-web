type HeaderIconLinkProps = {
  src: string;
  alt: string;
};

export function HeaderIconLink({ src, alt }: HeaderIconLinkProps) {
  return (
    <a href="#">
      <img className="hover:scale-110 transition" src={src} alt={alt} />
    </a>
  );
}
