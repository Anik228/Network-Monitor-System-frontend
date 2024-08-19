


export interface temperature {
  zfs?: (temdata)[] | null;
  xfs?: (temdata)[] | null;
  vmstat?: (temdata)[] | null;
  uname?: (temdata)[] | null;
  udp_queues?: (temdata)[] | null;
  timex?: (temdata)[] | null;
  time?: (temdata)[] | null;
  thermal_zone?: (temdata)[] | null;
  textfile?: (temdata)[] | null;
  tapestats?: (temdata)[] | null;
  stat?: (temdata)[] | null;
  softnet?: (temdata)[] | null;
  sockstat?: (temdata)[] | null;
  schedstat?: (temdata)[] | null;
  rapl?: (temdata)[] | null;
  pressure?: (temdata)[] | null;
  powersupplyclass?: (temdata)[] | null;
  nvme?: (temdata)[] | null;
  nfsd?: (temdata)[] | null;
  nfs?: (temdata)[] | null;
  netstat?: (temdata)[] | null;
  netdev?: (temdata)[] | null;
  netclass?: (temdata)[] | null;
  meminfo?: (temdata)[] | null;
  mdadm?: (temdata)[] | null;
  loadavg?: (temdata)[] | null;
  ipvs?: (temdata)[] | null;
  infiniband?: (temdata)[] | null;
  hwmon?: (temdata)[] | null;
  filesystem?: (temdata)[] | null;
  filefd?: (temdata)[] | null;
  fibrechannel?: (temdata)[] | null;
  entropy?: (temdata)[] | null;
  edac?: (temdata)[] | null;
  diskstats?: (temdata)[] | null;
  cpufreq?: (temdata)[] | null;
  cpu?: (temdata)[] | null;
  conntrack?: (temdata)[] | null;
  btrfs?: (temdata)[] | null;
  bonding?: (temdata)[] | null;
  bcache?: (temdata)[] | null;
  arp?: (temdata)[] | null;
}
export interface temdata {
  id: number;
  type: string;
  values: string;
  insertedtime: string;
}
