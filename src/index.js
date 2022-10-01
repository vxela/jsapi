import express from "express"
import { app as appConfig } from "./config/general.js"

const app = express()
app.use(express.json());

app.get('/', (req, res) => {

    res.send('hello world')

})

app.get('/:random_number', (req, res) => {
    res.send(req.params)
})

app.post('/', (req, res) => {
    const data = req.body
    res.send(data)
})

app.listen(appConfig, () => {

    console.log(`server runing at http://${appConfig.host}:${appConfig.port}`)

})