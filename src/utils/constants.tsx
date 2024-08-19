// export const BASE_URL = "http://45.114.85.18:6060/api/v1/";
export const BASE_URL = "http://120.50.7.102:8005/api/v1/";
// export const BASE_URL = "http://192.168.8.190/api/v1/";
export const BASE_URL2 = "https://api.healthplus.life";
export const Endpoint = {
  login: `${BASE_URL}auth/user/login`,
  getEmployee: `${BASE_URL}admin/get-admin-list`,
  getDocumentType: `${BASE_URL}e-archiving/getRecordTypes`,
  getUserFilesSummary: `${BASE_URL}e-archiving/getFilesSummary`,
  getUserFilesSummaryById: `${BASE_URL}e-archiving/getUserFilesSummary/`,
  adminList: `${BASE_URL}admin/get-admin-list`,
  workFlowtypeName: `${BASE_URL}e-letter/get-workflow-types`,
  workFlowList: `${BASE_URL}e-letter/get-workflows`,
  createWorkFlowList: `${BASE_URL}e-letter/create-workflow`,
  createLetter: `${BASE_URL}e-letter/create-letter`,
  getLetterList: `${BASE_URL}e-letter/get-letters/`,
  getSubmitEmailLetter: `${BASE_URL}e-letter/get-submit-email-letter/`,
  getTemplateList: `${BASE_URL}e-letter/get-letter-templates`,
  fileUpload: `${BASE_URL}e-archiving/file-upload`,
  getUserDocumentSingle: `${BASE_URL}e-archiving/getFileSummaryByRecordType/`,
  deleteSingleRecord: `${BASE_URL}e-archiving/deleteSingleRecord/`,
  approveEletter: `${BASE_URL}e-letter/approve-mail/`,
  rejectEletter: `${BASE_URL}e-letter/reject-mail/`,
  getDocumentsReport: `${BASE_URL}e-archiving/getFilesSummary`,
  getLettersReport: `${BASE_URL}e-letter/get-submit-email-letter`,
};
