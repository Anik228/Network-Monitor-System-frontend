import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

interface wifidata {
  id: number;
  iface: string;
  operstate: string;
  rx_bytes: number;
  rx_dropped: number;
  rx_errors: number;
  tx_bytes: number;
  tx_dropped: number;
  tx_errors: number;
  rx_sec?: number | null;
  tx_sec?: number | null;
  ms: number;
  mikro_id?: null;
  mikro_name?: null;
  disabled?: null;
  mikro_mac_address?: null;
  mikro_default_name?: null;
  mikro_type?: null;
  source_type: string;
  timestamp: string;
}

interface Props {
  data: wifidata[];
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
        const newData = [...data];
        const latestData = data[0];

        const labels = newData.map((entry) => {
          return new Date(entry.timestamp).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          });
        });

        const rxBytesInMB = newData.map((entry) => entry.rx_bytes / (1024 * 1024));
        const txBytesInMB = newData.map((entry) => entry.tx_bytes / (1024 * 1024));

        if (!chartInstance.current) {
          chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "RX Bytes (MB)",
                  data: rxBytesInMB,
                  borderColor: "#3e95cd",
                  backgroundColor: "rgba(62, 149, 205, 0.5)",
                  fill: true,
                  borderWidth: 2,
                },
                {
                  label: "TX Bytes (MB)",
                  data: txBytesInMB,
                  borderColor: "#8e5ea2",
                  backgroundColor: "rgba(142, 94, 162, 0.5)",
                  fill: true,
                  borderWidth: 2,
                },
              ],
            },
            options: {
              animation: {
                duration: 1000,
              },
              responsive: true,
              scales: {
                x: {
                  reverse: true,
                  ticks: {
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
            },
          });
          setStringifiedObj1(stringifiedObjnew);
        } else if (stringifiedObj1 !== stringifiedObjnew) {
          setStringifiedObj1(stringifiedObjnew);

          const newDataLabel = new Date(latestData.timestamp).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
          });
          const newRxBytesInMB = latestData.rx_bytes / (1024 * 1024);
          const newTxBytesInMB = latestData.tx_bytes / (1024 * 1024);

          chartInstance.current.data.labels?.unshift(newDataLabel);
          chartInstance.current.data.datasets[0].data.unshift(newRxBytesInMB);
          chartInstance.current.data.datasets[1].data.unshift(newTxBytesInMB);

          if (chartInstance.current.data.labels) {
            chartInstance.current.data.labels.pop();
          }

          if (chartInstance.current.data.datasets[0].data) {
            chartInstance.current.data.datasets[0].data.pop();
          }

          if (chartInstance.current.data.datasets[1].data) {
            chartInstance.current.data.datasets[1].data.pop();
          }

          chartInstance.current.update();
        }
      }
    }
  }, [data]);

  return (
    <div className="overflow-auto md:overflow-hidden lg:overflow-hidden">
      <div className="w-[1500px] h-[250px]"> {/* Adjusted width here */}
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default TempChart;


