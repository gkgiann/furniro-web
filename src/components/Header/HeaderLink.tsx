type HeaderLinkProps = {
  href?: string;
  label: string;
};

export function HeaderLink({ href = "#", label }: HeaderLinkProps) {
  return (
    <a className="transition hover:scale-110" href={href}>
      {label}
    </a>
  );
}
