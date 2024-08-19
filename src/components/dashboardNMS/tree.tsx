import React from 'react';
import { BsRouterFill } from 'react-icons/bs';
import { FaNetworkWired, FaRectangleList, FaServer } from 'react-icons/fa6';
import { GiBrickWall } from 'react-icons/gi';
import styles from '../../styles/styles.module.css';

export interface Device {
  id: number;
  deviceTypeId: number;
  name: string;
  parentDeviceId: number;
  parentDeviceDetails: any; // Replace 'any' with the actual type if known
  purchaseDate: string;
  serialText: string;
  status: number;
  deviceTypeName: string;
  uptime_status: string;
  children: Device[];
}

interface Props {
  data: Device[];
}

const deviceTypeIcons: { [key: string]: React.ElementType } = {
  Router: BsRouterFill,
  Switch: FaRectangleList,
  Firewall: GiBrickWall,
  ISP: FaNetworkWired,
  Server: FaServer,
};

const TreeNode: React.FC<{ device: Device }> = ({ device }) => {
  const IconComponent = deviceTypeIcons[device.deviceTypeName] || null;
  const statusClass = device.uptime_status === '1' ? 'green' : 'red';
  const statusClassLine = device.uptime_status;

  // console.log('Rendering device:', device); // Log each device to verify it contains uptime_status

  return (
    <li className={`${styles.treeNode}`}>
      <div className={`tf-nc relative rounded-lg bg-white`}>
        <div className="flex justify-center relative">
          {IconComponent && <IconComponent className="text-4xl mb-2" />}
        </div>
        <div className="flex items-center">
          <p>{device.name}</p>
        </div>
        <span className={`${styles.statusDot} ${styles[statusClass]} absolute top-0 right-0`}></span>
      </div>
      {device.children && device.children.length > 0 && (
        <ul className={styles.treeList}>
          {device.children.map((child: Device) => (
            <TreeNode key={child.id} device={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Tree: React.FC<Props> = ({ data }) => {
  //console.log('Data passed to Tree component:', data); // Log the data passed to Tree component

  return (
    <div className="tf-tree tf-custom">
      <ul>
        {data.map((device) => (
          <TreeNode key={device.id} device={device} />
        ))}
      </ul>
    </div>
  );
};

export default Tree;