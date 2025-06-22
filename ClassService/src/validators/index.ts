import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";
import { StatusCodes } from "http-status-codes";

export const validateRequestBody = (schema : AnyZodObject) => {
    return async (req : Request , res : Response , next : NextFunction) => {
        try {
            await schema.parseAsync(req.body) ; 
            next() ; 
        } catch ( err ) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message : "Invalid Request Body" , 
                success : false , 
                error : err
            })
        }   
    }
}

export const validateQueryParam = (schema : AnyZodObject) => {
    return async (req : Request , res : Response , next : NextFunction) => {
        try {
            await schema.parseAsync(req.body) ; 
            next() ; 
        } catch ( err ) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message : "Invalid Query Param" , 
                success : false , 
                error : err
            })
        }   
    }
}
