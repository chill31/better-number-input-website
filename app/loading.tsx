import {AiOutlineLoading3Quarters} from "react-icons/ai";

export default function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-4 items-center justify-center absolute top-0 left-0 z-[999] bg-black">
      <AiOutlineLoading3Quarters className="text-8xl text-white animate-spin" />
      <h2 className="text-4xl text-white">Loading...</h2>
    </div>
  );
}