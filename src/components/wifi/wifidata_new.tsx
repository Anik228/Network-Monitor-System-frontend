"use client";

import React, { useContext,useState, useEffect } from "react";
import baseUrl from "../common/common_url";
import { Loading } from "@/components/loading";
import EmsContext from "@/app/context/context";
import WIFIgraph from "./wifigraph";


const wifidata = () => {

    const emsData = useContext(EmsContext);

  return (
    <div className="">
      <div>
        <div className="mb-4">
          <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm font-bold">
                Device History
              </h1>
            </div>
            <div className="card-body">
              <div>
               
                {emsData?.wifiData != null  ? (
                  <WIFIgraph data={emsData.wifiData} />
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

export default wifidata
