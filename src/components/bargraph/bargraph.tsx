"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface BarGraphProps {
  data: number[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          // Destroy existing chart instance
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Array.from({ length: data.length }, (_, i) => (i + 1).toString()),
            datasets: [{
              label: 'Sample Data',
              data: data,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }

    return () => {
      // Cleanup: destroy the chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      {/* Render canvas only on the client-side */}
      
        <canvas ref={chartRef} />
    
    </div>
  );
};

export default BarGraph;
