import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/error/app.error";

export const appErrorHandler = (err : AppError , req : Request , res : Response , next : NextFunction) => {
    console.log(err) ; 

    res.status(err.statusCode).json({
        message : err.message , 
        success : false
    })
}