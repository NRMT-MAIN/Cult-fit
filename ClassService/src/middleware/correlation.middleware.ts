import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";
import { asyncLocalStorage } from "../utils/helper/req.helper";


export const attachCorrelationId = (req : Request , res : Response , next : NextFunction) => {
    const correlationId = v4() ; 
    req.headers["Req-Id"] = correlationId ; 

    asyncLocalStorage.run({ correlationId : correlationId} , () => {
        next() ; 
    })
}