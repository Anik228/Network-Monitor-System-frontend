import { FC } from "react";
import PiegraphData from "@/components/piegraph/piegraphdata";

const Page: FC = () => {
  return (
    <>
      <div className="container mx-auto mt-5">

           <p>Pie Graph is Showing here</p>
           <PiegraphData/>

      </div> 
    </>
  );
};
export default Page;