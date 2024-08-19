// pages/chart.js
// "use client";
// import { useEffect, useRef, useMemo } from 'react';
// import Chart from 'chart.js/auto';
// interface DataEntry {
//   id: number;
//   type: string;
//   values: string;
//   insertedtime: string;
// }

// interface RawData {
//   [key: string]: DataEntry[];
// }
// const rawData = {

//     "zfs": [
//         {
//             "id": 589,
//             "type": "zfs",
//             "values": "0.000046424",
//             "insertedtime": "2024-04-01T04:19:10.187Z"
//         },
//         {
//             "id": 547,
//             "type": "zfs",
//             "values": "0.000077754",
//             "insertedtime": "2024-04-01T04:19:00.195Z"
//         }
// ],
//     "xfs": [
//         {
//             "id": 588,
//             "type": "xfs",
//             "values": "0.000030392",
//             "insertedtime": "2024-04-01T04:19:10.184Z"
//         },
//         {
//             "id": 546,
//             "type": "xfs",
//             "values": "0.000029744",
//             "insertedtime": "2024-04-01T04:19:00.193Z"
//         }
//   ],
//     "vmstat": [
//         {
//             "id": 587,
//             "type": "vmstat",
//             "values": "0.00035178",
//             "insertedtime": "2024-04-01T04:19:10.181Z"
//         },
//         {
//             "id": 545,
//             "type": "vmstat",
//             "values": "0.000784842",
//             "insertedtime": "2024-04-01T04:19:00.191Z"
//         }
//     ],
//     "uname": [
//         {
//             "id": 586,
//             "type": "uname",
//             "values": "0.000034273",
//             "insertedtime": "2024-04-01T04:19:10.176Z"
//         },
//         {
//             "id": 544,
//             "type": "uname",
//             "values": "0.000023452",
//             "insertedtime": "2024-04-01T04:19:00.189Z"
//         }
//     ],
//     "udp_queues": [
//         {
//             "id": 585,
//             "type": "udp_queues",
//             "values": "0.000258116",
//             "insertedtime": "2024-04-01T04:19:10.173Z"
//         },
//         {
//             "id": 543,
//             "type": "udp_queues",
//             "values": "0.000256204",
//             "insertedtime": "2024-04-01T04:19:00.188Z"
//         }
//     ],
//     "timex": [
//         {
//             "id": 584,
//             "type": "timex",
//             "values": "0.000026823",
//             "insertedtime": "2024-04-01T04:19:10.170Z"
//         },
//         {
//             "id": 542,
//             "type": "timex",
//             "values": "0.003601312",
//             "insertedtime": "2024-04-01T04:19:00.186Z"
//         }
//     ],
//     "time": [
//         {
//             "id": 583,
//             "type": "time",
//             "values": "0.00003282",
//             "insertedtime": "2024-04-01T04:19:10.167Z"
//         },
//         {
//             "id": 541,
//             "type": "time",
//             "values": "0.000081054",
//             "insertedtime": "2024-04-01T04:19:00.184Z"
//         }
//     ],
//     "thermal_zone": [
//         {
//             "id": 582,
//             "type": "thermal_zone",
//             "values": "0.000446759",
//             "insertedtime": "2024-04-01T04:19:10.164Z"
//         },
//         {
//             "id": 540,
//             "type": "thermal_zone",
//             "values": "0.000497219",
//             "insertedtime": "2024-04-01T04:19:00.180Z"
//         }
//     ],
//     "textfile": [
//         {
//             "id": 581,
//             "type": "textfile",
//             "values": "0.000032315",
//             "insertedtime": "2024-04-01T04:19:10.161Z"
//         },
//         {
//             "id": 539,
//             "type": "textfile",
//             "values": "0.000020966",
//             "insertedtime": "2024-04-01T04:19:00.178Z"
//         }
//     ],
//     "tapestats": [
//         {
//             "id": 580,
//             "type": "tapestats",
//             "values": "0.000068994",
//             "insertedtime": "2024-04-01T04:19:10.158Z"
//         },
//         {
//             "id": 538,
//             "type": "tapestats",
//             "values": "0.000042746",
//             "insertedtime": "2024-04-01T04:19:00.176Z"
//         }
//     ],
//     "stat": [
//         {
//             "id": 579,
//             "type": "stat",
//             "values": "0.000352885",
//             "insertedtime": "2024-04-01T04:19:10.156Z"
//         },
//         {
//             "id": 537,
//             "type": "stat",
//             "values": "0.000334675",
//             "insertedtime": "2024-04-01T04:19:00.174Z"
//         }
//     ],
//     "softnet": [
//         {
//             "id": 578,
//             "type": "softnet",
//             "values": "0.000167942",
//             "insertedtime": "2024-04-01T04:19:10.153Z"
//         },
//         {
//             "id": 536,
//             "type": "softnet",
//             "values": "0.000111902",
//             "insertedtime": "2024-04-01T04:19:00.170Z"
//         }
//     ],
//     "sockstat": [
//         {
//             "id": 577,
//             "type": "sockstat",
//             "values": "0.00031884",
//             "insertedtime": "2024-04-01T04:19:10.150Z"
//         },
//         {
//             "id": 535,
//             "type": "sockstat",
//             "values": "0.000253952",
//             "insertedtime": "2024-04-01T04:19:00.167Z"
//         }
//     ],
//     "schedstat": [
//         {
//             "id": 576,
//             "type": "schedstat",
//             "values": "0.000179055",
//             "insertedtime": "2024-04-01T04:19:10.148Z"
//         },
//         {
//             "id": 534,
//             "type": "schedstat",
//             "values": "0.00017309",
//             "insertedtime": "2024-04-01T04:19:00.162Z"
//         }
//     ],
//     "rapl": [
//         {
//             "id": 575,
//             "type": "rapl",
//             "values": "0.000098658",
//             "insertedtime": "2024-04-01T04:19:10.145Z"
//         },
//         {
//             "id": 533,
//             "type": "rapl",
//             "values": "0.000058283",
//             "insertedtime": "2024-04-01T04:19:00.159Z"
//         }
//     ],
//     "pressure": [
//         {
//             "id": 574,
//             "type": "pressure",
//             "values": "0.000058255",
//             "insertedtime": "2024-04-01T04:19:10.142Z"
//         },
//         {
//             "id": 532,
//             "type": "pressure",
//             "values": "0.000061589",
//             "insertedtime": "2024-04-01T04:19:00.157Z"
//         }
//     ],
//     "powersupplyclass": [
//         {
//             "id": 573,
//             "type": "powersupplyclass",
//             "values": "0.000778378",
//             "insertedtime": "2024-04-01T04:19:10.140Z"
//         },
//         {
//             "id": 531,
//             "type": "powersupplyclass",
//             "values": "0.001137673",
//             "insertedtime": "2024-04-01T04:19:00.155Z"
//         }
//     ],
//     "nvme": [
//         {
//             "id": 572,
//             "type": "nvme",
//             "values": "0.000042286",
//             "insertedtime": "2024-04-01T04:19:10.137Z"
//         },
//         {
//             "id": 530,
//             "type": "nvme",
//             "values": "0.000070034",
//             "insertedtime": "2024-04-01T04:19:00.153Z"
//         }
//     ],
//     "nfsd": [
//         {
//             "id": 571,
//             "type": "nfsd",
//             "values": "0.000046349",
//             "insertedtime": "2024-04-01T04:19:10.133Z"
//         },
//         {
//             "id": 529,
//             "type": "nfsd",
//             "values": "0.000068823",
//             "insertedtime": "2024-04-01T04:19:00.150Z"
//         }
//     ],
//     "nfs": [
//         {
//             "id": 570,
//             "type": "nfs",
//             "values": "0.000046679",
//             "insertedtime": "2024-04-01T04:19:10.129Z"
//         },
//         {
//             "id": 528,
//             "type": "nfs",
//             "values": "0.000051561",
//             "insertedtime": "2024-04-01T04:19:00.145Z"
//         }
//     ],
//     "netstat": [
//         {
//             "id": 569,
//             "type": "netstat",
//             "values": "0.001681588",
//             "insertedtime": "2024-04-01T04:19:10.125Z"
//         },
//         {
//             "id": 527,
//             "type": "netstat",
//             "values": "0.004291562",
//             "insertedtime": "2024-04-01T04:19:00.143Z"
//         }
//     ],
//     "netdev": [
//         {
//             "id": 568,
//             "type": "netdev",
//             "values": "0.000355416",
//             "insertedtime": "2024-04-01T04:19:10.122Z"
//         },
//         {
//             "id": 526,
//             "type": "netdev",
//             "values": "0.000301159",
//             "insertedtime": "2024-04-01T04:19:00.141Z"
//         }
//     ],
//     "netclass": [
//         {
//             "id": 567,
//             "type": "netclass",
//             "values": "0.006842786",
//             "insertedtime": "2024-04-01T04:19:10.119Z"
//         },
//         {
//             "id": 525,
//             "type": "netclass",
//             "values": "0.006239399",
//             "insertedtime": "2024-04-01T04:19:00.138Z"
//         }
//     ],
//     "meminfo": [
//         {
//             "id": 566,
//             "type": "meminfo",
//             "values": "0.000613343",
//             "insertedtime": "2024-04-01T04:19:10.116Z"
//         },
//         {
//             "id": 524,
//             "type": "meminfo",
//             "values": "0.000739053",
//             "insertedtime": "2024-04-01T04:19:00.134Z"
//         }
//     ],
//     "mdadm": [
//         {
//             "id": 565,
//             "type": "mdadm",
//             "values": "0.000098825",
//             "insertedtime": "2024-04-01T04:19:10.111Z"
//         },
//         {
//             "id": 523,
//             "type": "mdadm",
//             "values": "0.000089555",
//             "insertedtime": "2024-04-01T04:19:00.128Z"
//         }
//     ],
//     "loadavg": [
//         {
//             "id": 564,
//             "type": "loadavg",
//             "values": "0.000110149",
//             "insertedtime": "2024-04-01T04:19:10.108Z"
//         },
//         {
//             "id": 522,
//             "type": "loadavg",
//             "values": "0.000153767",
//             "insertedtime": "2024-04-01T04:19:00.126Z"
//         }
//     ],
//     "ipvs": [
//         {
//             "id": 563,
//             "type": "ipvs",
//             "values": "0.000052406",
//             "insertedtime": "2024-04-01T04:19:10.105Z"
//         },
//         {
//             "id": 521,
//             "type": "ipvs",
//             "values": "0.000113075",
//             "insertedtime": "2024-04-01T04:19:00.123Z"
//         }
//     ],
//     "infiniband": [
//         {
//             "id": 562,
//             "type": "infiniband",
//             "values": "0.000034038",
//             "insertedtime": "2024-04-01T04:19:10.103Z"
//         },
//         {
//             "id": 520,
//             "type": "infiniband",
//             "values": "0.000070322",
//             "insertedtime": "2024-04-01T04:19:00.119Z"
//         }
//     ],
//     "hwmon": [
//         {
//             "id": 561,
//             "type": "hwmon",
//             "values": "0.002338191",
//             "insertedtime": "2024-04-01T04:19:10.100Z"
//         },
//         {
//             "id": 519,
//             "type": "hwmon",
//             "values": "0.002944108",
//             "insertedtime": "2024-04-01T04:19:00.115Z"
//         }
//     ],
//     "filesystem": [
//         {
//             "id": 560,
//             "type": "filesystem",
//             "values": "0.000475608",
//             "insertedtime": "2024-04-01T04:19:10.094Z"
//         },
//         {
//             "id": 518,
//             "type": "filesystem",
//             "values": "0.000635171",
//             "insertedtime": "2024-04-01T04:19:00.108Z"
//         }
//     ],
//     "filefd": [
//         {
//             "id": 559,
//             "type": "filefd",
//             "values": "0.000078744",
//             "insertedtime": "2024-04-01T04:19:10.091Z"
//         },
//         {
//             "id": 517,
//             "type": "filefd",
//             "values": "0.000110951",
//             "insertedtime": "2024-04-01T04:19:00.105Z"
//         }
//     ],
//     "fibrechannel": [
//         {
//             "id": 558,
//             "type": "fibrechannel",
//             "values": "0.000037429",
//             "insertedtime": "2024-04-01T04:19:10.089Z"
//         },
//         {
//             "id": 516,
//             "type": "fibrechannel",
//             "values": "0.000051721",
//             "insertedtime": "2024-04-01T04:19:00.101Z"
//         }
//     ],
//     "entropy": [
//         {
//             "id": 557,
//             "type": "entropy",
//             "values": "0.00026495",
//             "insertedtime": "2024-04-01T04:19:10.086Z"
//         },
//         {
//             "id": 515,
//             "type": "entropy",
//             "values": "0.000421614",
//             "insertedtime": "2024-04-01T04:19:00.097Z"
//         }
//     ],
//     "edac": [
//         {
//             "id": 556,
//             "type": "edac",
//             "values": "0.000078955",
//             "insertedtime": "2024-04-01T04:19:10.083Z"
//         },
//         {
//             "id": 514,
//             "type": "edac",
//             "values": "0.000102964",
//             "insertedtime": "2024-04-01T04:19:00.092Z"
//         }
//     ],
//     "diskstats": [
//         {
//             "id": 555,
//             "type": "diskstats",
//             "values": "0.000170287",
//             "insertedtime": "2024-04-01T04:19:10.073Z"
//         },
//         {
//             "id": 513,
//             "type": "diskstats",
//             "values": "0.000241864",
//             "insertedtime": "2024-04-01T04:19:00.087Z"
//         }
//     ],
//     "cpufreq": [
//         {
//             "id": 554,
//             "type": "cpufreq",
//             "values": "0.000183493",
//             "insertedtime": "2024-04-01T04:19:10.070Z"
//         },
//         {
//             "id": 512,
//             "type": "cpufreq",
//             "values": "0.000177559",
//             "insertedtime": "2024-04-01T04:19:00.084Z"
//         }
//     ],
//     "cpu": [
//         {
//             "id": 553,
//             "type": "cpu",
//             "values": "0.000716492",
//             "insertedtime": "2024-04-01T04:19:10.067Z"
//         },
//         {
//             "id": 511,
//             "type": "cpu",
//             "values": "0.000894068",
//             "insertedtime": "2024-04-01T04:19:00.080Z"
//         }
//     ],
//     "conntrack": [
//         {
//             "id": 552,
//             "type": "conntrack",
//             "values": "0.000045536",
//             "insertedtime": "2024-04-01T04:19:10.064Z"
//         },
//         {
//             "id": 510,
//             "type": "conntrack",
//             "values": "0.000071239",
//             "insertedtime": "2024-04-01T04:19:00.076Z"
//         }
//     ],
//     "btrfs": [
//         {
//             "id": 551,
//             "type": "btrfs",
//             "values": "0.000037191",
//             "insertedtime": "2024-04-01T04:19:10.060Z"
//         },
//         {
//             "id": 509,
//             "type": "btrfs",
//             "values": "0.000047166",
//             "insertedtime": "2024-04-01T04:19:00.073Z"
//         }
//     ],
//     "bonding": [
//         {
//             "id": 550,
//             "type": "bonding",
//             "values": "0.000054254",
//             "insertedtime": "2024-04-01T04:19:10.057Z"
//         },
//         {
//             "id": 508,
//             "type": "bonding",
//             "values": "0.000047987",
//             "insertedtime": "2024-04-01T04:19:00.066Z"
//         }
//     ],
//     "bcache": [
//         {
//             "id": 549,
//             "type": "bcache",
//             "values": "0.000029426",
//             "insertedtime": "2024-04-01T04:19:10.050Z"
//         },
//         {
//             "id": 507,
//             "type": "bcache",
//             "values": "0.000036846",
//             "insertedtime": "2024-04-01T04:19:00.061Z"
//         }
//     ],
//     "arp": [
//         {
//             "id": 548,
//             "type": "arp",
//             "values": "0.00012288",
//             "insertedtime": "2024-04-01T04:19:10.045Z"
//         },
//         {
//             "id": 506,
//             "type": "arp",
//             "values": "0.000114447",
//             "insertedtime": "2024-04-01T04:19:00.047Z"
//         }
//     ]

