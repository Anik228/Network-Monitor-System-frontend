import React from 'react';
import DashboardNMS from '@/components/dashboardNMS/dashboardNMS';
import Wifidata from '@/components/wifi/wifidata';
import DeviceUptimeData from '@/components/deviceUptime/deviceUptimedata';

function page() {
  return (
    <>
      <div className="flex flex-col min-h-screen container mx-auto mt-5">
        <div className="flex-grow">
          <DashboardNMS />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <Wifidata />
          </div>
          <div>
            <DeviceUptimeData />
          </div>
        </div>
      </div>
    </>
  )
}

export default page;
