// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// interface TemperatureData {
//   status: string;
//   time: string;
//   label: string;
// }

// interface Props {
//   data: TemperatureData[];
// }

// const CarbonChart: React.FC<Props> = ({ data }) => {
//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart>();

//   useEffect(() => {
//     if (chartRef && chartRef.current) {
//       const ctx = chartRef.current.getContext("2d");
//       if (ctx) {
//         const labels = data.map((entry) => {
//           // Extracting only the date and time portion from the timestamp
//           return new Date(entry.time).toLocaleString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//             day: "2-digit",
//             month: "short",
//           });
//         });
//         const statuses = data.map((entry) => parseInt(entry.status));

//         // Destroy existing chart if it exists
//         if (chartInstance.current) {
//           chartInstance.current.destroy();
//         }

//         chartInstance.current = new Chart(ctx, {
//           type: "line",
//           data: {
//             labels: labels,
//             datasets: [
//               {
//                 label: "0 - No || 1 - Yes",
//                 data: statuses,
//                 borderColor: "#2205B5",
//                 borderWidth: 2,
//                 fill: false,
//               },
//             ],
//           },
//           options: {
//             animation: {
//               duration: 0, // Disable initial animation
//             },
//             responsive: true,
//             scales: {
//               x: {
//                 ticks: {
//                   font: {
//                     size: 10,
//                   },
//                 },
//                 grid: {
//                   lineWidth: 1,
//                   color: "black",
//                 },
//                 reverse: true, // Reverses the x-axis
//               },
//               y: {
//                 grid: {
//                   lineWidth: 1,
//                   color: "black",
//                 },
//               },
//             },
//           },
//         });
//       }
//     }

//     return () => {
//       // Cleanup function to destroy the chart when the component unmounts
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, [data]);

//   return (
//     <div className="overflow-auto md:orverflow-hidden lg:overflow-hidden">
//       <div className="w-[555px] h-[400px]">
//         <canvas ref={chartRef}></canvas>
//       </div>
//     </div>
//   );
// };

// export default CarbonChart;

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

interface TemperatureData {
  status: string;
  time: string;
  label: string;
}

interface Props {
  data: TemperatureData[];
}

const TempChart: React.FC<Props> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();
  const [stringifiedObj1, setStringifiedObj1] = useState<string>("");

  useEffect(() => {
    const stringifiedObjnew = JSON.stringify(data);

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const newData = [...data]; // Make a copy of the data array
        const latestData = data[0]; // Get the latest data entry

        const labels = newData.map((entry) => {
          return new Date(entry.time).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          });
        });

        const statuses = newData.map((entry) => parseInt(entry.status));

        if (!chartInstance.current) {
          // Create new chart instance if it doesn't exist
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "0 - No || 1 - Yes",
                  data: statuses,
                  borderColor: "#2205B5",
                  fill: true,
                  backgroundColor: '#95DFF7',
                  borderWidth: 2,
                },
              ],
            },
            options: {
              animation: {
                duration: 1000, // Set animation duration
              },
              responsive: true,
              scales: {
                x: {
                  reverse: true, // Set reverse to true to move from right to left
                  ticks: {
                    font: {
                      size: 10,
                    },
                  },
                  grid: {
                    lineWidth: 1,
                    color: "black",
                  },
                },
                y: {
                  grid: {
                    lineWidth: 1,
                    color: "black",
                  },
                },
              },
            },
          });
          setStringifiedObj1(stringifiedObjnew);
        } else if (stringifiedObj1 !== stringifiedObjnew) {
          setStringifiedObj1(stringifiedObjnew);

          const newDataLabel = new Date(latestData.time).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          });
          const newStatus = parseInt(latestData.status);

          chartInstance.current.data.labels?.unshift(newDataLabel);
          chartInstance.current.data.datasets[0].data.unshift(newStatus);

          // Remove the oldest data point
          if (chartInstance.current.data.labels) {
            chartInstance.current.data.labels.pop();
          }

          if (chartInstance.current.data.datasets[0].data) {
            chartInstance.current.data.datasets[0].data.pop();
          }

          // Update the chart
          chartInstance.current.update();
        }
      }
    }
  }, [data]);

  return (
    <div className="overflow-auto md:overflow-hidden lg:overflow-hidden">
      <div className="w-[555px] h-[400px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default TempChart;

