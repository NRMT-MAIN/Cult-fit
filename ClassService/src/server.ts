import express from "express"
import { serverConfig } from "./config";
import pingRouter from "./router/v1/ping.router";

const app = express()  ; 

app.use(express.json()) ; 
app.use("/api/v1/ping" , pingRouter) ; 

app.listen(serverConfig.PORT , () => {
    console.log("Server running on port :"  , serverConfig.PORT) ; 
})