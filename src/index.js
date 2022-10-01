import express from "express"
import { app as appConfig } from "./configs/general.js"
import { router } from "./routers/index.js"

export const app = express()
app.use(express.json());
app.use(router);

app.listen(appConfig, () => {

    console.log(`server runing at http://${appConfig.host}:${appConfig.port}`)

})