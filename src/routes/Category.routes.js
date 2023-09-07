import { Router } from "express";
import { 
    createCategory, 
    getCategories,
    getCategory
} from "../controllers/Category.controller.js";

const route = Router()

route.get("/category", getCategories)

route.get("/category/:id", getCategory)

route.post("/category", createCategory)


export default route;