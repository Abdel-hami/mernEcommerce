import cloudinary from "../lib/cloudinary.js";
import Product from "../models/product.models.js"
import asyncHandler from "express-async-handler"
export const addProduct = asyncHandler(async(req,res)=>{
    const {name,description,price,image,category} = req.body;

    if(!name|| !price|| !description || !category){
        res.status(400);
        throw new Error("all fields are required");
    }
  
    // const cloudinaryRes = await cloudinary.uploader.upload(image);
    const newProduct = new Product({
        name:name,
        description:description,
        price:price,
        // image:cloudinaryRes.secure_url,
        image:"hhhhhhhhh",
        category:category
    })
    if(!newProduct){
        res.status(400);
        throw new Error("something went wrong");
    }
    await newProduct.save();
    res.status(200).json({
        _id: newProduct._id,
        name:newProduct.name,
        description:newProduct.description,
        price:newProduct.price,
        category:newProduct.category
    });

})
export const getProducts = asyncHandler(async(req,res)=>{
        const products = await Product.find();
        res.status(200).json(products);
})
export const deleteProduct =  asyncHandler(async(req,res)=>{
    const {productId} = req.params;
    // console.log(productId);
    const productToDelete = await Product.findById(productId);
    if(!productToDelete){
        res.status(400);
        throw new Error("product not found");
    } 
    await productToDelete.deleteOne();
    res.status(200).json({message: "Product Delted Succusfully"});
})
export const updateProduct = asyncHandler(async(req,res)=>{
    const {productId} = req.params;
    const {name,description,price,image,category} = req.body;
    // const cloudinaryRes = await cloudinary.uploader.upload(image);
    const updatedProduct = await Product.findByIdAndUpdate(productId, {
        name:name,
        description:description,
        price:price,
        // image:cloudinaryRes.secure_url,
        category:category
    }, {new:true})
    if(updatedProduct){
        res.status(200).json(updatedProduct)
    } else{
        res.status(400);
        throw new Error("can't update the product")
    }
})