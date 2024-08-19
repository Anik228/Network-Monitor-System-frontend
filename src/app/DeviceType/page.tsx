import React from 'react';
import Devicetype from '@/components/devicetype/devicetype';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E0F1FC]">
      <div className="flex-grow container mx-auto mt-5">
        <Devicetype />
      </div>
    </div>
  );
}

export default Page;
