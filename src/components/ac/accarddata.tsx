import React, {useContext, useState, useEffect } from "react";
import Accard from "@/components/ac/accard";
import baseUrl from "../common/common_url";
import { Loading } from "@/components/loading";
// import { AchistoryEntity, Ac } from './actype'; // Import your interfaces
import EmsContext from "@/app/context/context";


// Import statements...

const AccardData = () => {
    // const [jsonData, setJsonData] = useState<Ac | null>(null);
  
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
    //       `http://192.168.8.98:8008/ems/mother-api?startTime=2024-03-01T00:00:00&endTime=2024-04-21T23:59:59`
    //     );
  
    //     const jsonDatanew: Ac = await response.json();
    //     setJsonData(jsonDatanew);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }
  
    // const achistoryInfo = jsonData?.acHistory || []; // Ensure upshistoryInfo is an array even if jsonData is null
    // console.log(achistoryInfo,"---upshistoryInfo---");
    
    const emsData = useContext(EmsContext);
    return (
      <div className="mt-0">
        <div className="mb-2">

        {emsData?.emsData != null && emsData?.emsData.acHistory ? (
          <Accard data={emsData?.emsData.acHistory} />
        ) : (
          <Loading isLoading={true} />
        )}
          {/* {achistoryInfo ? (
            <Accard data={achistoryInfo as AchistoryEntity[]} /> // Pass an object with upshistory property
          ) : (
            <Loading isLoading={true} />
          )} */}
        </div>
      </div>
    );
  };
  
  export default AccardData;
  