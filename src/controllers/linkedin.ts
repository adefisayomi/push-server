import axios from 'axios'
import {errorMessage, ResponseType} from '../constants'


export async function handleTokenCallBack (code: string, state: string, error?: string, error_description?: string) : Promise<ResponseType> {
    try {
        if (error) throw new Error(error_description)
        if (!code || !state || state !== process.env.LINKEDIN_STATE_SECRET) {
            throw new Error('invalid query parameters')
        } 
        const queryParams = {
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
            client_id: process.env.LINKEDIN_CLIENT_ID,
            client_secret: process.env.LINKEDIN_CLIENT_SECRET
        }
        const tokenUri = 'https://www.linkedin.com/oauth/v2/accessToken' 
        const data = await axios.post(tokenUri, null, {
            params: queryParams,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const accessToken = await data.data
        return({
            success: true,
            message: 'access token',
            data: accessToken
        })
    }
    catch(err) {
        return errorMessage(err.message)
    }
}

// Share on Linkedin
export async function createShare () : Promise<ResponseType> {
    try {
        // const requestBody = {
        //     author: `urn:li:person:8675309`,
        //     lifecycleState: 'PUBLISHED',
        //     specificContent: {
        //         "com.linkedin.ugc.ShareContent": {
        //             shareCommentary: {
        //                 text: 'Hello world'
        //             },
        //             shareMediaCategory: ''
        //         }
        //     },
        //     visibility: {
        //         "com.linkedin.ugc.MemberNetworkVisibility": 'PUBLIC'
        //     }
        // }
    }
    catch(err) {
        return errorMessage(err.message)
    }
}