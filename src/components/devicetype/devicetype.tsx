"use client";
import React, { useContext } from "react";
import EmsContext from "@/app/context/context";

const Devicetype = () => {
  const emsData = useContext(EmsContext);

  console.log("Device type data ", emsData?.deviceTypeData);

  return (
    <div>
      <div className="">
        <div className="my-5 border-l-8 text-xl border-[#0165B9] ps-4 py-1 font-semibold bg-gradient-to-r from-[#B9EEFF] to-[#E0F1FC] w-fit">
          <div>Devices Types</div>
        </div>

        <div className="">
          {emsData?.deviceTypeData ? (
            <div className="overflow-x-auto">
              <table className="table table-zebra bg-white">
                <thead className="bg-gradient-to-r from-[#0165B9] to-[#23A5CE] text-white font-medium text-base">
                  <tr className="text-center">
                    <th>Serial</th>
                    <th>Device Name</th>
                    <th>Device Status</th>
                  </tr>
                </thead>
                <tbody>
                  {emsData?.deviceTypeData?.map((device, index) => (
                    <tr key={device.id} className="text-center">
                      <th>#{index + 1}</th>
                      <td className="text-center">
                        <div className="font-semibold">{device.name}</div>
                      </td>

                      <td className="items-center">
                        <div
                          className={`w-fit m-auto px-5 ${
                            device.type_status === 0
                              ? "bg-red-500 text-white p-2 rounded text-center"
                              : device.type_status === 1
                                ? "bg-green-500 text-white p-2 rounded text-center"
                                : "bg-gray-500 text-white p-2 rounded"
                          }`}
                        >
                          {device.type_status === 0
                            ? "Inactive"
                            : device.type_status === 1
                              ? "Active"
                              : ""}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Devicetype;
