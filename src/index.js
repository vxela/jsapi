import express from "express"
import { app as appConfig } from "./config/general.js"

const app = express()

app.get('/', (req, res) => {

    res.send('hello world')

})

app.listen(appConfig, () => {

    console.log(`server runing at http://${appConfig.host}:${appConfig.port}`)

})