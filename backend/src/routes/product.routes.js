import express from "express"
import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controllers.js";
const router = express.Router();

router.get("/", getProducts);
router.post("/add", addProduct);
router.delete("/delete", deleteProduct);
router.put("/add", updateProduct);


export default router;