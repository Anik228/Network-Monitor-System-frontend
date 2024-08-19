"use client";
import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface PieChartData {
  labels: string[];
  values: number[];
}

interface PieChartProps {
  data: PieChartData;
  width?: number; // Optional width
  height?: number; // Optional height
}

const PieChart: React.FC<PieChartProps> = ({ data, width = 400, height = 400 }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"pie", number[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy(); // Destroy previous instance if exists
        }
        chartInstance.current = new Chart<"pie", number[], string>(ctx, {
          type: 'pie',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Data',
              data: data.values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
              ],
            }]
          },
          options: {
            responsive: false, // Disable responsiveness
            maintainAspectRatio: false, // Disable aspect ratio
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Ensure to destroy the chart when the component unmounts
      }
    };
  }, [data, width, height]);

  return <canvas ref={chartRef} width={width} height={height} />;
};

export default PieChart;
