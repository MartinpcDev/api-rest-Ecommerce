import { getAllUsers, loginCtrl, registerUser } from '../controllers/auth.controller'
import { Router } from "express";

export const router = Router()

router.get('/', getAllUsers)
router.post('/login',loginCtrl)
router.post('/register',registerUser)