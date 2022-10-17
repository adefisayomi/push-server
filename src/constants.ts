
// 
export type ResponseType = {
    success: boolean,
    message: string,
    data: unknown
}

// 
export function errorMessage (message: string): ResponseType {
    if (process.env.NODE_ENV !== 'production') {
        console.log(({
            success: false,
            message: message,
            data: null
        }))
    }
    return ({
        success: false,
        message: message,
        data: null
    })
}