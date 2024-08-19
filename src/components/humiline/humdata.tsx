// // AnyPage.js
// AnyPage.js
"use client";

import React, {useContext, useState, useEffect } from "react";
import HumidityChart from "./humgraph";
import HumCard from "./humcard";
import HumData from "@/components/humiline/humdata.json"; //(everytime hit json and get data after 5 sec )
import baseUrl from "../common/common_url";
import EmsContext from "@/app/context/context";
import { Loading } from "@/components/loading";

const AnyPage = () => {
  
  const emsData = useContext(EmsContext);

 
  
 // const newData = jsonData.map(({ temp, time }) => ({ temp, time }));

  return (
    <div className="mt-2">
      <div className="mb-4">
            <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm font-bold">
                Humidity Detection History
              </h1>
            </div>
              <div className="card-body">
                
              {emsData?.emsData != null && emsData?.emsData.humidityHistory ? (
              <HumidityChart data={emsData?.emsData.humidityHistory} />
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

 // useEffect(() => {
  //   function handleResize() {
  //     setScreenSize(getScreenSize());
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // function getScreenSize() {
  //   const width = window.innerWidth;
  //   if (width < 640) {
  //     return "sm";
  //   } else if (width >= 640 && width < 1024) {
  //     return "md";
  //   } else {
  //     return "lg";
  //   }
  // }

   // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );
      // const response = await fetch(
      //   "http://192.168.8.98:4000/ems/humidity-history?startTime=2024-03-01T00:00:00&endTime=2024-04-16T23:59:59"
      // );

      //   const [data, setData] = useState([]);
  // const [screenSize, setScreenSize] = useState(getScreenSize());