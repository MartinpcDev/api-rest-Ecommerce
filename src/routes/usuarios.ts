import { getAllUsers, postUser } from '../controllers/usuarios.controller'
import { Router } from "express";

export const router = Router()

router.get('/', getAllUsers)
router.post('/',postUser)