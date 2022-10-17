import {Router} from 'express'
const route = Router()
import {handleTokenCallBack} from '../controllers/linkedin'
import {errorMessage} from '../constants'
//



route.get('/callback', async (req, res) => {
    const query: {code?: string, state?: string, error?: string, error_description?: string} = req.query
    const {code, state, error, error_description} = query
    res.send(await handleTokenCallBack(code, state, error, error_description))
})


// 
route.get('/get-auth', async (_, res) => {
    try {
        const baseURL = 'https://www.linkedin.com/oauth/v2/authorization?scope=r_liteprofile%20r_emailaddress%20w_member_social%r_fullprofile&'
        const queryParams = new URLSearchParams({
            response_type: 'code',
            redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
            state: process.env.LINKEDIN_STATE_SECRET,
            client_id: process.env.LINKEDIN_CLIENT_ID
        })

        const authUri = baseURL + queryParams
        res.redirect(authUri)
    }
    catch(err) {
        res.send(errorMessage(err.message))
    }
})

module.exports = route