"use client";
import { FC } from "react";
import React, { useContext, useState, useEffect } from "react";
import LinegraphData from "@/components/linegraph/linegraphdata";
import GaugeData from "@/components/gaugegraph/gaugesampledata";
import Total from "@/components/total/total";
import TemperatureChart from "@/components/templine/tempdata";
import HumidityChart from "@/components/humiline/humdata";
import TemcardData from "@/components/templine/tempcarddata";
import HumcardData from "@/components/humiline/humcarddata";
import Link from "next/link";
import UpscardData from "@/components/ups/upscarddata";
import AccardData from "@/components/ac/accarddata";
import EmsContext from "@/app/context/context";
import { GrServerCluster } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";


const Page: FC = () => {
  interface GaugeDataProps {
    usage: number;
  }

  const [rootFsUsage, setRootFsUsage] = useState<number>(0);
  const [ramUsage, setRamUsage] = useState<number>(0);
  const [swapUsage, setSwapUsage] = useState<number>(0);

  const emsData: any = useContext(EmsContext);

  const usageData = [rootFsUsage, ramUsage, swapUsage];

  const useDataLebel = ["Root FS Usage", "Ram Usage", "Swap Usage"];

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4">
          <Link href="#history">
            <TemcardData />
          </Link>
          <Link href="#historyhumi">
            <HumcardData />
          </Link>
          <div>
            <UpscardData />
          </div>
          <div>
            <AccardData />
          </div>
        </div>

        <div className="card w-full  bg-white shadow-xl mb-4 mt-4">
          <div className=" flex items-center justify-center mt-5 text-lg">
            <GrServerCluster className="mr-2" />
            <p className="font-bold text-black text-lg">
              Server Info
            </p>
            
          </div>

          <div className="card-body">
            {emsData?.cpuData != null &&
              emsData.cpuData.map((cpu: any, cpuIndex: any) => (
                <div
                  key={cpuIndex}
                  className="collapse collapse-plus bg-base-200 mt-4"
                >
                  <input type="checkbox" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium flex">
                    <FaDotCircle className="mr-2 text-[#14B80C]" />
                    <span className="text-sm font-bold">
                      {emsData.cpuData[cpuIndex].server_name} Server Info -
                    </span>
                    <span className="ml-2 text-sm text-[#14B80C] animate-pulse">
                      Normal
                    </span>
                  </div>
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 gap-0.5 lg:gap-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-2 mb-4 text-left place-items-center md:place-items-start lg:place-items-start mt-6 md:mt-0">
                      {usageData.map((value, index) => (
                        <div key={index} className="mb-4">
                          <div className="card w-[315px] lg:w-[420px] xl:w-[275px] items-center bg-white text-neutral-content shadow-lg ">
                            {index === 0 && (
                              <GaugeData
                                usage={
                                  emsData.cpuData[cpuIndex].root_fs_total[0] || 0
                                }
                                color="#029861"
                                name={useDataLebel[index]}
                              />
                            )}
                            {index === 1 && (
                              <GaugeData
                                usage={
                                  emsData.cpuData[cpuIndex].ram_used[0] || 0
                                }
                                color="#ffc107"
                                name={useDataLebel[index]}
                              />
                            )}
                            {index === 2 && (
                              <GaugeData
                                usage={
                                  emsData.cpuData[cpuIndex].swap_total[0] || 0
                                }
                                color="#2153de"
                                name={useDataLebel[index]}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="">
                        <Total
                          servername={emsData.cpuData[cpuIndex]?.server_name} server={emsData.cpuData[cpuIndex]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="collapse collapse-plus bg-base-200">
              <input type="checkbox" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {emsData?.cpuData != null ? (
                  <span className="text-sm font-bold">
                    {emsData.cpuData[0].server_name} Server Info
                  </span>
                ) : (
                  <Loading isLoading={true} />
                )}
              </div>
              <div className="collapse-content">
                <div className="grid grid-cols-1 gap-0.5 lg:gap-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-2 mb-4 text-left place-items-center md:place-items-start lg:place-items-start mt-6 md:mt-0">
                  {usageData.map((value, index) => (
                    <div key={index} className="mb-4">
                      <div className="card w-[330px] lg:w-[420px] xl:w-[275px] items-center bg-white text-neutral-content shadow-lg ">
                        {index === 0 && emsData?.cpuData != null && (
                          <GaugeData
                            usage={emsData.cpuData[0].ram_used[0] || 0}
                            color="#029861"
                            name={useDataLebel[index]}
                          />
                        )}
                        {index === 1 && emsData?.cpuData != null && (
                          <GaugeData
                            usage={emsData.cpuData[0].ram_used[0] || 0}
                            color="#ffc107"
                            name={useDataLebel[index]}
                          />
                        )}
                        {index === 2 && emsData?.cpuData != null && (
                          <GaugeData
                            usage={emsData.cpuData[0].ram_used[0] || 0}
                            color="#2153de"
                            name={useDataLebel[index]}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="">
                    {emsData?.cpuData != null && (
                      <Total servername={emsData.cpuData[0]?.server_name} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mt-4">
              <input type="checkbox" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                {emsData?.cpuData != null ? (
                  <span className="text-sm font-bold">
                    {emsData.cpuData[1].server_name} Server Info
                  </span>
                ) : (
                  <Loading isLoading={true} />
                )}
              </div>
              <div className="collapse-content">
                <div className="grid grid-cols-1 gap-0.5 lg:gap-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-2 mb-4 text-left place-items-center md:place-items-start lg:place-items-start mt-6 md:mt-0">
                  {usageData.map((value, index) => (
                    <div key={index} className="mb-4">
                      <div className="card w-[330px] lg:w-[420px] xl:w-[275px] items-center bg-white text-neutral-content shadow-lg">
                        {index === 0 && emsData?.cpuData != null && (
                          <GaugeData
                            usage={emsData.cpuData[1].root_Fs_used[1] || 0}
                            color="#029861"
                            name={useDataLebel[index]}
                          />
                        )}
                        {index === 1 && emsData?.cpuData != null && (
                          <GaugeData
                            usage={emsData.cpuData[1].ram_used[1] || 0}
                            color="#ffc107"
                            name={useDataLebel[index]}
                          />
                        )}
                        {index === 2 && emsData?.cpuData != null && (
                          <GaugeData
                            usage={emsData.cpuData[1].swap_total[1] || 0}
                            color="#2153de"
                            name={useDataLebel[index]}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  {emsData?.cpuData != null && (
                    <div className="">
                      <Total servername={emsData.cpuData[1]?.server_name} />
                    </div>
                  )}
                </div>
              </div>
            </div> */}

            {/* <div className="mt-4">
              <div
                tabIndex={0}
                className={`collapse border border-base-300 bg-base-200`}
              >
                <div
                  className={`collapse-title text-xl font-medium ${isOpen ? "collapse-title-minus" : "collapse-title-plus"}`}
                  onClick={toggleCollapse}
                >
                  {isOpen ? "-" : "+"}

                  {emsData?.cpuData != null ? (
                    <span>{emsData.cpuData[0].server_name} Server Info</span>
                  ) : (
                    <Loading isLoading={true} />
                  )}
                </div>
                {isOpen && (
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 gap-0.5 lg:gap-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-2 mb-4 text-left place-items-center md:place-items-start lg:place-items-start mt-6 md:mt-0">
                      {usageData.map((value, index) => (
                        <div key={index} className="mb-4">
                          <div className="card w-[330px] lg:w-[420px] xl:w-[275px] items-center bg-white text-neutral-content shadow-lg ">
                            {index === 0 && (
                              <GaugeData
                                usage={emsData.cpuData[0].ram_used[0] || 0}
                                color="#029861"
                                name={useDataLebel[index]}
                              />
                            )}
                            {index === 1 && (
                              <GaugeData
                                usage={emsData.cpuData[0].ram_used[0] || 0}
                                color="#ffc107"
                                name={useDataLebel[index]}
                              />
                            )}
                            {index === 2 && (
                              <GaugeData
                                usage={emsData.cpuData[0].ram_used[0] || 0}
                                color="#2153de"
                                name={useDataLebel[index]}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="">
                        <Total servername={emsData.cpuData[0]?.server_name} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 mb-4">
              <div
                tabIndex={0}
                className={`collapse border border-base-300 bg-base-200`}
              >
                <div
                  className={`collapse-title text-xl font-medium ${isOpendiv ? "collapse-title-minus" : "collapse-title-plus"}`}
                  onClick={toggleCollapsediv}
                >
                  {isOpendiv ? "-" : "+"}

                  {emsData?.cpuData != null ? (
                    <span>{emsData.cpuData[1].server_name} Server Info</span>
                  ) : (
                    <Loading isLoading={true} />
                  )}
                </div>
                {isOpendiv && (
                  <div className="collapse-content">
                    <div className="grid grid-cols-1 gap-0.5 lg:gap-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-2 mb-4 text-left place-items-center md:place-items-start lg:place-items-start mt-6 md:mt-0">
                      {usageData.map((value, index) => (
                        <div key={index} className="mb-4">
                          <div className="card w-[330px] lg:w-[420px] xl:w-[275px] items-center bg-white text-neutral-content shadow-lg ">
                            {index === 0 && (
                              <GaugeData
                                usage={emsData.cpuData[1].root_Fs_used[1] || 0}
                                color="#029861"
                                name={useDataLebel[index]}
                              />
                            )}
                            {index === 1 && (
                              <GaugeData
                                usage={emsData.cpuData[1].ram_used[1] || 0}
                                color="#ffc107"
                                name={useDataLebel[index]}
                              />
                            )}
                            {index === 2 && (
                              <GaugeData
                                usage={emsData.cpuData[1].swap_total[1] || 0}
                                color="#2153de"
                                name={useDataLebel[index]}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="">
                        <Total servername={emsData.cpuData[1]?.server_name} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="history">
            <TemperatureChart />
          </div>
          <div id="historyhumi">
            <HumidityChart />
          </div>
        </div>

        <LinegraphData />
       
      </div>
      
    </div>
  );
};

export default Page;
