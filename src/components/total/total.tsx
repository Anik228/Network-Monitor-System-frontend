"use client";
import { FC } from "react";
import React, { useContext,useState, useEffect } from "react";
import baseUrl from "../common/common_url";
import EmsContext from "@/app/context/context";
import { Loading } from "@/components/loading";


interface Props {
  servername: string;
  server:Cpu;
}

interface Cpu {
  server_name: string;
  cpu_details: CpuDetails;
  scrape_time_data: ScrapeTimeData;
  root_Fs_used?: (string | null)[] | null;
  ram_used?: (number | null)[] | null;
  swap_used?: (string | null)[] | null;
  cpu_cores: number;
  up_time: number;
  root_fs_total:string;
}

interface CpuDetails {
  user?: (number)[] | null;
  system?: (number)[] | null;
  steal?: (number)[] | null;
  softirq?: (number)[] | null;
  nice?: (number)[] | null;
  irq?: (number)[] | null;
  iowait?: (number)[] | null;
  idle?: (number)[] | null;
}

interface ScrapeTimeData {
  [key: string]: (number)[] | null;
}


const Total: FC<Props>= ({servername,server}) => {

  const emsData:any = useContext(EmsContext);

  const [cpuCoreUsage, setcpuCoreUsage] = useState<number | null>(null);

  const [upTimeUsage, setupTimeUsage] = useState<number | null>(null);

  const [RootTotalUsage, setRootTotalUsage] = useState<number | null>(null);

  const [swapTotalUsage, setswapTotalUsage] = useState<number | null>(null);

  //const rootFsUsage = 17.1; //(here set the api data value)
  //const ramUsage = 41;
  //const swapUsage = 2.91;

  console.log("server info ",server);
   
  return (
    <div>
    <div className="grid grid-cols-2 gap-2 mb-2">
      <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
        <div className="card-body items-center text-center">
          <p className="font-semibold text-sm">Cpu Core</p>
          {/* <div className="flex">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <p className="font-bold text-sm">{cpuCoreUsage}</p>
          </div> */}
          
          {emsData?.cpuData !=null  ? (
             <p className="font-bold text-xl">{server.cpu_cores}</p>
            //  <span>{emsData.cpuData[0].server_name} Server Info</span>
          ) : (
            <Loading isLoading={true} />
          )}
          

        </div>
      </div>

      <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
        <div className="card-body items-center text-center">
          <p className="mt-[13px] md:mt-0 font-semibold text-sm">Uptime</p>
          {/* <div className="flex">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2 md:mr-2 lg:mr-2"></div>
            <p className="font-bold text-sm">{upTimeUsage} Week</p>
          </div> */}
          
           {emsData?.cpuData !=null ? (
             <p className="font-bold text-xl mt-4 md:mt-0">{server.up_time}</p>
            //  <span>{emsData.cpuData[0].server_name} Server Info</span>
          ) : (
            <Loading isLoading={true} />
          )}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
        <div className="card-body items-center text-center">
          <p className="font-semibold ml-2 mr-2 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 text-sm">
            Root Used
          </p>

          {/* <div className="flex">
            <div className="w-3 h-3 rounded-full bg-red-500 "></div>
            <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0">
              {RootTotalUsage} Gib
            </p>
          </div> */}
           <p className="font-bold text-xl mr-0 md:mr-0 lg:mr-0">
           {server.root_Fs_used} Gib
            </p>
        </div>
      </div>

      <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
        <div className="card-body items-center text-center">
          <p className="font-semibold text-sm  ml-2 mr-2 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0">
            Ram Used
          </p>
          {/* <div className="flex">
            <div className="w-3 h-3 rounded-full bg-red-500 "></div>
            <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0"> Gib</p>
          </div> */}
           <p className="font-bold text-xl mr-0 md:mr-0 lg:mr-0">2 Gib</p>
        </div>
      </div>

      <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
        <div className="card-body items-center text-center">
          <p className="font-semibold  ml-2 mr-2 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 text-sm">
            Swap Used
          </p>
          {/* <div className="flex">
            <div className="w-3 h-3 rounded-full bg-red-500 "></div>
            <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0">
              {swapTotalUsage} Gib
            </p>
          </div> */}
          <p className="font-bold text-xl mr-0 md:mr-0 lg:mr-0">
              {server.swap_used} Gib
            </p>
        </div>
      </div>
    </div>
  </div>
  )
  
    //set here a parent condition that if servername==="supernova"
   
    //  
};

export default Total;


