// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Chart, { ChartConfiguration } from 'chart.js/auto';
// import { format } from 'date-fns';
// import 'chartjs-adapter-date-fns';

// interface ZfsEntry {
//   id: number;
//   type: string;
//   values: string;
//   insertedtime: string;
// }

// interface ZfsData {
//   [key: string]: ZfsEntry[];
// }


// interface Server {
//   server_name: string;
//   cpu_details: CpuDetails;
//   scrape_time_data: ScrapeTimeData;
//   root_Fs_used?: (string | null)[] | null;
//   ram_used?: (number | null)[] | null;
//   swap_total?: (string | null)[] | null;
//   cpu_cores: number;
//   up_time: number;
//   root_fs_total: string;
// }
// interface CpuDetails {
//   user?: (arraytype)[] | null;
//   system?: (arraytype)[] | null;
//   steal?: (arraytype)[] | null;
//   softirq?: (arraytype)[] | null;
//   nice?: (arraytype)[] | null;
//   irq?: (arraytype)[] | null;
//   iowait?: (arraytype)[] | null;
//   idle?: (arraytype)[] | null;
// }
// interface arraytype {
//   id: number;
//   type: string;
//   values: string;
//   insertedtime: string;
//   server_id: number;
// }
// interface ScrapeTimeData {
//   zfs?: (arraytype)[] | null;
//   xfs?: (arraytype)[] | null;
//   vmstat?: (arraytype)[] | null;
//   uname?: (arraytype)[] | null;
//   udp_queues?: (arraytype)[] | null;
//   timex?: (arraytype)[] | null;
//   time?: (arraytype)[] | null;
//   thermal_zone?: (arraytype)[] | null;
//   textfile?: (arraytype)[] | null;
//   tapestats?: (arraytype)[] | null;
//   stat?: (arraytype)[] | null;
//   softnet?: (arraytype)[] | null;
//   sockstat?: (arraytype)[] | null;
//   schedstat?: (arraytype)[] | null;
//   rapl?: (arraytype)[] | null;
//   pressure?: (arraytype)[] | null;
//   powersupplyclass?: (arraytype)[] | null;
//   nvme?: (arraytype)[] | null;
//   nfsd?: (arraytype)[] | null;
//   nfs?: (arraytype)[] | null;
//   netstat?: (arraytype)[] | null;
//   netdev?: (arraytype)[] | null;
//   netclass?: (arraytype)[] | null;
//   meminfo?: (arraytype)[] | null;
//   mdadm?: (arraytype)[] | null;
//   loadavg?: (arraytype)[] | null;
//   ipvs?: (arraytype)[] | null;
//   infiniband?: (arraytype)[] | null;
//   hwmon?: (arraytype)[] | null;
//   filesystem?: (arraytype)[] | null;
//   filefd?: (arraytype)[] | null;
//   fibrechannel?: (arraytype)[] | null;
//   entropy?: (arraytype)[] | null;
//   edac?: (arraytype)[] | null;
//   diskstats?: (arraytype)[] | null;
//   cpufreq?: (arraytype)[] | null;
//   cpu?: (arraytype)[] | null;
//   conntrack?: (arraytype)[] | null;
//   btrfs?: (arraytype)[] | null;
//   bonding?: (arraytype)[] | null;
//   bcache?: (arraytype)[] | null;
//   arp?: (arraytype)[] | null;
// }

// interface Props {
//   data: any;
// }

// const ZfsGraph: React.FC<Props> = ({ data }) => {
//   const chartContainer = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart<"line"> | null>(null);
//   const [selectedArray, setSelectedArray] = useState<any | null>(null);
//   const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

//   useEffect(() => {
//     const resizeListener = () => {
//       setIsSmallScreen(window.innerWidth <= 600); // Adjust this threshold as needed
//     };

//     window.addEventListener('resize', resizeListener);

//     return () => {
//       window.removeEventListener('resize', resizeListener);
//     };
//   }, []);

//   useEffect(() => {
//     if (data && chartContainer.current) {
//       const ctx = chartContainer.current.getContext('2d');

//       if (ctx) {
//         if (chartInstance.current) {
//           chartInstance.current.destroy();
//         }

