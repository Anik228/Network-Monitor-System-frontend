export interface LetterTemplateType {
  data?: (letterDataEntity)[] | null;
  isArray: boolean;
  path: string;
  duration: string;
  method: string;
}
export interface letterDataEntity {
  templatename: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  name: string;
  type: string;
  workflowTypeId: string;
  body: string;
  admin_ids: string;
  accept_comment_required: boolean;
  reject_comment_required: boolean;
  reject_case_step: number;
  digital_signature_required: boolean;
}
