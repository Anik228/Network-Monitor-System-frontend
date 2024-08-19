import React from "react";
import { FaTemperatureLow } from "react-icons/fa"; // Importing temperature icon from react-icons
import { MdAccessTime } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

interface TemperatureData {
  status: string;
  temp: string;
  unit: string;
  time: string;
}

interface Props {
  data: TemperatureData[];
}

const HumCard: React.FC<Props> = ({ data }) => {
  // Accessing the first data entry
  const firstData = data[0];

  // Parse the time string into a Date object
  const dateTime = new Date(firstData.time);

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();

  const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Format the date and time
  const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;

  console.log(firstData);

  return (
    <div className="">
      <div className="card w-auto bg-white text-black shadow-lg ">
        <div className="items-center text-center">
          {/* <MdCo2 className="card-title w-10 h-10" /> */}
         
          <div className="flex justify-center mt-4 mb-2">
          <WiHumidity className="card-title w-9 h-7" />
          </div>
          <p className="text-sm mb-2">Humidity</p>
          <div className="mb-2">
          <p className="text-base md:text-lg font-bold">{firstData.temp} g.m</p>
          {/* <p className="text-xs mt-2">{timeString}</p> */}
          </div>
          
          {/* <p className="text-base md:text-2xl font-bold">Carbon Emission !</p> */}
          {firstData.status === "Critical" && (
            <p className="text-sm font-bold animate-pulse text-[#DC3915]">
              {firstData.status}
            </p>
          )}

          {firstData.status != "Critical" && (
            <p className="text-sm font-bold animate-pulse text-[#14B80C]">
              {firstData.status}
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

export default HumCard;

 {/* <div className="card w-auto bg-white text-black shadow-lg ">
        <div className="items-center text-center">
          
          <div className="flex justify-center mt-4 mb-2">
            <WiHumidity className="card-title w-9 h-7" />
          </div>
          <p className="text-sm mb-2">Current Humidity Status</p>
          
          {firstData.status === "critical" && (
            <p className="text-base md:text-2xl font-bold animate-pulse">
              {firstData.status} !
            </p>
          )}

          {firstData.status != "critical" && (
            <p className="text-base md:text-2xl font-bold">
              {firstData.status} !
            </p>
          )}
          
          <div className="mt-2">
            <p className="text-xs">{firstData.temp} g.m</p>
            <p className="text-xs mt-2">{timeString}</p>
          </div>
        </div>
        <div className="mb-2 mr-4">
          <p className="text-xs text-end hover:text-blue-800 hover:font-bold transition duration-300">
            History
          </p>
        </div>
      </div> */}