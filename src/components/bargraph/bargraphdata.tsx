import React from 'react';
import BarGraph from '@/components/bargraph/bargraph';

const BargraphData: React.FC = () => {
  // Sample data
  const sampleData = [10, 20, 30, 40, 50, 60 ,70, 80, 90, 100];

  return (
    <div>
      
      <BarGraph data={sampleData} />
      
    </div>
  );
};

export default BargraphData;
