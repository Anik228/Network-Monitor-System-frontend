import React from 'react';
import PieChart from '@/components/piegraph/piegraph';

const Piegraph = () => {
  const pieChartData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    values: [10, 20, 15, 25, 30]
  };

  return (
    <div>
      <PieChart data={pieChartData} />
    </div>
  );
};

export default Piegraph;