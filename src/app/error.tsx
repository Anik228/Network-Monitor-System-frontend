"use client";
import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const route = useRouter();
  const goHome = () => {
    route.push("/");
    route.refresh();
  };
  return (
    <div className="main-body flex flex-col justify-center">
      <div className="w-full text-center">
        <h1 className=" text-red-500 font-bold text-xl  mb-8 text-center ">
          {"Something went wrong"}
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="border bg-green-500 text-white  font-semibold rounded-lg px-5 py-3"
            onClick={reset}
          >
            Try Again
          </button>
          <button
            className="border border-green-500 text-green-500  font-semibold rounded-lg px-5 py-3"
            onClick={() => goHome()}
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};
export default Error;
