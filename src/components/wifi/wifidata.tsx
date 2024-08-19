"use client";

import React, { useContext, useState, useEffect } from "react";
import baseUrl from "../common/common_url";
import { Loading } from "@/components/loading";
import EmsContext from "@/app/context/context";
import WIFIgraph from "./wifigraph";


const Wifidata = () => {

  const emsData = useContext(EmsContext);

  return (
    <div className="">
      <div>
        <div className="mb-4">
          <div className="card bg-[#E0F1FC] shadow-lg">
            <div className='border-l-8 text-xl border-[#0165B9] ps-4 py-1 font-semibold bg-gradient-to-r from-[#B9EEFF] to-[#E0F1FC]'>
              <div>Bandwidth History</div>
            </div>
            <div className="card-body">
              <div>
                {emsData?.wifiData != null ? (
                  <WIFIgraph data={emsData.wifiData} />
                ) : (
                  <Loading isLoading={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wifidata
