import React, { useContext, useState, useEffect } from "react";
import Upscard from "./upscard";
import baseUrl from "../common/common_url";
import { Loading } from "@/components/loading";
// import { UpshistoryEntity, Ups } from "./upstype"; // Import your interfaces
import EmsContext from "@/app/context/context";

// Import statements...

const UpscardData = () => {
  // const [jsonData, setJsonData] = useState<Ups | null>(null);

  // useEffect(() => {
  //   fetchTempData();
  //   const interval = setInterval(() => {
  //     fetchTempData();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  // async function fetchTempData() {
  //   try {
  //     const response = await fetch(
  //       `${baseUrl}/ems/mother-api?startTime=2024-03-01T00:00:00&endTime=2024-04-21T23:59:59`
  //     );

  //     const jsonDatanew: Ups = await response.json();
  //     setJsonData(jsonDatanew);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // const upshistoryInfo = jsonData?.upshistory || []; // Ensure upshistoryInfo is an array even if jsonData is null
  // console.log(upshistoryInfo, "---upshistoryInfo---");

  const emsData = useContext(EmsContext);

  return (
    <div className="mt-0">
      <div className="mb-2">
        {emsData?.emsData != null && emsData?.emsData.upshistory ? (
          <Upscard data={emsData?.emsData.upshistory} />
        ) : (
          <Loading isLoading={true} />
        )}
      </div>
    </div>
  );
};

export default UpscardData;
