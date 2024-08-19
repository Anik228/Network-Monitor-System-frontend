import React from "react";
import { FaTemperatureLow } from "react-icons/fa"; // Importing temperature icon from react-icons
import { MdAccessTime } from "react-icons/md";
import Link from "next/link";

interface TemperatureData {
  status: string;
  temp: string;
  unit: string;
  time: string;
}

interface Props {
  data: TemperatureData[];
}

const TempCard: React.FC<Props> = ({ data }) => {
  // Accessing the first data entry
  console.log("temd data", data);
  if (data.length > 0) {
    // const firstData = data[0];

    // Parse the time string into a Date object
    const dateTime = new Date(data[0].time);

    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();

    const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // Format the date and time
    const formattedDateTime = `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;

    //console.log(firstData);
  }

  return (
    <div className="">
      <div className="card w-auto bg-white text-black shadow-lg ">
        <div className="items-center text-center">
          {/* <MdCo2 className="card-title w-10 h-10" /> */}

          <div className="flex justify-center mt-4 mb-2">
            <FaTemperatureLow className="card-title w-7 h-7" />
          </div>
          <p className="text-sm mb-2">Temperature</p>
          <div className="mb-2">
            {data.length > 0 && (
              <>
                {data[0].status !== "critical" && (
                  <p className="text-base md:text-lg font-bold">
                    {data[0].temp} Degree
                  </p>
                )}
                {/* Additional conditions can go here */}
              </>
            )}

{data.length > 0 && (
              <>
                {data[0].status === "critical" && (
                  <p className="text-base md:text-lg font-bold">
                    {data[0].temp} Degree
                  </p>
                )}
                {/* Additional conditions can go here */}
              </>
            )}

            {/* <p className="text-xs mt-2">{timeString}</p> */}
          </div>

          {/* <p className="text-base md:text-2xl font-bold">Carbon Emission !</p> */}
          {data.length > 0 && (
            <>
              {data[0].status === "Critical" && (
                <p className="text-sm font-bold animate-pulse text-[#E82E0D]">
                  {data[0].status}
                </p>
              )}
              {/* Additional conditions can go here */}
            </>
          )}

          {data.length > 0 && (
            <>
              {data[0].status !== "Critical" && (
                <p className="text-sm font-bold animate-pulse text-[#14B80C]">
                  {data[0].status}
                </p>
              )}
              {/* Additional conditions can go here */}
            </>
          )}

          {/* <p className="text-base md:text-base mb-6">No</p> */}
        </div>
        <div className="mt-[54px] mb-2 mr-4 cursor-pointer">
          <p className="text-xs text-end hover:text-blue-800 hover:font-bold transition duration-300">
            History
          </p>
        </div>
      </div>

      {/* <div className="flex items-end">
        <p></p>
        {firstData.status === "critical" && (
          <div className="w-5 h-5 bg-red-800 rounded-full animate-pulse mx-2 items-end"></div>
        )}

        {firstData.status != "critical" && (
          <div className="w-5 h-5 bg-green-800 rounded-full animate-pulse mx-2"></div>
        )}
      </div> */}
      {/* <div className="flex items-center mb-14">
        {firstData.status === "critical" && (
          <p className="text-center text-4xl text-red-800 font-bold animate-pulse">
            {firstData.status} !
          </p>
        )}

        {firstData.status != "critical" && (
          <p className="text-center text-4xl text-green-800 font-bold animate-pulse">
            {firstData.status} !
          </p>
        )}
      </div>
      <p className="text-base md:text-xl mb-6 pl-4 text-center">
        <FaTemperatureLow className="inline-block mr-1 text-orange-500 w-10 h-10 mr-2" />
        {firstData.temp} Degree
      </p>
    
      <p className="text-base md:text-xl mb-16 pl-2 text-center">
        <MdAccessTime className="inline-block mr-1 text-orange-500 w-10 h-10 mr-2" />
        {formattedDateTime}
      </p> */}
    </div>
  );
};

export default TempCard;
