// // AnyPage.js
// AnyPage.js
"use client";

import React, { useContext,useState, useEffect } from "react";
import CarbonChart from "@/components/co2/co2graph";
import CarbonData from "@/components/co2/co2data.json"; //(everytime hit json and get data after 5 sec )
import baseUrl from "../common/common_url";
import { Loading } from "@/components/loading";
import EmsContext from "@/app/context/context";
import data from "@/components/co2/co2data.json"

const Co2Data = () => {
  //   const [data, setData] = useState([]);
  // const [screenSize, setScreenSize] = useState(getScreenSize());
  
  const emsData = useContext(EmsContext);

  

  return (
    <div className="">
      <div>
        <div className="mb-4">
          <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm font-bold">
                C02 release History
              </h1>
            </div>
            <div className="card-body">
              <div>
               
                {emsData?.emsData != null && emsData?.emsData.Co2Release ? (
                  <CarbonChart data={data} />
                ) : (
                  <Loading isLoading={true} />
                )}
              </div>

              

              {/* <TemperatureChart key={`${screenSize}-graph1`} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Co2Data;
