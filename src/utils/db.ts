import {connect} from 'mongoose'
import { ResponseType, errorMessage } from '../constants'


const connection: {
    isConnected: unknown
} = {
    isConnected: false
}

export default async function initDBConnect (): Promise<ResponseType> {

    try {
        const dbConnected = await connect(process.env.DATABASE_URI)
        connection.isConnected = dbConnected.connection.readyState
        process.env.NODE_ENV !== 'production' && console.log(`Database conn: ${connection.isConnected}`)
        return ({
            success: true,
            message: 'database connected',
            data: connection.isConnected
        })
    }
    catch(err) {
        return errorMessage(err.message)
    }
}