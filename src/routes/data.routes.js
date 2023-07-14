import express from 'express'
import { getData } from '../controllers/data.controllers.js'

const router = express.Router()

router.get('/all', getData)

export default router
