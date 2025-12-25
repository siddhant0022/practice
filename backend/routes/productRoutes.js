import express from "express";
import Product from "../models/Products.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedproduct = await product.save();
    res.status(201).json(savedproduct);
  }
  catch (error){
    res.status(500).json({
      message: "Error in creating product",
      error: error.message
    })}
    })
 
router.get("/", async (req, res)=>{
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  }
  catch (error){
    res.status(500).json({
      message: "Error in fetching the products",
      error: error.message
    })
  }
})    

router.put("/:id" , async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: " Error in updating the products",
      error: error.message
    })
  }

    }
  );

  router.delete("/:id", async (req, res) => {
    try {
      await Product .findByIdAndUpdate(req.params.id);
      res.status(200).json({ message: "Product Deleted Successfully"})

    }
    catch(error){
      res.status(500).json({
        message: " Error in deleting the Product",
        error: error.message
      })
    }
  })
  
  export default router;