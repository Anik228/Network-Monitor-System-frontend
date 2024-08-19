import { FC } from "react";
import BargraphData from "@/components/bargraph/bargraphdata";

const Page: FC = () => {
  return (
    <>

    <div className="container mx-auto mt-5">

       <p>Bar Graph is Showing here</p>
       <BargraphData/>

    </div> 
      
    </>
  );
};
export default Page;

