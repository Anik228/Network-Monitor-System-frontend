export interface Ups {
    upshistory?: UpshistoryEntity | null;
    
  }
  export interface UpshistoryEntity {
    status: string;
    time: string;
    label: string;
  }
  