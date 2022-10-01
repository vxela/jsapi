import express from "express"
import {testHandlerGet, testHandlerParam, testHandlerPost} from "../controller/testController.js"

const router = express.Router() 

router.get('/', testHandlerGet)

router.get('/:random_number', testHandlerParam)

router.post('/', testHandlerPost)

export { router }