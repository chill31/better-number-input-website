export default function P({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return <p className={`text-lg mt-5 ${className} max-w-[calc(100vw-2rem)]`}>{children}</p>;
}
