import { FC } from "react";
import Preference from "@/components/preference/preference";

const Page: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E0F1FC]">
    <div className="flex-grow container mx-auto">
      <Preference />
    </div>
  </div>
  );
};
export default Page;