//         const chartConfig: ChartConfiguration<"line"> = {
//           type: 'line',
//           data: {
//             datasets: getDatasets()
//           },
//           options: {
//             scales: {
//               x: {
//                 type: 'time',
//                 grid: {
//                   lineWidth: 1,
//                   color: 'black'
//                 },
//                 time: {
//                   unit: 'minute', // Displaying time by minute
//                   displayFormats: {
//                     minute: 'MMM dd, yyyy h:mm a' // Format including date and time
//                   }
//                 },
//                 title: {
//                   display: true,
//                   text: 'Insertion Time'
//                 }
//               },
//               y: {
//                 grid: {
//                   lineWidth: 1,
//                   color: 'black'
//                 },
//                 title: {
//                   display: true,
//                   text: 'Performance Value'
//                 }
//               }
//             },
//             plugins: {
//               legend: {
//                 display: shouldDisplayLegend(),
//                 position: 'bottom',
//                 maxHeight: 500,
//                 labels: {
//                   font: {
//                     size: 8,
//                   },
//                   boxHeight: 1,
//                   color: 'black'
//                 }
//               }
//             }
//           }
//         };

//         chartInstance.current = new Chart(ctx, chartConfig);
//       }
//     }
//   }, [data, selectedArray, isSmallScreen]);

//   const getDatasets = () => {
//     if (!selectedArray || selectedArray === 'All') {
//       return Object.keys(data).map(array => ({
//         label: array,
//         data: (data[selectedArray] || []).map((entry: any) => ({
//           x: new Date(entry.insertedtime),
//           y: parseFloat(entry.values)
//         })),
        
//         fill: false
//       }));
//     } else {
//       return [{
//         label: selectedArray,
//         data: data[selectedArray].map((entry:any) => ({
//           x: new Date(entry.insertedtime),
//           y: parseFloat(entry.values)
//         })),
//         fill: false
//       }];
//     }
//   };

//   const handleArraySelect = (array: string) => {
//     setSelectedArray(array);
//   };

//   const shouldDisplayLegend = () => {
//     return !isSmallScreen || (isSmallScreen && selectedArray !== 'All');
//   };

//   return (
//     <div>
//       <canvas ref={chartContainer} />
//       <div>
//         <select value={selectedArray || ''} onChange={(e:any )=> handleArraySelect(e.target.value)}>
//           <option value="">Select an array</option>
//           <option value="All">All</option>
//           {Object.keys(data).map(array => (
//             <option key={array} value={array}>
//               {array}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ZfsGraph;



