import axios from "axios";
import { useState } from "react";

export default function ProductForm({ fetchProducts }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/products", {
      title,
      price,
    });

    setTitle("");
    setPrice("");
    fetchProducts();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Product name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button>Add Product</button>
    </form>
  );
}
