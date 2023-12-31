import { deleteProduct, editProduct, getAllProductos, getProductById, postProduct } from "../controllers/productos.controller";
import { Router } from "express";

export const router = Router()

router.get('/', getAllProductos)
router.get('/:id', getProductById)
router.post('/',postProduct)
router.put('/:id',editProduct)
router.delete('/:id',deleteProduct)

