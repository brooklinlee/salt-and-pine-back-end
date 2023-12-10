import { Router } from 'express'
import * as vlogsCtrl from '../controllers/vlogs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========
router.get('/', vlogsCtrl.index)
router.get('/:vlogId', vlogsCtrl.show)

// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, vlogsCtrl.create)
router.put('/:vlogId', checkAuth, vlogsCtrl.update)

export { router }