import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true},
  price: { type: Number, required: true},
  descripition: { type: String, required: false},
  category: { type: String, required: false},
  image: { type: String,  required: false}
},
  {timestamps: true}
)

const Products = mongoose.model("Products", productSchema);

export default Products;