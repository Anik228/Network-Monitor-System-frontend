// // AnyPage.js
// AnyPage.js
"use client";

import React, { useContext,useState, useEffect } from "react";
import HumidityChart from "./humgraph";
import HumCard from "./humcard";
import HumData from "@/components/humiline/humdata.json"; //(everytime hit json and get data after 5 sec )
import baseUrl from "../common/common_url";
import EmsContext from "@/app/context/context";
import { Loading } from "@/components/loading";

const HumcardData = () => {
  //   const [data, setData] = useState([]);
  // const [screenSize, setScreenSize] = useState(getScreenSize());
  const emsData = useContext(EmsContext);

  // const newData = jsonData.map(({ temp, time }) => ({ temp, time }));

  return (
    <div className="mt-0">
      {/* <div className="mb-4">
        <HumCard key={`${screenSize}-graph1`} data={jsonData} />
      </div> */}
      <div className="mb-2">

      {emsData?.emsData  !=null && emsData?.emsData.humidityHistory ? (
      
      <HumCard  data={emsData?.emsData.humidityHistory} />
    ) : (
      <Loading isLoading={true} />
    )}
    {/* {jsonData.length === 0 ? (
      <Loading isLoading={true} />
    ) : (
      <HumCard  data={jsonData} />
    )} */}
  </div>
  </div>
  );
};

export default HumcardData;
