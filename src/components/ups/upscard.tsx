import React from 'react';
import { Ups, UpshistoryEntity } from './upstype'; // Import your interface
//import { CiBatteryCharging } from "react-icons/fa";
import { CiBatteryCharging } from "react-icons/ci";

interface UpscardProps {
  data: UpshistoryEntity[]; // Specify the type of data
}

const Upscard: React.FC<UpscardProps> = ({ data }) => {
  // Check if data is defined and has at least one element
  if (data && data.length > 0) {
    console.log("received data", data[0].time);
  } else {
    console.log("No data received or data array is empty.");
  }
  
  return (
    <div className="">
      <div className="card w-auto bg-white text-black shadow-lg ">
        <div className="items-center text-center">
          {/* <MdCo2 className="card-title w-10 h-10" /> */}
         
          <div className="flex justify-center mt-4 mb-2">
          <CiBatteryCharging className="card-title w-9 h-7" />
          </div>
          <p className="text-sm mb-2">DC Power</p>
          <div className="mb-2">
         
          { data.length> 0 && data[0].status === "Critical" && (
          <p className="text-base md:text-lg font-bold">On</p>
          )}
          {/* <p className="text-xs mt-2">{timeString}</p> */}
          { data.length> 0 && data[0].status != "Critical" && (
          <p className="text-base md:text-lg font-bold">Off</p>
          )}
          {/* <p className="text-xs mt-2">{timeString}</p> */}
          </div>
          
          {/* <p className="text-base md:text-2xl font-bold">Carbon Emission !</p> */}
          { data.length> 0 && data[0].status === "Critical" && (
            <p className="text-sm font-bold animate-pulse text-[#DC3915]">
              {data[0].label}
            </p>
          )}

          {data.length> 0 && data[0].status != "Critical" && (
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



// {
//     "status": "Normal",
//     "time": "2024-04-16T04:52:50.727Z"
// }