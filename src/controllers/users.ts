import { NextFunction, Request, Response } from "express";
import axios from "axios";
import { bvnSchema, options } from "../util/utils";
import { bvnSubmit } from "../middleware/auth";

import {  test_username , test_password} from "../config/vars"

 

const password = test_password
  const username = test_username


export const BasicPremiumReport = async (req: Request, res: Response, next: NextFunction) => {
  const  {bvn} =<bvnSubmit> req.body


 const bvnValidation = bvnSchema.validate(
    req.body,
    options
);

if (bvnValidation.error) {
    return res
        .status(400)
        .json(bvnValidation.error.details[0].message);
}

console.log("data recieved",req.body)
const data = JSON.stringify({
  "Request": "{'@REQUEST_ID': '1','REQUEST_PARAMETERS': {   'REPORT_PARAMETERS': {      '@REPORT_ID': '101',      '@SUBJECT_TYPE': '1',      '@RESPONSE_TYPE': '5'   },   'INQUIRY_REASON': {      '@CODE': '1'   },   'APPLICATION': {      '@PRODUCT': '017',      '@NUMBER': '232',      '@AMOUNT': '15000',      '@CURRENCY': 'NGN'   }},'SEARCH_PARAMETERS': {   '@SEARCH-TYPE': '4',   'BVN_NO': '"+ bvn +"' }}",
  "UserName": `${username}`,
  "Password": `${password}`
});



  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://webserver.creditreferencenigeria.net/JsonLiveRequest/JsonService.svc/CIRRequest/ProcessRequestJson',
      headers: { 
        'Content-Type': 'application/json', 
       
      },
      data : data
    };
   

    const resp = await (await axios(config))?.data;
    console.log("Response", resp);
    return res.status(200).json(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ 
      message: "network errror",
    
     })
  }

}

export const BasicStandardReport = async (req: Request, res: Response, next: NextFunction) => {
  const  {bvn} =<bvnSubmit> req.body
  

 const bvnValidation = bvnSchema.validate(
    req.body,
    options
);

if (bvnValidation.error) {
    return res
        .status(400)
        .json(bvnValidation.error.details[0].message);
}

console.log("data recieved",req.body)
const data = JSON.stringify({
  "Request": "{'@REQUEST_ID': '1','REQUEST_PARAMETERS': {   'REPORT_PARAMETERS': {      '@REPORT_ID': '6417',      '@SUBJECT_TYPE': '1',      '@RESPONSE_TYPE': '5'   },   'INQUIRY_REASON': {      '@CODE': '1'   },   'APPLICATION': {      '@PRODUCT': '017',      '@NUMBER': '232',      '@AMOUNT': '15000',      '@CURRENCY': 'NGN'   }},'SEARCH_PARAMETERS': {   '@SEARCH-TYPE': '4',   'BVN_NO': '"+ bvn +"' }}",
  "UserName": `${username}`,
  "Password": `${password}`
});



  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://webserver.creditreferencenigeria.net/JsonLiveRequest/JsonService.svc/CIRRequest/ProcessRequestJson',
      headers: { 
        'Content-Type': 'application/json', 
       
      },
      data : data
    };
   

    const resp = await (await axios(config))?.data;
    console.log("Response", resp);
    return res.status(200).json(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ 
      message: "network errror",
    
     })
  }

}

export const ClassicStandardReport = async (req: Request, res: Response, next: NextFunction) => {
  const  {bvn} =<bvnSubmit> req.body

 const bvnValidation = bvnSchema.validate(
    req.body,
    options
);

if (bvnValidation.error) {
    return res
        .status(400)
        .json(bvnValidation.error.details[0].message);
}

console.log("data recieved",req.body)
const data = JSON.stringify({
  "Request": "{'@REQUEST_ID': '1','REQUEST_PARAMETERS': {   'REPORT_PARAMETERS': {      '@REPORT_ID': '2',      '@SUBJECT_TYPE': '1',      '@RESPONSE_TYPE': '5'   },   'INQUIRY_REASON': {      '@CODE': '1'   },   'APPLICATION': {      '@PRODUCT': '017',      '@NUMBER': '232',      '@AMOUNT': '15000',      '@CURRENCY': 'NGN'   }},'SEARCH_PARAMETERS': {   '@SEARCH-TYPE': '4',   'BVN_NO': '"+ bvn +"' }}",
  "UserName": `${username}`,
  "Password": `${password}`
});



  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://webserver.creditreferencenigeria.net/JsonLiveRequest/JsonService.svc/CIRRequest/ProcessRequestJson',
      headers: { 
        'Content-Type': 'application/json', 
       
      },
      data : data
    };
   

    const resp = await (await axios(config))?.data;
    console.log("Response", resp);
    return res.status(200).json(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ 
      message: "network errror",
    
     })
  }

}

