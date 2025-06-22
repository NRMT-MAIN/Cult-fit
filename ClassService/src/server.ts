import express from "express"
import { serverConfig } from "./config";
import pingRouter from "./router/v1/ping.router";
import { appErrorHandler } from "./middleware/error.middleware";
import { attachCorrelationId } from "./middleware/correlation.middleware";
import logger from "./config/logger.config";
import classRouter from "./router/v1/class.router";
import centerRouter from "./router/v1/center.router";

const app = express()  ; 

app.use(express.json()) ; 
app.use("/api/v1/ping" , pingRouter) ; 
app.use("/api/v1/class" , classRouter) ; 
app.use("/api/v1/center" , centerRouter) ; 
app.use(appErrorHandler) ; 
app.use(attachCorrelationId) ; 

app.listen(serverConfig.PORT , () => {
    console.log("Server is running") ; 
    logger.info("Server is running on port" , serverConfig.PORT)
})