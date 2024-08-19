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

        const statuses = newData.map((entry) => parseFloat(entry.status)); // Use parseFloat

        if (!chartInstance.current) {
          // Create new chart instance if it doesn't exist
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  data: statuses,
                  borderColor: "#292D30",
                  backgroundColor: "#9DA0A2", // Ensure background color is rgba for transparency
                  fill: true,
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
          const newStatus = parseFloat(latestData.status); // Use parseFloat

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
