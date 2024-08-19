"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "../styles/Not-found.module.scss";

const NotFound: FC = () => {
  const router = useRouter();
  return (
    <div className="main-body flex items-center justify-center">
      <div className={`container ${styles.header}`}>
        <div className="flex justify-center mb-6">
          <p className="text-[#101828] text-2xl md:text-6xl font-semibold">
            Page not found!
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <p className="text-[#475467] text-xl">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => router.back()} className="flex items-center border bg-white py-4 px-[22px] border-[#D0D5DD] rounded-lg shadow-sm">
            <BsArrowLeftShort className="text-[#344054] text-2xl" />
            <span className="text-[#344054] text-lg font-semibold">
              Go back
            </span>
          </button>
          <button onClick={() => router.push("/")} className="text-white text-lg font-semibold bg-[#246C54] shadow-sm py-4 px-[22px] border border-[#246C54] rounded-lg">
            Go home
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
