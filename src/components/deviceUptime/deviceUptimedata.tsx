"use client";

import React, { useContext, useState, useEffect, FC } from "react";
import baseUrl from "../common/common_url";
import { Loading } from "@/components/loading";
import EmsContext from "@/app/context/context";
// import data from "@/components/deviceUptime/deviceUptime.json"
import DeviceUptimeChart from "./deviceUptimegraph";



const Wifidata = () => {

  const emsData = useContext(EmsContext);
  console.log('siam-----------------------------', emsData?.deviceStatusData);
  const data = emsData?.deviceStatusData;



  return (
    <div className="">
      <div>
        <div className="mb-4">
          <div className="card bg-[#E0F1FC] shadow-lg">
            <div className='border-l-8 text-xl border-[#0165B9] ps-4 py-1 font-semibold bg-gradient-to-r from-[#B9EEFF] to-[#E0F1FC]'>
              <div>Device Uptime History</div>
            </div>
            <div className="card-body">
              <div>
                {data != null ? (
                  <DeviceUptimeChart data={data} />
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
  )
}

export default Wifidata;
