"use client";
import React, { createContext, useState, useEffect } from "react";

import baseUrl from "@/components/common/common_url";

export interface Ems {
  rodentHistory?: EmsArrayType[] | null;
  waterleakageHistory?: EmsArrayType[] | null;
  Co2Release?: EmsArrayType[] | null;
  smokeHistory?: EmsArrayType[] | null;
  humidityHistory?: HumidityTempArrayType[] | null;
  tempHistory?: HumidityTempArrayType[] | null;
  upshistory?: EmsArrayType[] | null;
  acHistory?: EmsArrayType[] | null;
}

export interface EmsArrayType {
  status: string;
  time: string;
  label: string;
}

export interface HumidityTempArrayType {
  status: string;
  temp: string;
  unit: string;
  time: string;
}

export interface EmsCpu {
  emsData: Ems | null;
  cpuData: Cpu | null;
  deviceTypeData: DeviceType[] | null;
  deviceAllData: AllDevice[] | null;
  devicewithchildrenAllData: deviceWithChildren[] | null; // Corrected this line
  wifiData: wifidata[] | null;
  deviceStatusData: any;
  latestUpTimeData: any;
  deviceCountData: number | null;
}

const EmsContext = createContext<EmsCpu | null>(null);

interface EmsProviderProps {
  children: React.ReactNode;
}

export interface Cpu {
  server_name: string;
  cpu_details: CpuDetails;
  scrape_time_data: ScrapeTimeData;
  root_fs_total?: (number | null)[] | null;
  ram_used?: (number | null)[] | null;
  swap_total?: (string | null)[] | null;
  swap_used?: string;
  root_Fs_used?: string;
  cpu_cores: number;
  up_time: number;
}

export interface CpuDetails {
  user?: (number)[] | null;
  system?: (number)[] | null;
  steal?: (number)[] | null;
  softirq?: (number)[] | null;
  nice?: (number)[] | null;
  irq?: (number)[] | null;
  iowait?: (number)[] | null;
  idle?: (number)[] | null;
}

export interface ScrapeTimeData {
  [key: string]: (number)[] | null;
}

export interface DeviceType {
  id: number;
  name: string;
  type_status: number;
}
export interface AllDevice {
  id: number;
  deviceTypeId: number;
  name: string;
  parentDeviceId: number;
  parentDeviceDetails?: null;
  purchaseDate?: string | null;
  serialText: string;
  status: number;
  deviceTypeName: string;
}

export interface deviceWithChildren {
  id: number;
  deviceTypeId: number;
  name: string;
  parentDeviceId: number;
  parentDeviceDetails?: null;
  purchaseDate?: string | null;
  serialText: string;
  status: number;
  deviceTypeName: string;
  children?: (ChildrenEntity)[] | null;
}
export interface ChildrenEntity {
  id: number;
  deviceTypeId: number;
  name: string;
  parentDeviceId: number;
  parentDeviceDetails?: null;
  purchaseDate?: string | null;
  serialText: string;
  status: number;
  deviceTypeName: string;
  children?: (ChildrenEntity1)[] | null;
}
export interface ChildrenEntity1 {
  id: number;
  deviceTypeId: number;
  name: string;
  parentDeviceId: number;
  parentDeviceDetails?: null;
  purchaseDate: string;
  serialText: string;
  status: number;
  deviceTypeName: string;
  children?: null;
}

export interface wifidata {
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

export const EmsProvider: React.FC<EmsProviderProps> = ({ children }) => {
  const [emsData, setEmsData] = useState<Ems | null>(null);
  const [cpuData, setCpuData] = useState<Cpu | null>(null);
  const [deviceTypeData, setDeviceTypeData] = useState<DeviceType[] | null>(null);
  const [deviceAllData, setDeviceAllData] = useState<AllDevice[] | null>(null);
  const [devicewithchildrenAllData, setDeviceAllDatawithchildren] = useState<deviceWithChildren[] | null>(null); // Corrected this line
  const [wifiData, setWifiData] = useState<wifidata[] | null>(null); // Corrected this line
  const [deviceStatusData, setDeviceStatusData]: any = useState();
  const [latestUpTimeData, setLatestUpTimeData]: any = useState();
  const [deviceCountData, setDeviceCountData] = useState<number | null>(null);
    ;
  const fetchData = async () => {
    const currentTime = new Date();
    const currentFormattedTime = currentTime.toISOString().split('T')[0] + 'T' + currentTime.toTimeString().split(' ')[0];
    const startTime = new Date(currentTime);
    startTime.setHours(startTime.getHours() - 24);
    const formattedStartTime = startTime.toISOString().split('T')[0] + 'T' + startTime.toTimeString().split(' ')[0];
    const url = `${baseUrl}/ems/mother-api?startTime=${formattedStartTime}&endTime=${currentFormattedTime}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setEmsData(data);
    } catch (error) {
      console.error("Error fetching EMS data:", error);
    }
  };

  const fetchCpuData = async () => {
    const currentTime = new Date();
    const currentFormattedTime = currentTime.toISOString().split('T')[0] + 'T' + currentTime.toTimeString().split(' ')[0];
    const startTime = new Date(currentTime);
    startTime.setHours(startTime.getHours() - 24);
    const formattedStartTime = startTime.toISOString().split('T')[0] + 'T' + startTime.toTimeString().split(' ')[0];
    const url = `${baseUrl}/ems/central-server-api?startTime=${formattedStartTime}&endTime=${currentFormattedTime}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCpuData(data);
    } catch (error) {
      console.error("Error fetching CPU data:", error);
    }
  };

