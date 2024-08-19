"use client"
import React, { useEffect, useState } from 'react';
import Tree, { Device } from './tree'; // Adjust path to Tree component

import baseUrl from '../common/common_url';
import TotalDevices from '../Avtive_Inactive/totalDevices';
import TotalActive from '../Avtive_Inactive/totalActive';
import TotalInActive from '../Avtive_Inactive/totalInactive';

interface UptimeStatus {
  device_id: number;
  uptime_status: number;
}

const mergeDeviceStatus = (devices: Device[], statuses: UptimeStatus[]): Device[] => {
  return devices.map((device) => {
    const status = statuses.find((status) => status.device_id === device.id);
    const updatedDevice = {
      ...device,
      uptime_status: status ? status.uptime_status.toString() : '0'
    };

    if (updatedDevice.children && updatedDevice.children.length > 0) {
      updatedDevice.children = mergeDeviceStatus(updatedDevice.children, statuses);
    }

    return updatedDevice;
  });
};

const DashboardNMS: React.FC = () => {
  const [data, setData] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deviceRes = await fetch(`${baseUrl}/device/get-device-with-children`);
        const deviceResult: Device[] = await deviceRes.json();

        const statusRes = await fetch(`${baseUrl}/device/latest-uptime-status`);
        const statusResult: UptimeStatus[] = await statusRes.json();


        const mergedData = mergeDeviceStatus(deviceResult, statusResult);


        setData(mergedData);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='mb-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
        <div>
          <TotalDevices />
        </div>
        <div>
          <TotalActive />
        </div>
        <div>
          <TotalInActive />
        </div>
      </div>
      <div className="">
        <div className="card bg-[#E0F1FC] shadow-lg p-10">
          <div className='border-l-8 text-xl border-[#0165B9] ps-4 py-1 font-semibold bg-gradient-to-r from-[#B9EEFF] to-[#E0F1FC] w-fit'>
            <div>Current Network Structure</div>
          </div>
          <div className="flex items-center justify-center">
            <div className='mt-10'>
              <Tree data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNMS;