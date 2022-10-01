import express from "express"
import { app as appConfig } from "./configs/general.js"

const app = express()
app.use(express.json());

const router = express.Router() 

router.get('/', (req, res) => {

    res.send('hello world')

})

router.get('/:random_number', (req, res) => {
    res.send(req.params)
})

router.post('/', (req, res) => {
    const data = req.body
    res.send(data)
})

app.use(router)

app.listen(appConfig, () => {

    console.log(`server runing at http://${appConfig.host}:${appConfig.port}`)

})