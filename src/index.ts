import {config} from 'dotenv'
config()
import * as express from 'express'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import initDBConnect from './utils/db'

// <-  start server  ->
async function initServer () {
    try {
        const app = express()
        const PORT = process.env.PORT || 4000
        const api_path = '/api/v1/'
        // 

        // <- middlewares ->
        app.use(express.json())
        app.use(express.urlencoded({extended: false}))
        app.use(cookieParser())
        app.use(cors())

        // <-  Routes  ->
        app.use(api_path, require('./routes'))
        app.use((_, res) => {
            res.send({
                success: true,
                message: null,
                data: null
            })
        })
        // 
        await new Promise(resolve => {
            app.listen(PORT, () => {
                resolve(process.env.NODE_ENV !== 'production' && console.log(`Server: ${PORT}`))
            })
        })
        await initDBConnect()
    }
    catch(err) {
        process.env.NODE_ENV !== 'production' && console.log({server_error: err.message})
        process.exit(1)
    }
}
initServer()