// // AnyPage.js
// AnyPage.js
"use client";

import React, { useContext} from "react";
import SmokeChart from "./smokegraph";
import { Loading } from "@/components/loading";
import EmsContext from "@/app/context/context";

const SmokeData = () => {
  const emsData = useContext(EmsContext);

  return (
    <div className="">
      <div>
        <div className="mb-4">
          <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm  font-bold">
                Smoke Detection History
              </h1>
            </div>
            <div className="card-body">
              <div>
                {/* {jsonData.length === 0 ? (
                  <Loading isLoading={true} />
                ) : (
                  <SmokeChart  data={jsonData} />
                )} */}

                {emsData?.emsData != null && emsData?.emsData.smokeHistory ? (
                  <SmokeChart data={emsData?.emsData.smokeHistory} />
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

export default SmokeData;
