import {Router} from 'express'
const route = Router()
// 
route.use('/linkedin', require('./linkedin'))


module.exports = route