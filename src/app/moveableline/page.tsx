import { FC } from "react";
import LineGraph from "@/components/movelinegraph/moveline";

const Page: FC = () => {
  return (
    <>
       <div className="container mx-auto mt-5">

             <p className="mb-5">Moveable Line Graph is Showing here</p>
             <LineGraph/>

       </div> 
    </>
  );
};
export default Page;