export interface ILogInReq{
  clientId: string;
  apiKey: string;
  mode: string

}

interface FxRateResponse {
  status: number;
  data: {
    success: boolean;
    rate: number;
    vfx_token: string;
    expiry: string;
   
  };
  // headers: Record<string, string>;
}

export interface ILogInRes{
  success: string;
  token: string
}

export interface FxRateApiResponse {
  vfx_token: string; 
}

export interface IConsumerMatchReq {
  Identification: string ;
    ConsumerName: string;
    DateOfBirth?: string;
    Accountno?: string;
    EnquiryReason: string;
    ProductID?:string
    
  }
  



  export interface ICommercialMatchReq {
 
    EnquiryReason?: string,
    BusinessName?:string;
    BusinessRegistrationNumber:string;
    AccountNumber?:string;
    ProductID?:string
  }
  

  
export interface IErrorResponse {
    status: number;
    error: string;
    message?: string;
  }
  export interface IConsumerMatchRes {
    matchResult?: any;
    loginResult?: any;
    status?: number;
    error?: string;
    message?: string;
  }
  
  export interface ICommercialMatchRes {
    matchResult?: any;
    loginResult?: any;
    status?: number;
    error?: string;
    message?: string;
  }
  