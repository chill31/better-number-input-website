import Link from "next/link";

export default function SideBarLink({
  sideBarOpenState,
  content,
  href,
  className
}: {
  sideBarOpenState: boolean;
  content: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-lg underline hover:no-underline focus:no-underline focus:outline-none text-link ${className}`}
      tabIndex={sideBarOpenState ? 0 : -1}
    >
      {content}
    </Link>
  );
}
