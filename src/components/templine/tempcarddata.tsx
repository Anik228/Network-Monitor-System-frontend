


"use client";

import React, { useState, useEffect,useContext } from "react";
import TemperatureChart from "@/components/templine/tempgraph";
import Tempcard from "./tempcard";
import TempData from "@/components/templine/temdata.json"; //(everytime hit json and get data after 5 sec )
import baseUrl from "../common/common_url";
import { Loading } from "@/components/loading";
import EmsContext from "@/app/context/context";



const TemcardData = () => {
  //   const [data, setData] = useState([]);
  // const [screenSize, setScreenSize] = useState(getScreenSize());
  
  

  const emsData = useContext(EmsContext);

  //const humidityHistory = emsData?.humidityHistory;

  console.log("context data Temp from context",emsData);

  return (
    <div className="mt-0">
  <div className="mb-2">
    {emsData?.emsData  !=null && emsData?.emsData.tempHistory ? (
      
      <Tempcard  data={emsData?.emsData.tempHistory} />
    ) : (
      <Loading isLoading={true} />
    )}
    {/* <Tempcard  data={emsData?.emsData?.tempHistory} /> */}
  </div>
</div>
  );
};

export default TemcardData;

{
  /* <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="mb-4">
          <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm font-bold">
                Recent Temperature Status
              </h1>
            </div>
            <div className="card-body">
              <Tempcard key={`${screenSize}-graph1`} data={jsonData} />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm font-bold">
                Temperature Detection History
              </h1>
            </div>
              <div className="card-body">
                
                <TemperatureChart key={`${screenSize}-graph1`} data={newData} />
               
              </div>
            </div>
          </div>
        </div>
      </div> */
}
