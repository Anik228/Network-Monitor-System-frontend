"use client";
import React, { useContext, useEffect, useState } from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiSmokeBomb } from "react-icons/gi";
import { MdOutlinePestControlRodent } from "react-icons/md";
import { MdCo2 } from "react-icons/md";
import SmokeData from "../smoke/smokedata";
import CarbonChart from "../co2/co2data";
import WaterChart from "../water/waterdata";
import RodentChart from "../rodent/rodentdata";
import RodentDatajs from "@/components/rodent/rodentdata.json";
import baseUrl from "../common/common_url";
import { WiSmoke } from "react-icons/wi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Loading } from "@/components/loading";
import EmsContext from "@/app/context/context";
import TemcardData from "../templine/tempcarddata";
import HumcardData from "../humiline/humcarddata";

import Link from "next/link";
const Sensors = () => {
  
  const emsData = useContext(EmsContext);

  interface Sensor {
    smokeHistory?: SensorType[] | null;
  }
  interface SensorType {
    status: string;
    time: string;
    label: string;
  }
  let data: SensorType[] = [];
  let rodentData: SensorType[] = [];
  let c02Data: SensorType[] = [];
  let leakData: SensorType[] = [];

  // if (emsData?.emsData != null && emsData?.emsData.smokeHistory && emsData?.emsData.rodentHistory
  //   && emsData?.emsData.Co2Release && emsData?.emsData.waterleakageHistory
  // ) {
  //   data = emsData?.emsData.smokeHistory;
  //   rodentData = emsData?.emsData.rodentHistory;
  //   c02Data = emsData?.emsData.Co2Release;
  //   leakData=emsData?.emsData.waterleakageHistory;
  // }

  return (
    <div>
      <div className="mb-8">
        {/* <div className="mb-4">
          <p>Sensors Data!</p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="mb-2">
            <div className="card w-auto bg-white text-black shadow-lg ">
              <div className="card-body items-center text-center">
                <WiSmoke className="card-title  w-9 h-9" />

                {emsData?.emsData != null && emsData?.emsData.smokeHistory ? (
                  emsData?.emsData.smokeHistory[0].label === "Critical" ? (
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#DC3915]">
                      { emsData?.emsData.smokeHistory[0].label}
                    </p>
                  ) : (
                    // You can render some other content here if the label is not "Critical"
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#14B80C]">
                      { emsData?.emsData.smokeHistory[0].label}
                    </p>
                  )
                ) : (
                  <Loading isLoading={true} />
                )}


                <p className="text-sm mb-6">Smoke</p>
              </div>
              {/* <div className="inline-block">
                <div className="mr-4 mb-2 flex justify-end items-end">
                  <FaArrowAltCircleRight className="mt-2 w-4 h-4 mr-2" />
                  <p className="text-sm">History</p>
                </div>
              </div> */}
              <Link href="#smoke" className="mb-2 mr-4">
                <p className="text-xs cursor-pointer text-end hover:text-blue-800 hover:font-bold transition duration-300">
                  History
                </p>
              </Link>
            </div>
          </div>
          <div className="mb-2">
            <div className="card w-auto bg-white text-black shadow-lg ">
              <div className="card-body items-center text-center">
                <MdOutlineWaterDrop className="card-title w-9 h-9" />
                {/* {smokeStatus.length === 0 ? (
                  <Loading isLoading={true} />
                ) : (
                  <p className="text-base md:text-xl font-bold">Normal</p>
                )} */}
                {emsData?.emsData != null && emsData?.emsData.waterleakageHistory ? (
                  emsData?.emsData.waterleakageHistory[0].label === "Critical" ? (
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#DC3915]">
                      {emsData?.emsData.waterleakageHistory[0].label}
                    </p>
                  ) : (
                    // You can render some other content here if the label is not "Critical"
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#14B80C]">
                      {emsData?.emsData.waterleakageHistory[0].label}
                    </p>
                  )
                ) : (
                  <Loading isLoading={true} />
                )}

                <p className="text-sm mb-6">Water Leakage</p>
              </div>
              <Link href="#water" className="mb-2 mr-4">
                <p className="text-xs text-end cursor-pointer hover:text-blue-800 hover:font-bold transition duration-300">
                  History
                </p>
              </Link>
            </div>
          </div>
          <div className="mb-2">
            <div className="card w-auto bg-white text-black shadow-lg ">
              <div className="card-body items-center text-center">
                <MdOutlinePestControlRodent className="card-title w-9 h-9" />
                {/* {smokeStatus.length === 0 ? (
                  <Loading isLoading={true} />
                ) : (
                  <p className="text-base md:text-xl font-bold">No</p>
                )} */}
                {emsData?.emsData != null && emsData?.emsData.rodentHistory ? (
                  emsData?.emsData.rodentHistory[0].label === "Critical" ? (
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#DC3915]">
                      {emsData?.emsData.rodentHistory[0].label}
                    </p>
                  ) : (
                    // You can render some other content here if the label is not "Critical"
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#14B80C]">
                      {emsData?.emsData.rodentHistory[0].label}
                    </p>
                  )
                ) : (
                  <Loading isLoading={true} />
                )}

                <p className="text-sm mb-6">Rodent Detection</p>
              </div>
              <Link href="#rodent" className="mb-2 mr-4">
                <p className="text-xs text-end cursor-pointer hover:text-blue-800 hover:font-bold transition duration-300">
                  History
                </p>
              </Link>
            </div>
          </div>
          <div className="mb-2">
            <div className="card w-auto bg-white text-black shadow-lg ">
              <div className="card-body items-center text-center">
                <MdCo2 className="card-title w-9 h-9" />
                {/* {smokeStatus.length === 0 ? (
                  <Loading isLoading={true} />
                ) : (
                  <p className="text-base md:text-xl font-bold">No</p>
                )} */}

                {emsData?.emsData != null && emsData?.emsData.Co2Release ? (
                  emsData?.emsData.Co2Release[0].label === "Critical" ? (
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#DC3915]">
                      {emsData?.emsData.Co2Release[0].label}
                    </p>
                  ) : (
                    // You can render some other content here if the label is not "Critical"
                    <p className="text-base md:text-xl font-bold animate-pulse text-[#14B80C]">
                      {emsData?.emsData.Co2Release[0].label}
                    </p>
                  )
                ) : (
                  <Loading isLoading={true} />
                )}

                <p className="text-sm mb-6">C02 Release</p>
              </div>
              <Link href="#carbon" className="mb-2 mr-4">
                <p className="text-xs cursor-pointer text-end hover:text-blue-800 hover:font-bold transition duration-300">
                  History
                </p>
              </Link>
            </div>
          </div>
          <TemcardData/>
          <HumcardData/>
        </div>


      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div id="smoke">
          <SmokeData />
        </div>
        <div id="carbon">
          <CarbonChart />
        </div>
        <div id="water">
          <WaterChart />
        </div>
        <div id="rodent">
          <RodentChart />
        </div>
      </div>
    </div>
  );
};

export default Sensors;