  const fetchDeviceData = async () => {
    // const currentTime = new Date();
    // const currentFormattedTime = currentTime.toISOString().split('T')[0] + 'T' + currentTime.toTimeString().split(' ')[0];
    // const startTime = new Date(currentTime);
    // startTime.setHours(startTime.getHours() - 24);
    // const formattedStartTime = startTime.toISOString().split('T')[0] + 'T' + startTime.toTimeString().split(' ')[0];
    // const urldeviceType = `${baseUrl}/device/all-device-types`;
    // const urlalldevice = `${baseUrl}/device/get-device-with-type`;
    // const urldeviceChildren=`${baseUrl}/device/get-device-with-children`;

    // const urlwifi=`${baseUrl}/mikrotik/network-stats?startTime=${formattedStartTime}&endTime=${currentFormattedTime}&sourceType=Wi-Fi`

    const currentTime = new Date();
    const currentFormattedTime = currentTime.toISOString().split('T')[0] + 'T' + currentTime.toTimeString().split(' ')[0];

    const startTime = new Date(currentTime);
    startTime.setMinutes(startTime.getMinutes() - 10);
    const formattedStartTime = startTime.toISOString().split('T')[0] + 'T' + startTime.toTimeString().split(' ')[0];

    const urldeviceType = `${baseUrl}/device/all-device-types`;
    const urlalldevice = `${baseUrl}/device/get-device-with-type`;
    const urldeviceChildren = `${baseUrl}/device/get-device-with-children`;
    const urlLatestUptime = `${baseUrl}/device/latest-uptime-status`;
    const urlDeviceCount = `${baseUrl}/device/total-device-count`;
    const urlwifi = `${baseUrl}/mikrotik/network-stats?startDate=${formattedStartTime}&endDate=${currentFormattedTime}&sourceType=Wi-Fi`;
    const urldevicestatus = `${baseUrl}/device/device-status-timewise?startDate=${formattedStartTime}&endDate=${currentFormattedTime}&sourceType=Wi-Fi`;

    // console.log('formattedStartTime:', formattedStartTime);
    // console.log('currentFormattedTime:', currentFormattedTime);
    // console.log('urlwifi:', urlwifi);
    // console.log('urldevicestatus siam:', urldevicestatus);

    try {
      const response = await fetch(urldeviceType);
      const data = await response.json();
      const responsealldevice = await fetch(urlalldevice);
      const datalldevice = await responsealldevice.json();

      const responsedevicewithchildreen = await fetch(urldeviceChildren); // Corrected this line
      const datadevicewithchildren = await responsedevicewithchildreen.json(); // Corrected this line

      const responnsewifi = await fetch(urlwifi); // Corrected this line
      const datawifi = await responnsewifi.json(); // Corrected this line

      const responsedevicestatus = await fetch(urldevicestatus);
      const datadevicestatus = await responsedevicestatus.json();

      const responseLatestUptime = await fetch(urlLatestUptime);
      const dataLatestUptime = await responseLatestUptime.json();

      const responseDeviceCount = await fetch(urlDeviceCount);
      const dataDeviceCount = await responseDeviceCount.json();

      setDeviceAllDatawithchildren(datadevicewithchildren);
      setWifiData(datawifi);
      setDeviceStatusData(datadevicestatus);
      setLatestUpTimeData(dataLatestUptime);
      setDeviceTypeData(data);
      setDeviceCountData(dataDeviceCount);
      setDeviceAllData(datalldevice);

    } catch (error) {
      console.error("Error fetching Device Type:", error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchCpuData();
    fetchDeviceData();
    const interval = setInterval(() => {
      fetchData();
      fetchCpuData();
      fetchDeviceData();
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <EmsContext.Provider value={{ emsData, cpuData, deviceTypeData, deviceAllData, devicewithchildrenAllData, wifiData, deviceStatusData, latestUpTimeData, deviceCountData }}>
      {children}
    </EmsContext.Provider>
  );
};

export default EmsContext;
