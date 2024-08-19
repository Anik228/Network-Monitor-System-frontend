// src/components/tree/deviceTypeIcons.js
import { GiBrickWall } from "react-icons/gi";
import { FaNetworkWired, FaRectangleList } from "react-icons/fa6";
import { BsRouterFill } from "react-icons/bs";

// Define the mapping between deviceTypeName and the corresponding icon component
const deviceTypeIcons = {
  Router: BsRouterFill,
  Switch: FaNetworkWired,
  Firewall: GiBrickWall,
  AccessPoint: FaRectangleList,
  // Add more mappings as needed
};

export default deviceTypeIcons;