"use client";
import React, { useState, useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { format } from 'date-fns';
import 'chartjs-adapter-date-fns';

interface ZfsEntry {
  id: number;
  type: string;
  values: string;
  insertedtime: string;
}

interface ZfsData {
  [key: string]: ZfsEntry[];
}

interface Props {
  data: ZfsData;
}

const ZfsGraph: React.FC<Props> = ({ data }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"line"> | null>(null);
  const [selectedArray, setSelectedArray] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const resizeListener = () => {
      setIsSmallScreen(window.innerWidth <= 600); // Adjust this threshold as needed
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  useEffect(() => {
    if (data && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        const chartConfig: ChartConfiguration<"line"> = {
          type: 'line',
          data: {
            datasets: getDatasets()
          },
          options: {
            transitions: {
              hide: {
                animations: {
                  x: {
                    to: 0
                  },
                  y: {
                    to: 0
                  }
                }
              }
            },
            animation: {
              duration: 0 // Disable initial animation
            },
            responsive: true,
            maintainAspectRatio:true,
            scales: {
              x: {
                type: 'time',
                grid: {
                  lineWidth: 1,
                  color: 'black'
                },
                time: {
                  unit: 'minute', // Displaying time by minute
                  displayFormats: {
                    minute: 'MMM dd, yyyy h:mm a' // Format including date and time
                  }
                },
                title: {
                  display: true,
                  text: 'Time'
                }
              },
              y: {
                grid: {
                  lineWidth: 1,
                  color: 'black'
                },
                title: {
                  display: true,
                  text: 'Value'
                }
              }
            },
            plugins: {
              legend: {
                display: shouldDisplayLegend(),
                position: 'bottom',
                maxHeight: 500,
                labels: {
                  font: {
                    size: 8,
                  },
                  boxHeight: 1,
                  color: 'black'
                }
              }
            }
          }
        };

        chartInstance.current = new Chart(ctx, chartConfig);
      }
    }
  });

  const getDatasets:any = () => {
    if (!selectedArray || selectedArray === 'All') {
      return Object.keys(data).map(array => ({
        label: array,
        data: (data[array] || []).map((entry: any) => ({
          x: new Date(entry.insertedtime),
          y: parseFloat(entry.values)
        })),
        fill: false
      }));
    } else {
      return [{
        label: selectedArray,
        data: (data[selectedArray] || []).map((entry: any) => ({
          x: new Date(entry.insertedtime),
          y: parseFloat(entry.values)
        })),
        fill: false
      }];
    }
  };

  const handleArraySelect = (array: string) => {
    setSelectedArray(array);
  };

  const shouldDisplayLegend = () => {
    return !isSmallScreen || (isSmallScreen && selectedArray !== 'All');
  };

  return (
    // <div>
    //   <canvas ref={chartContainer} className='w-36 h-36'/>
    //   <div>
    //     <select className="text-xs font-bold" value={selectedArray || ''} onChange={(e) => handleArraySelect(e.target.value)}>
    //       <option value="">Select an array</option>
    //       <option value="All">All</option>
    //       {Object.keys(data).map(array => (
    //         <option key={array} value={array}>
    //           {array}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    // </div>
    <div className="w-[555px] h-[400px]"> {/* Set desired height and width here */}
      <canvas ref={chartContainer} className="w-full h-full" />
      <div className='mt-8'>
        <select className="text-xs font-bold" value={selectedArray || ''} onChange={(e) => handleArraySelect(e.target.value)}>
          <option value="">Select an array</option>
          <option value="All">All</option>
          {Object.keys(data).map(array => (
            <option key={array} value={array}>
              {array}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ZfsGraph;



// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';

// interface LineGraphProps {
//   data: {
//     [key: string]: number[];
//   };
// }

// const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart | null>(null);
//   const [selectedArray, setSelectedArray] = useState<string | null>(null);

//   const generateRandomColor = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     return '#' + randomColor;
//   };

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');
//       if (ctx) {
//         if (chartInstance.current) {
//           chartInstance.current.destroy();
//         }
//         chartInstance.current = new Chart(ctx, {
//           type: 'line',
//           data: {
//             labels: Object.values(data).length > 0 ? Array.from({ length: Object.values(data)[0].length }, (_, i) => (i + 1).toString()) : [],
//             datasets: Object.entries(data).map(([key, lineData], index) => ({
//               label: key,
//               data: lineData,
//               backgroundColor: `rgba(0,0,0,0)`,
//               borderColor: generateRandomColor(),
//               borderWidth: 2,
//               hidden: selectedArray !== null && key !== selectedArray // Hide if selectedArray is not null and doesn't match current key
//             }))
//           },
//           options: {
//             scales: {
//               y: {
//                 beginAtZero: true,
//                 grid: {
//                   lineWidth: 1 ,// Increase the width of the grid lines for the y-axis
//                   color: 'black'
//                 }
//               },
//               x: {
//                 grid: {
//                   lineWidth: 1, // Increase the width of the grid lines for the x-axis
//                   color: 'black'
//                 }
//               }
//             },
//             plugins: {
//               legend: {
//                 display: selectedArray === null || selectedArray === '', // Show legend if "All" is selected or nothing is selected
//                 position: 'bottom',
//                 maxHeight: 500,
//                 labels: {
//                   font: {
//                     size: 8,
//                   },
//                   boxHeight: 1,
//                   color: 'black'
//                 }
//               }
//             }

//           }
//         });
//       }
//     }

//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, [data, selectedArray]);

//   const handleSelectArray = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedArray(event.target.value === '' ? null : event.target.value);
//     // Set selectedArray to null if '' is selected
//   };

//   return (
//     <div className="w-full">
//       <div className="max-w-screen-lg mx-auto">
//         <div className="w-full">
//           <canvas ref={chartRef} className="w-full h-auto" style={{ maxWidth: '100%' }} />
//         </div>
//         <div style={{ marginTop: '50px' }}>
//           <label htmlFor="arraySelect" className='text-sm text-black-700 font-bold'>Select Graph:</label>
//           <select id="arraySelect" onChange={handleSelectArray} value={selectedArray || ''} className="text-black-700 text-sm">
//             <option value="" className="text-black-700 text-sm">All</option>
//             {Object.keys(data).map((key) => (
//               <option key={key} value={key} className="text-black-700 text-sm">
//                 {key}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LineGraph;
