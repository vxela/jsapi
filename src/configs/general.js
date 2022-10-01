import * as dotenv from "dotenv"

dotenv.config()

const ENV = process.env.APP_ENV || "development"
const DEBUG = process.env.APP_ENV || true

const config = {
    development: {
        host: process.env.DEV_APP_HOST || '127.0.0.1',
        port: process.env.DEV_APP_PORT || 3001,
    },
    testing: {
        host: process.env.TEST_APP_HOST || '127.0.0.1',
        port: process.env.TEST_APP_PORT || 3002,
    },
    production: {
        host: process.env.PROD_APP_HOST,
        port: process.env.PROD_APP_PORT,
    }
}

export const app = config[ENV]
export const debug = ENV == "production" ? false : DEBUG
// console.log(appConfig)