export default function DocTitle({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <h1
      className={`w-[calc(100vw-3rem)] border-b-2 border-b-gray-500 ${className}`}
    >
      {children}
    </h1>
  );
}
