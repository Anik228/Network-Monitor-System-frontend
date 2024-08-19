import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";


interface TemperatureData {
  status: string;
  temp: string;
  unit: string;
  time: string;
}

interface Props {
  data: TemperatureData[];
}

const TempChart: React.FC<Props> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();
  const [stringifiedObj1, setStringifiedObj1] = useState<string>("");

  useEffect(() => {
    let stringifiedObjnew = JSON.stringify(data);

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const newData = [...data]; // Make a copy of the data array
        const latestData = data[0]; // Get the latest data entry

        console.log("latest data array", latestData);

        console.log("new data ", data);

        const labels = newData.map((entry) => {
          return new Date(entry.time).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          });
        });

        const temperatures = newData.map((entry) => parseFloat(entry.temp));

        if (!chartInstance.current) {
          // Create new chart instance if it doesn't exist
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Temperature (°C)",
                  data: temperatures,
                  borderColor: "#0CA2D3",
                  fill: true,
                  backgroundColor: '#95DFF7',
                  borderWidth: 1,
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

          console.log("first if");
          setStringifiedObj1(stringifiedObjnew);
        } else if (stringifiedObj1 !== stringifiedObjnew) {
          // Add new time position dataoldData
          // Get the timestamp of the oldest data point
          console.log("first if preob##", stringifiedObj1);
          console.log("first if newob##", stringifiedObjnew);
          setStringifiedObj1(stringifiedObjnew);

          const oldestTimestamp = new Date(newData[0].time).getTime();

          // Calculate the timestamp for the label of the oldest data point
          const displayWindowDuration = 24 * 60 * 60 * 1000; // Assuming a display window of 24 hours
          const oldestDataLabelTimestamp =
            oldestTimestamp - displayWindowDuration;

          // Convert the timestamp into a formatted string
          const oldDataLabel = new Date(
            oldestDataLabelTimestamp
          ).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          });

          const newDataLabel = new Date(latestData.time).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          });
          const newTemperature = parseFloat(latestData.temp);

          chartInstance.current.data.labels?.unshift(newDataLabel);
          chartInstance.current.data.datasets[0].data.unshift(newTemperature);

          // // Remove the oldest data point
          // chartInstance.current.data.labels.pop();
          // chartInstance.current.data.datasets[0].data.pop();

          // Remove the oldest data point
          if (chartInstance.current?.data?.labels) {
            chartInstance.current.data.labels.pop();
          }

          if (chartInstance.current?.data?.datasets[0]?.data) {
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

// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// interface TemperatureData {
//   status: string;
//   temp: string;
//   unit: string;
//   time: string;
// }

// interface Props {
//   data: TemperatureData[];
// }

// const TempChart: React.FC<Props> = ({ data }) => {
//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart>();
//   console.log("new temp data ",data);
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
//         const temperatures = data.map((entry) => parseFloat(entry.temp));

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
//                 label: "Temperature (°C)",
//                 data: temperatures,
//                 borderColor: "#0875C6",
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
//                 reverse: true, // Reverse x-axis
//                 ticks: {
//                   font: {
//                     size: 10,
//                   },
//                 },
//                 grid: {
//                   lineWidth: 1,
//                   color: "black",
//                 },
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
//     <div className="overflow-auto md:orverflow-hidden lg:overflow-hidden ">
//       <div className="w-[555px] h-[400px]">
//         <canvas ref={chartRef}></canvas>
//       </div>
//     </div>

//   );
// };

// export default TempChart;
