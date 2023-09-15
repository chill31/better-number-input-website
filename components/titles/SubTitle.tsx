export default function SubTitle({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <h2
      className={`w-[calc(100vw-4rem)] border-b-2 border-b-gray-600 ${className}`}
    >
      {children}
    </h2>
  );
}
