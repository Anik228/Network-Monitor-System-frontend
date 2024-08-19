export interface WorkflowDataType {
  data?: (WorkDataEntity)[] | null;
  isArray: boolean;
  path: string;
  duration: string;
  method: string;
}
export interface WorkDataEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  name: string;
  admin_ids: string;
}
