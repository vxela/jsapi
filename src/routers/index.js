import expres from "../index.js"
import {testHandlerGet, testHandlerParam, testHandlerPost} from "../controller/testController"

const router = express.Router() 

router.get('/', testHandlerGet)

router.get('/:random_number', testHandlerParam)

router.post('/', testHandlerPost)

app.use(router)