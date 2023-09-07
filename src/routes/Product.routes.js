import { Router } from "express";

import { 
    getProducts,
    createProducts,
    getProduct,
    deleteProduct,
    updateProduct
} from "../controllers/Product.controller.js";

const router = Router();

router.get("/products", getProducts)

router.get("/products/:id", getProduct)

router.post("/products", createProducts)

router.delete("/products/:id", deleteProduct)

router.put("/products/:id", updateProduct)

export default router