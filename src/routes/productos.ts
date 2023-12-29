import { getAllProductos, getProductById, postProduct } from "../controllers/productos.controller";
import { Router } from "express";

export const router = Router()

router.get('/', getAllProductos)
router.get('/:id', getProductById)
router.post('/',postProduct)

