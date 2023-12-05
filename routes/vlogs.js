import { Router } from 'express'
import * as vlogsCtrl from '../controllers/vlogs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', vlogsCtrl.index)

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, vlogsCtrl.create)

export { router }