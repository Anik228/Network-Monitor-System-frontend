import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

interface DeviceData {
  id: number;
  device_id: number;
  uptime_status: number;
  date_time: string;
}

interface Props {
  data: any;
}

const TempChart: React.FC<Props> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();
  const [stringifiedObj1, setStringifiedObj1] = useState<string>("");

  // Function to convert hex color to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  useEffect(() => {
    const stringifiedObjnew = JSON.stringify(data);

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const labels: string[] = [];
        const datasets = Object.keys(data).map((deviceName, index) => {
          const deviceData = data[deviceName];

          const deviceLabels = deviceData.map((entry: any) => {
            const date = new Date(entry.date_time);
            return date.toLocaleDateString([], {
              day: "2-digit",
              month: "short",
            }) + "\n" + date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
          });

          if (labels.length === 0) {
            labels.push(...deviceLabels);
          }

          const uptimeStatus = deviceData.map((entry: any) => entry.uptime_status);

          const colors = [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
            "#ffcc00",
          ];

          const borderColor = colors[index % colors.length];
          const backgroundColor = hexToRgba(borderColor, 0.5);

          return {
            label: deviceName,
            data: uptimeStatus,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            fill: true,
            borderWidth: 2,
          };
        });

        if (!chartInstance.current) {
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: labels,
              datasets: datasets,
            },
            options: {
              animation: {
                duration: 0,
              },
              responsive: true,
              layout: {
                padding: {
                  left: 20,
                  right: 20,
                  top: 10,
                  bottom: 10,
                },
              },
              scales: {
                x: {
                  reverse: true,
                  ticks: {
                    callback: function (value) {
                      const label = this.getLabelForValue(value as number);
                      return label.split("\n");
                    },
                    font: {
                      size: 8,
                    },
                  },
                  grid: {
                    lineWidth: 1,
                    color: "black",
                  },
                },
                y: {
                  ticks: {
                    font: {
                      size: 10, // Adjust the font size here
                    },
                  },
                  grid: {
                    lineWidth: 1,
                    color: "black",
                  },
                },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const label = context.dataset.label || '';
                      const value = context.raw;
                      return `${label}: ${value}`;
                    },
                  },
                },
              },
            },
          });
          setStringifiedObj1(stringifiedObjnew);
        } else if (stringifiedObj1 !== stringifiedObjnew) {
          setStringifiedObj1(stringifiedObjnew);

          chartInstance.current.data.labels = labels;
          chartInstance.current.data.datasets = datasets;
          chartInstance.current.update();
        }
      }
    }
  }, [data]);

  return (
    <div className="overflow-auto md:overflow-hidden lg:overflow-hidden">
      <div className="w-[1500px] h-[250px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default TempChart;
