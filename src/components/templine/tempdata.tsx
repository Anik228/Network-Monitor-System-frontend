// // AnyPage.js
// AnyPage.js
"use client";

import React, { useContext } from "react";
import TemperatureChart from "@/components/templine/tempgraph";
import EmsContext from "@/app/context/context";
import { Loading } from "@/components/loading";

const AnyPage = () => {
  //   const [data, setData] = useState([]);
  // const [screenSize, setScreenSize] = useState(getScreenSize());
 

  const emsData = useContext(EmsContext);

  // const newData = jsonData.map(({ temp, time }) => ({ temp, time }));

  // console.log("temdata "+jsonData);

  return (
    <div className="mt-2">
      <div className="mb-4">
        <div className="card  bg-white shadow-lg">
          <div className="bg-[#A4ADA3] rounded items-center py-2">
            <h1 className="text-white text-center text-sm font-bold">
              Temperature Detection History
            </h1>
          </div>
          <div className="card-body">
            {emsData?.emsData != null && emsData?.emsData.tempHistory ? (
              <TemperatureChart data={emsData?.emsData.tempHistory} />
            ) : (
              <Loading isLoading={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyPage;

// "use client";

// import React, { useState, useEffect } from "react";
// import TemperatureChart from "@/components/templine/tempgraph"; // Adjust the path as necessary

// const AnyPage = () => {

//   // Sample data
//   const data = [
//     {
//       status: "critical",
//       temp: "42",
//       unit: "&deg C",
//       time: "2024-03-31T04:39:30.019Z",
//     },
//     {
//       status: "critical",
//       temp: "39.94",
//       unit: "&deg C",
//       time: "2024-03-31T04:39:20.019Z",
//     },
//     {
//       status: "critical",
//       temp: "40.01",
//       unit: "&deg C",
//       time: "2024-03-31T04:39:10.013Z",
//     },
//     {
//       status: "critical",
//       temp: "40.04",
//       unit: "&deg C",
//       time: "2024-03-31T04:39:00.017Z",
//     },
//     {
//       status: "critical",
//       temp: "40",
//       unit: "&deg C",
//       time: "2024-03-31T04:38:50.030Z",
//     },
//     {
//       status: "critical",
//       temp: "40.07",
//       unit: "&deg C",
//       time: "2024-03-31T04:38:40.038Z",
//     },
//     {
//       status: "critical",
//       temp: "40.04",
//       unit: "&deg C",
//       time: "2024-03-31T04:38:30.023Z",
//     },
//     {
//       status: "critical",
//       temp: "29.46",
//       unit: "&deg C",
//       time: "2024-03-28T06:10:00.041Z",
//     },
//     {
//       status: "critical",
//       temp: "29.38",
//       unit: "&deg C",
//       time: "2024-03-28T06:00:00.025Z",
//     },
//     {
//       status: "critical",
//       temp: "29.26",
//       unit: "&deg C",
//       time: "2024-03-28T05:50:00.090Z",
//     },
//     {
//       status: "critical",
//       temp: "29.15",
//       unit: "&deg C",
//       time: "2024-03-28T05:40:00.024Z",
//     },
//     {
//       status: "critical",
//       temp: "29",
//       unit: "&deg C",
//       time: "2024-03-28T05:30:00.125Z",
//     },
//     {
//       status: "normal",
//       temp: "24.19",
//       unit: "&deg C",
//       time: "2024-03-28T05:10:00.038Z",
//     },
//     {
//       status: "normal",
//       temp: "24",
//       unit: "&deg C",
//       time: "2024-03-28T05:00:00.024Z",
//     },
//     {
//       status: "normal",
//       temp: "24.19",
//       unit: "&deg C",
//       time: "2024-03-28T04:50:00.093Z",
//     },
//     {
//       status: "normal",
//       temp: "24.18",
//       unit: "&deg C",
//       time: "2024-03-28T04:40:00.094Z",
//     },
//     {
//       status: "normal",
//       temp: "24.09",
//       unit: "&deg C",
//       time: "2024-03-28T04:30:00.095Z",
//     },
//     {
//       status: "normal",
//       temp: "24",
//       unit: "&deg C",
//       time: "2024-03-28T04:29:13.219Z",
//     },
//   ];

//   const newData = data.map(({ temp, time }) => ({ temp, time }));

//   //console.log(newData);

//   return (
//     <div className="mt-5">
//       <div className="grid grid-cols-1 md:gap-2 md:grid-cols-2 lg:grid-cols-2">
//       <div className="mb-12">
//           <div className="card  bg-white">
//             <div className="card-body">
//               <h1 className="mb-4 text-black-800 text-center font-bold">
//                 Temperature Graph
//               </h1>
//               <TemperatureChart data={newData}/>
//             </div>
//           </div>
//         </div>
//         <div>
//         <div className="mb-12">
//           <div className="card  bg-white">
//             <div className="card-body">
//               <h1 className="mb-4 text-black-800 text-center font-bold">
//                 Temperature Graph
//               </h1>
//               <TemperatureChart data={newData}/>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnyPage;
