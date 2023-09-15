import { MouseEventHandler } from "react";
import { Button } from "./button";
import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  linkStyles,
  buttonStyles,
  onClick,
}: {
  href: string;
  children: any;
  linkStyles?: string;
  buttonStyles?: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <Link
      href={href}
      className={`${linkStyles} rounded-md border-transparent border-2 focus:border-white outline-none`}
    >
      <Button tabIndex={-1} onClick={onClick} className={buttonStyles}>
        {children}
      </Button>
    </Link>
  );
}