//   // Add other data types similarly
// };

// const transformData = (rawData) => {
//   const datasets = [];
//   for (const dataType in rawData) {
//     const dataPoints = rawData[dataType].map(entry => ({
//       x: new Date(entry.insertedtime),
//       y: parseFloat(entry.values)
//     }));
//     datasets.push({
//       label: dataType,
//       data: dataPoints,
//       borderColor: 'rgba(75, 192, 192, 1)',
//       borderWidth: 1
//     });
//   }
//   return datasets;
// };

// const ChartPage = () => {
//   const data = useMemo(() => transformData(rawData), []);

//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const chartInstanceRef = useRef<Chart | null>(null);

//   useEffect(() => {
//     if (data.length > 0 && chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');

//       if (ctx) {
//         if (chartInstanceRef.current) {
//           chartInstanceRef.current.destroy();
//         }

//         chartInstanceRef.current = new Chart(ctx, {
//           type: 'line',
//           data: {
//             datasets: data
//           },
//           options: {
//             scales: {
//               x: {
//                 type: 'time',
//                 time: {
//                   unit: 'minute'
//                 },
//                 title: {
//                   display: true,
//                   text: 'Inserted Time'
//                 }
//               },
//               y: {
//                 beginAtZero: true,
//                 title: {
//                   display: true,
//                   text: 'Values'
//                 }
//               }
//             }
//           }
//         });
//       }
//     }

