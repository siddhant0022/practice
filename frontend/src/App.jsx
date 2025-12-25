import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/products"
    );
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>E-Commerce CRUD</h1>
      <ProductForm fetchProducts={fetchProducts} />
      <ProductList
        products={products}
        fetchProducts={fetchProducts}
      />
    </>
  );
}

export default App;
