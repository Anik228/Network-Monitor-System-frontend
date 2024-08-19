import React from 'react';
import Gauge from '@/components/gaugegraph/gauge';

interface Props {
  usage: number;
  color?: string; // Adding color prop
  name?: string;
}

const GaugeData: React.FC<Props> = ({ usage, color , name}) => {
  return (
    <div className=''>
      <Gauge value={usage} color={color} name={name}/> {/* Passing color prop to Gauge component */}
    </div>
  );
};

export default GaugeData;