//     return () => {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//         chartInstanceRef.current = null;
//       }
//     };
//   }, [data]);

//   return (
//     <div>
//       <canvas ref={chartRef} />
//     </div>
//   );
// };

// export default ChartPage;

// // LinegraphData.tsx
"use client";
import React, { useContext, useState, useEffect } from "react";
import LineGraph from "@/components/linegraph/linegraph"; // Assuming your line graph component is named LineGraph
import sampledataCPU from "./sampledataCPUdetails.json";
import { temperature } from "@/models/HomeDataType";
import LineGraphCPU from "./linegraphCPU";
import baseUrl from "../common/common_url";
import sampledatascrap from "./sampledatatest.json";
import EmsContext from "@/app/context/context";
import { Loading } from "@/components/loading";

const LinegraphData: React.FC = () => {
  // const [screenSize, setScreenSize] = useState(getScreenSize());
  // const [apiData, setApiData] = useState<temperature>({});

  // const [apiData2, setApiData2] = useState<{ [key: string]: number[] }>({});

  const [selectedOption, setSelectedOption] = useState("");

  const [selectedOptionCPU, setSelectedOptionCPU] = useState("");

  // useEffect(() => {
  //   function handleResize() {
  //     setScreenSize(getScreenSize());
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Function to fetch API data
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`${baseUrl}/ems/get-scrape-time`); // Replace with your API URL

  //       const response2 = await fetch(`${baseUrl}/view/process-cpu-details`);

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       const data2 = await response2.json();
  //       console.log("API Data:", data);

  //       console.log("API 2 Data:", data2);
  //       setApiData(data); // Set API data in state
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   setApiData2(sampledataCPU);
  //   setApiData(sampledatascrap);
  //   const interval = setInterval(() => {
  //     setApiData(sampledatascrap);
  //     setApiData2(sampledataCPU);
  //   }, 5000);

  //   fetchData();
  //   return () => clearInterval(interval);

  //   // Call the fetch data function
  // }, []); // Empty dependency array to run once on component mount

  // function getScreenSize() {
  //   const width = window.innerWidth;
  //   if (width < 640) {
  //     return "sm";
  //   } else if (width >= 640 && width < 1024) {
  //     return "md";
  //   } else {
  //     return "lg";
  //   }
  // }
  const emsData: any = useContext(EmsContext);

  if (emsData?.cpuData != null) {
    console.log("cpu context data length ", emsData.cpuData.length);
    console.log("cpu context data  ", emsData.cpuData[1].scrape_time_data);
  }

  return (
    <div className="mt-2">
      {/* <div
        className={`grid ${screenSize === "sm" ? "sm:grid-cols-1" : "md:grid-cols-2"} gap-4`}
      > */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-12">
          <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm font-bold">
                All Scrape Time Detection History
              </h1>
            </div>
            <div className="card-body">
              {/* <h1 className="mb-4 text-black-800 text-center font-bold">
                All Scrape Time Graph
              </h1> */}
              {/* {emsData.cpuData && <LineGraph data={emsData.cpuData[1].scrape_time_data} />} */}
              <div>
                <div className="grid grid-cols-2">
                  <div></div>
                  <div className="mb-8">
                    <select
                      value={selectedOption}
                      onChange={(e: any) => setSelectedOption(e.target.value)}
                      className="bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full text-xs font-bold"
                    >
                      <option value="s">Select Server</option>
                      <option value="Supernova">Supernova</option>
                      <option value="Divergent">Divergent</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-auto md:overflow-hidden lg:overflow-hidden">
                  <div className="w-screen sm:w-full ">
                    {/* {emsData.cpuData && selectedOption === "" ? (
                      <LineGraph data={emsData.cpuData[0].scrape_time_data} />
                    ): (
                      emsData.cpuData &&
                      emsData.cpuData.map((item: any, index: any) =>
                        item.server_name === selectedOption ? (
                          <LineGraph key={index} data={item.scrape_time_data} />
                        ) : null
                      )
                    )} */}
                    <div className="w-screen sm:w-full">
                      {emsData.cpuData && selectedOption === "" ? (
                        <LineGraph data={emsData.cpuData[0].scrape_time_data} />
                      ) : selectedOption === "s" ? (
                        <LineGraph data={emsData.cpuData[0].scrape_time_data} /> // Placeholder for what should happen if selectedOption === "s"
                      ) : (
                        emsData.cpuData &&
                        emsData.cpuData.map((item: any, index: any) =>
                          item.server_name === selectedOption ? (
                            <LineGraph
                              key={index}
                              data={item.scrape_time_data}
                            />
                          ) : null
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="card  bg-white shadow-lg">
            <div className="bg-[#A4ADA3] rounded items-center py-2">
              <h1 className="text-white text-center text-sm font-bold">
                CPU Performance Detection History
              </h1>
            </div>
            <div className="card-body">
              {/* <h1 className="mb-4 text-black-800 text-center font-bold">
                CPU Scrape Time Graph
              </h1> */}
              {/* <LineGraphCPU data={apiData2} /> */}
              <div>
                <div className="grid grid-cols-2">
                  <div></div>
                  <div className="mb-8">
                    <select
                      value={selectedOptionCPU}
                      onChange={(e: any) => setSelectedOptionCPU(e.target.value)}
                      className="bg-white dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full text-xs font-bold"
                    >
                      <option value="S">Select Server</option>
                      <option value="Supernova">Supernova</option>
                      <option value="Divergent">Divergent</option>
                    </select>
                  </div>
                </div>
                <div className="overflow-auto md:overflow-hidden lg:overflow-hidden">
                  <div className="w-screen sm:w-full ">
                  {emsData.cpuData && selectedOptionCPU === "" ? (
                        <LineGraph data={emsData.cpuData[0].cpu_details} />
                      ) : selectedOptionCPU === "S" ? (
                        <LineGraph data={emsData.cpuData[0].cpu_details} /> // Placeholder for what should happen if selectedOption === "s"
                      ) : (
                        emsData.cpuData &&
                        emsData.cpuData.map((item: any, index: any) =>
                          item.server_name === selectedOptionCPU ? (
                            <LineGraph
                              key={index}
                              data={item.cpu_details}
                            />
                          ) : null
                        )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinegraphData;
