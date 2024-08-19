import React from 'react';
import { Ac, AchistoryEntity } from './actype'; // Import your interface
import { TbAirConditioning } from "react-icons/tb";

interface AcardProps {
  data: AchistoryEntity[]; // Specify the type of data
}

const Upscard: React.FC<AcardProps> = ({ data }) => {
  // Check if data is defined and has at least one element
  if (data && data.length > 0) {
    console.log("ac receive data", data[0].time);
  } else {
    console.log("No data received or data array is empty.");
  }
  
  return (
    <div className="">
      <div className="card w-auto bg-white text-black shadow-lg ">
        <div className="items-center text-center">
          {/* <MdCo2 className="card-title w-10 h-10" /> */}
         
          <div className="flex justify-center mt-4 mb-2">
          <TbAirConditioning className="card-title w-9 h-7" />
          </div>
          <p className="text-sm mb-2">AC</p>
          <div className="mb-2">
          { data.length> 0 && data[0].label === "Critical" && (
          <p className="text-base md:text-lg font-bold">Off</p>
          )}
          {/* <p className="text-xs mt-2">{timeString}</p> */}
          { data.length> 0 && data[0].label != "Critical" && (
          <p className="text-base md:text-lg font-bold">On</p>
          )}
          </div>
          
          {/* <p className="text-base md:text-2xl font-bold">Carbon Emission !</p> */}
          { data.length> 0 && data[0].label === "Critical" && (
            <p className="text-sm font-bold animate-pulse text-[#DC3915]">
              {data[0].label}
            </p>
          )}

          {data.length> 0 && data[0].label != "Critical" && (
            <p className="text-sm font-bold animate-pulse text-[#14B80C]">
              {data[0].label}
            </p>
          )}
          {/* <p className="text-base md:text-base mb-6">No</p> */}
         
        </div>
        <div className="mt-[54px] mb-2 mr-4">
          <p className="text-xs text-end hover:text-blue-800 hover:font-bold transition duration-300">
            History
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Upscard;