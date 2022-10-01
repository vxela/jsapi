import * as dotenv from "dotenv"

dotenv.config()

export const app = {
    "host": process.env.APP_HOST,
    "port": process.env.APP_PORT,
}


// console.log(appConfig)