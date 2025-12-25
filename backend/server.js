import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



mongoose.connect(process.env.MONGO_URI, {
}).then(() =>{
   console.log("Connected to MongoDB");
}).catch((error) =>{
    console.log("Error in connecting to MongoDB:", error)
})
mongoose.connection.on("error", (error) =>{
   console.log("MongoDB connection error:", error);
})

app.use("/api/products", productRoutes);

app.listen(PORT, () =>{
   console.log(" Server is running on port " + PORT);

})