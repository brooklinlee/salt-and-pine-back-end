import { Router } from 'express'
import * as vlogsCtrl from '../controllers/vlogs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', vlogsCtrl.index)
router.post('/', vlogsCtrl.create)

// ========= Protected Routes ========= 

export { router }