//if (servername === "Supernova") {
  //   return (
  //     <div>
  //     <div className="grid grid-cols-2 gap-2 mb-4">
  //       <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //         <div className="card-body items-center text-center">
  //           <p className="font-semibold text-sm">Cpu Core</p>
  //           {/* <div className="flex">
  //             <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
  //             <p className="font-bold text-sm">{cpuCoreUsage}</p>
  //           </div> */}
            
  //           {emsData?.cpuData !=null  ? (
  //              <p className="font-bold text-xl">{emsData.cpuData[0].cpu_cores}</p>
  //             //  <span>{emsData.cpuData[0].server_name} Server Info</span>
  //           ) : (
  //             <Loading isLoading={true} />
  //           )}
            

  //         </div>
  //       </div>

  //       <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //         <div className="card-body items-center text-center">
  //           <p className="font-semibold text-sm">Uptime</p>
  //           {/* <div className="flex">
  //             <div className="w-3 h-3 rounded-full bg-red-500 mr-2 md:mr-2 lg:mr-2"></div>
  //             <p className="font-bold text-sm">{upTimeUsage} Week</p>
  //           </div> */}
            
  //            {emsData?.cpuData !=null ? (
  //              <p className="font-bold text-xl">{emsData.cpuData[0].up_time}</p>
  //             //  <span>{emsData.cpuData[0].server_name} Server Info</span>
  //           ) : (
  //             <Loading isLoading={true} />
  //           )}
  //         </div>
  //       </div>
  //     </div>

  //     <div className="grid grid-cols-3 gap-2">
  //       <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //         <div className="card-body items-center text-center">
  //           <p className="font-semibold ml-4 mr-8 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 text-sm">
  //             Root Used
  //           </p>

  //           {/* <div className="flex">
  //             <div className="w-3 h-3 rounded-full bg-red-500 "></div>
  //             <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0">
  //               {RootTotalUsage} Gib
  //             </p>
  //           </div> */}
  //            <p className="font-bold text-xl mr-4 md:mr-0 lg:mr-0">
  //            {emsData.cpuData[0].root_fs_total} Gib
  //             </p>
  //         </div>
  //       </div>

  //       <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //         <div className="card-body items-center text-center">
  //           <p className="font-semibold text-sm ml-4 mr-8 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0">
  //             Ram Used
  //           </p>
  //           {/* <div className="flex">
  //             <div className="w-3 h-3 rounded-full bg-red-500 "></div>
  //             <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0"> Gib</p>
  //           </div> */}
  //            <p className="font-bold text-xl mr-4 md:mr-0 lg:mr-0">2 Gib</p>
  //         </div>
  //       </div>

  //       <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //         <div className="card-body items-center text-center">
  //           <p className="font-semibold ml-4 mr-8 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 text-sm">
  //             Swap Used
  //           </p>
  //           {/* <div className="flex">
  //             <div className="w-3 h-3 rounded-full bg-red-500 "></div>
  //             <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0">
  //               {swapTotalUsage} Gib
  //             </p>
  //           </div> */}
  //           <p className="font-bold text-xl mr-4 md:mr-0 lg:mr-0">
  //               0 Gib
  //             </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   )
  // } else if(servername === "Divergent")  {
  //   return (
  //   <div>
  //   <div className="grid grid-cols-2 gap-2 mb-4">
  //     <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //       <div className="card-body items-center text-center">
  //         <p className="font-semibold text-sm">Cpu Core</p>
  //         {/* <div className="flex">
  //           <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
  //           <p className="font-bold text-sm">{cpuCoreUsage}</p>
  //         </div> */}
          
  //         {emsData?.cpuData !=null  ? (
  //            <p className="font-bold text-xl">{emsData.cpuData[1].cpu_cores}</p>
  //           //  <span>{emsData.cpuData[0].server_name} Server Info</span>
  //         ) : (
  //           <Loading isLoading={true} />
  //         )}
          

  //       </div>
  //     </div>

  //     <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //       <div className="card-body items-center text-center">
  //         <p className="font-semibold text-sm">Uptime</p>
  //         {/* <div className="flex">
  //           <div className="w-3 h-3 rounded-full bg-red-500 mr-2 md:mr-2 lg:mr-2"></div>
  //           <p className="font-bold text-sm">{upTimeUsage} Week</p>
  //         </div> */}
          
  //          {emsData?.cpuData !=null ? (
  //            <p className="font-bold text-xl">{emsData.cpuData[1].up_time}</p>
  //           //  <span>{emsData.cpuData[0].server_name} Server Info</span>
  //         ) : (
  //           <Loading isLoading={true} />
  //         )}
  //       </div>
  //     </div>
  //   </div>

  //   <div className="grid grid-cols-3 gap-2">
  //     <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //       <div className="card-body items-center text-center">
  //         <p className="font-semibold ml-4 mr-8 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 text-sm">
  //        Root Used
  //         </p>

  //         {/* <div className="flex">
  //           <div className="w-3 h-3 rounded-full bg-red-500 "></div>
  //           <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0">
  //             {RootTotalUsage} Gib
  //           </p>
  //         </div> */}
  //          <p className="font-bold text-xl mr-4 md:mr-0 lg:mr-0">
  //          {emsData.cpuData[1].root_fs_total}  Gib
  //           </p>
  //       </div>
  //     </div>

  //     <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //       <div className="card-body items-center text-center">
  //         <p className="font-semibold text-sm ml-4 mr-8 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0">
  //           Ram Used
  //         </p>
  //         {/* <div className="flex">
  //           <div className="w-3 h-3 rounded-full bg-red-500 "></div>
  //           <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0"> Gib</p>
  //         </div> */}
  //          <p className="font-bold text-xl mr-4 md:mr-0 lg:mr-0">2 Gib</p>
  //       </div>
  //     </div>

  //     <div className="card bg-white hover:bg-blue-950 hover:text-white transition duration-300 shadow-lg">
  //       <div className="card-body items-center text-center">
  //         <p className="font-semibold ml-4 mr-8 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 text-sm">
  //           Swap Used
  //         </p>
  //         {/* <div className="flex">
  //           <div className="w-3 h-3 rounded-full bg-red-500 "></div>
  //           <p className="font-bold text-sm mr-4 md:mr-0 lg:mr-0">
  //             {swapTotalUsage} Gib
  //           </p>
  //         </div> */}
  //         <p className="font-bold text-xl mr-4 md:mr-0 lg:mr-0">
  //             0 Gib
  //           </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // )}
