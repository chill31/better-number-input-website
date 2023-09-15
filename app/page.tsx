import ButtonLink from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[650px] h-[100%] w-full gap-4">
      <h1 className="mt-5 main-title">better-number-input</h1>
      <ButtonLink
        href="/installation"
        linkStyles="focus:outline-none border-transparent border-2 rounded-md focus:border-white"
      >
        Get Started
      </ButtonLink>
    </main>
  );
}
