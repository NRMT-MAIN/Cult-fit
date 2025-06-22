import { Request, Response } from "express";
import logger from "../config/logger.config";


export const pingHandeler = ( req : Request , res : Response) => {
    logger.info("Ping Handler")
    res.send("Ping Handeler : Pong")
}