import React from "react";

const Blankcard = () => {
  return (
    <div className="mt-5 mb-4">
      <div className="card w-auto bg-white text-black shadow-lg ">
        <div className="items-center text-center">
          {/* <MdCo2 className="card-title w-10 h-10" /> */}

          <div className="flex justify-center mt-4 mb-2">
            {/* <FaTemperatureLow className="card-title w-7 h-7" /> */}
            <p className="card-title">---------</p>
          </div>
          <p className="text-sm mb-2">------</p>
          <div className="mb-2">
            <p className="text-base md:text-lg font-bold">------</p>
            {/* <p className="text-xs mt-2">{timeString}</p> */}
          </div>

         

          <p className="text-sm font-bold animate-pulse text-black">----</p>

          {/* <p className="text-base md:text-base mb-6">No</p> */}
        </div>
        <div className="mb-2 mr-4">
          <p className="text-xs text-end hover:text-blue-800 hover:font-bold transition duration-300">
            ----
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blankcard;
