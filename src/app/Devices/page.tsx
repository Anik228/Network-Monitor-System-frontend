import React from 'react'
import Devices from '@/components/devices/devices'
const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E0F1FC]">
      <div className="flex-grow container mx-auto mt-5">
        <Devices />
      </div>
    </div>
  )
}

export default page;
