import React from "react";

const WorkflowConfig = ({ color }: any) => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z"
      stroke={color ? color : "#667085"}
      strokeWidth="1.5"
    />
    <path
      d="M19 8.5C19 9.88071 17.8807 11 16.5 11C15.1193 11 14 9.88071 14 8.5C14 7.11929 15.1193 6 16.5 6C17.8807 6 19 7.11929 19 8.5Z"
      stroke={color ? color : "#667085"}
      strokeWidth="1.5"
    />
    <path
      d="M6 13.5C6 14.8807 4.88071 16 3.5 16C2.11929 16 1 14.8807 1 13.5C1 12.1193 2.11929 11 3.5 11C4.88071 11 6 12.1193 6 13.5Z"
      stroke={color ? color : "#667085"}
      strokeWidth="1.5"
    />
    <path
      d="M6 3.5C6 4.88071 4.88071 6 3.5 6C2.11929 6 1 4.88071 1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5Z"
      stroke={color ? color : "#667085"}
      strokeWidth="1.5"
    />
    <path
      d="M6 3.5L13.5 8.5L6.5 13.5L14 18.5"
      stroke={color ? color : "#667085"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WorkflowConfig;
