
export interface Device {
  id: number;
  deviceTypeId: number;
  name: string;
  parentDeviceId: number;
  parentDeviceDetails: any; // Replace 'any' with the actual type if known
  purchaseDate: string;
  serialText: string;
  status: number; // Change to number if this is the correct type
  deviceTypeName: string;
  uptime_status: string;
  children: Device[];
}
  export interface DevicesPageProps {
    devices: Device[];
  }
  