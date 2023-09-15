import Link from "next/link";

export default function SideBarLink({
  sideBarOpenState,
  content,
  href,
}: {
  sideBarOpenState: boolean;
  content: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-lg underline hover:no-underline focus:no-underline focus:outline-none text-link"
      tabIndex={sideBarOpenState ? 0 : -1}
    >
      {content}
    </Link>
  );
}