export const CompactPremiumReport = async (req: Request, res: Response, next: NextFunction) => {
  const  {bvn} =<bvnSubmit> req.body

 const bvnValidation = bvnSchema.validate(
    req.body,
    options
);

if (bvnValidation.error) {
    return res
        .status(400)
        .json(bvnValidation.error.details[0].message);
}

console.log("data recieved",req.body)
const data = JSON.stringify({
  "Request": "{'@REQUEST_ID': '1','REQUEST_PARAMETERS': {   'REPORT_PARAMETERS': {      '@REPORT_ID': '103',      '@SUBJECT_TYPE': '1',      '@RESPONSE_TYPE': '5'   },   'INQUIRY_REASON': {      '@CODE': '1'   },   'APPLICATION': {      '@PRODUCT': '017',      '@NUMBER': '232',      '@AMOUNT': '15000',      '@CURRENCY': 'NGN'   }},'SEARCH_PARAMETERS': {   '@SEARCH-TYPE': '4',   'BVN_NO': '"+ bvn +"' }}",
  "UserName": `${username}`,
  "Password": `${password}`
});



  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://webserver.creditreferencenigeria.net/JsonLiveRequest/JsonService.svc/CIRRequest/ProcessRequestJson',
      headers: { 
        'Content-Type': 'application/json', 
       
      },
      data : data
    };
   

    const resp = await (await axios(config))?.data;
    console.log("Response", resp);
    return res.status(200).json(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ 
      message: "network errror",
    
     })
  }

}

export const MicroStandardReport = async (req: Request, res: Response, next: NextFunction) => {
  const  {bvn} =<bvnSubmit> req.body

 const bvnValidation = bvnSchema.validate(
    req.body,
    options
);

if (bvnValidation.error) {
    return res
        .status(400)
        .json(bvnValidation.error.details[0].message);
}

console.log("data recieved",req.body)
const data = JSON.stringify({
  "Request": "{'@REQUEST_ID': '1','REQUEST_PARAMETERS': {   'REPORT_PARAMETERS': {      '@REPORT_ID': '7462',      '@SUBJECT_TYPE': '1',      '@RESPONSE_TYPE': '5'   },   'INQUIRY_REASON': {      '@CODE': '1'   },   'APPLICATION': {      '@PRODUCT': '017',      '@NUMBER': '232',      '@AMOUNT': '15000',      '@CURRENCY': 'NGN'   }},'SEARCH_PARAMETERS': {   '@SEARCH-TYPE': '4',   'BVN_NO': '"+ bvn +"' }}",
  "UserName": `${username}`,
  "Password": `${password}`
});



  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://webserver.creditreferencenigeria.net/JsonLiveRequest/JsonService.svc/CIRRequest/ProcessRequestJson',
      headers: { 
        'Content-Type': 'application/json', 
       
      },
      data : data
    };
   

    const resp = await (await axios(config))?.data;
    console.log("Response", resp);
    return res.status(200).json(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ 
      message: "network errror",
    
     })
  }

}
export const NanoStandardReport = async (req: Request, res: Response, next: NextFunction) => {
  const  {bvn} =<bvnSubmit> req.body

 const bvnValidation = bvnSchema.validate(
    req.body,
    options
);

if (bvnValidation.error) {
    return res
        .status(400)
        .json(bvnValidation.error.details[0].message);
}

console.log("data recieved",req.body)
const data = JSON.stringify({
  "Request": "{'@REQUEST_ID': '1','REQUEST_PARAMETERS': {   'REPORT_PARAMETERS': {      '@REPORT_ID': '7463',      '@SUBJECT_TYPE': '1',      '@RESPONSE_TYPE': '5'   },   'INQUIRY_REASON': {      '@CODE': '1'   },   'APPLICATION': {      '@PRODUCT': '017',      '@NUMBER': '232',      '@AMOUNT': '15000',      '@CURRENCY': 'NGN'   }},'SEARCH_PARAMETERS': {   '@SEARCH-TYPE': '4',   'BVN_NO': '"+ bvn +"' }}",
  "UserName": `${username}`,
  "Password": `${password}`
});



  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://webserver.creditreferencenigeria.net/JsonLiveRequest/JsonService.svc/CIRRequest/ProcessRequestJson',
      headers: { 
        'Content-Type': 'application/json', 
       
      },
      data : data
    };
   

    const resp = await (await axios(config))?.data;
    console.log("Response", resp);
    return res.status(200).json(resp)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ 
      message: "network errror",
    
     })
  }

}