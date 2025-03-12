import Product from "../models/product.models.js"
import asyncHandler from "express-async-handler"
export const addProduct = (req,res)=>{
    const {name,description,price,image,category} = req.body;

    if(!name|| !price|| !image || !description || !category){
        res.status(400);
        throw new Error("all fields are required");
    }

    const newProduct = new Product({
        name:name,
        description:description,
        price:price,
        image,
        category:category
    })

}
export const getProducts = asyncHandler(async(req,res)=>{
        const products = await Product.find();
        res.status(200).json(products);
})
export const deleteProduct = (req,res)=>{
    console.log("delete")
}
export const updateProduct = (req,res)=>{
    console.log("update")
}