// import axios from 'axios';
// import express, { Request, Response, NextFunction } from 'express';

// import {baseUrl_test,baseUrl_live,jwtSecret,apiUsername,apiPassword, clientId_test, apiKey_test, mode_test} from "../config/vars";
// import { IConsumerMatchReq, IErrorResponse, IConsumerMatchRes, ICommercialMatchReq, ICommercialMatchRes,  ILogInReq, ILogInRes } from '../models/interfaces';
// import { commercialMatchACNSchema, commercialMatchBNSchema, commercialMatctBRNSchema, consumerMatchIdSchema, consumerMatchN_DOBSchema,logInSchema,options } from '../util/utils';
// const baseUrl=baseUrl_test;
// // const baseUrl=baseUrl_live;
// const inputsData = {clientId_test, mode_test, apiKey_test}
// const  clientId = clientId_test
// const mode = mode_test
// const apiKey = apiKey_test


// export async function logIn(data: ILogInReq){
// try {

//   // if(data.clientId || data.apiKey || data.mode){
//   // const { error, value } = logInSchema.validate(inputsData);
//   // if (error) {
//   //   console.error('Validation Error:', error.details);
       
//   //      return  {
//   //        status: 400,
//   //        message: error.message,
//   //      };
//   //    }


  
//      const loginDetails = await axios.post(`${baseUrl}/login`,{
//       clientId :clientId,
//       apiKey:apiKey,
//       mode :mode
//      },{
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   // console.log(loginDetails)
//   console.log("love")

//   const token = loginDetails
//   return token
//   // return res.status(200).json(loginDetails);
// // }

 

// } catch (error: any) {
//   return {
//     status: 500,
//     error: error.message,
//     message: 'Internal Server Error',
//   };

// }
// }

// export async function consumerMatch(data: IConsumerMatchReq): Promise<IConsumerMatchRes> {
//   try {
//     const loginResponse = await axios.post(`${baseUrl}/login`, {
//       username: apiUsername,
//       password: apiPassword,
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const loginResult = loginResponse.data;
//     let reqBody: any;

//     if (data.Identification) {
//       const validateData = consumerMatchIdSchema.validate(data, options);
//       if (validateData.error) {
//         return {
//           status: 400,
//           error: validateData.error.message,
//         };
//       }

//       reqBody = {
//         DataTicket: loginResult[0].DataTicket,
//         EnquiryReason: 'Reviewing of existing credit facility',
//         Identification: data.Identification,
//         ProductID: data.ProductID || '45',
//       };
//     } else if (data.ConsumerName && data.DateOfBirth && data.Accountno) {
//       const validateData = consumerMatchN_DOBSchema.validate(data, options);
//       if (validateData.error) {
//         return {
//           status: 400,
//           error: validateData.error.message,
//         };
//       }

//       reqBody = {
//         DataTicket: loginResult[0].DataTicket,
//         EnquiryReason: 'Reviewing of existing credit facility',
//         ConsumerName: data.ConsumerName,
//         DateOfBirth: data.DateOfBirth,
//         Accountno: data.Accountno,
//         ProductID: '45',
//       };
//     } else {
//       return {
//         status: 400,
//         error: 'Invalid request',
//       };
//     }

//     const matchRes = await axios.post(`${baseUrl}/ConnectConsumerMatch`, reqBody, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const matchResult = matchRes.data;

//     return {
//       matchResult,
//       loginResult,
//     };
//   } catch (error: any) {
//     return {
//       status: 500,
//       error: error.message,
//       message: 'Internal Server Error',
//     };
//   }
// }


// export async function commercialMatch(data : ICommercialMatchReq): Promise<ICommercialMatchRes>{

// try {
//   const loginResponse = await axios.post(`${baseUrl}/login`, {
//     username: apiUsername,
//     password: apiPassword,
    
//   }, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const loginResult = loginResponse.data;
 
//   let reqBody: any;


//   if(data.BusinessName){
//     const validateData = commercialMatchBNSchema.validate(data, options);
//     if (validateData.error) {
//       return {
//         status: 400,
//         error: validateData.error.message,
//       };
     
//     } 
//     reqBody = {
//       DataTicket:loginResult[0].DataTicket,
//       EnquiryReason: 'Reviewing of existing credit facility',
//       BusinessName: data.BusinessName,
//       ProductID: '47'
//     };
//   }
//     else if (data.BusinessRegistrationNumber) {
//       const validateData = commercialMatctBRNSchema.validate(data, options);
//       if (validateData.error) {
//         return {
//           status: 400,
//           error: validateData.error.message,
//         };
//       }
//       reqBody = {
//         DataTicket:loginResult[0].DataTicket,
//         EnquiryReason: 'Reviewing of existing credit facility',
//         BusinessRegistrationNumber: data.BusinessRegistrationNumber,
//         ProductID: '47'
//       };
//   }
//   else if (data.AccountNumber) {
//     const validateData = commercialMatchACNSchema.validate(data, options);
//     if (validateData.error) {
//       return {
//         status: 400,
//         error: validateData.error.message,
//       };
//     }
//     reqBody = {
//       DataTicket:loginResult[0].DataTicket,
//       EnquiryReason: 'Reviewing of existing credit facility',
//       BusinessRegistrationNumber: data.AccountNumber,
//       ProductID: '47'
//     };
// }else {
//   return {
//     status: 400,
//     error: 'Invalid request',
//   };
// }
// const matchRes = await axios.post(`${baseUrl}/ConnectCommercialMatch`, reqBody, {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const matchResult = matchRes.data;


// return {
//   matchResult,
//   loginResult,
// };



// } catch (error:any) {
//   return {
//     status: 500,
//     error: error.message,
//     message: 'Internal Server Error',
//   };
// }
// }

