import React from "react";
import TemperatureChart from "@/components/templine/tempdata";
import HumidityChart from "@/components/humiline/humdata";
import Sensors from "@/components/sensros/sensors";

const page = () => {
  return (
    <>
      <div className="container mx-auto mt-5 ">
        <div>
          <Sensors />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div>
              <TemperatureChart />
            </div>
            <div>
              <HumidityChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
