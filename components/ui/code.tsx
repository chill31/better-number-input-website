export default function Code({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <code
      className={`bg-zinc-900 p-1 whitespace-nowrap max-w-[92%] max-md:max-w-[calc(100vw-3rem)] rounded-md text-gray-300 overflow-x-scroll ${className}`}
    >
      {children}
    </code>
  );
}
