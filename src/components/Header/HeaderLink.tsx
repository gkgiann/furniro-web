type HeaderLinkProps = {
  href?: string;
  label: string;
};

export function HeaderLink({ href = "#", label }: HeaderLinkProps) {
  return (
    <a className="hover:scale-110 transition" href={href}>
      {label}
    </a>
  );
}
