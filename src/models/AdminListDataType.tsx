export interface AdminList {
  data?: DataEntity[] | null;
  isArray: boolean;
  path: string;
  duration: string;
  method: string;
}

export interface DataEntity {
  id: string;
  phone: string;
  imageUrl: string;
  name: string;
  email: string;
  address: string;
  disabled: number;
  role: string;
}
