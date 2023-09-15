export default function SubTitle({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <h3
      className={`w-[calc(100vw-5rem)] border-b-2 border-b-gray-700 ${className}`}
    >
      {children}
    </h3>
  );
}
