import axios from "axios";

export default function ProductList({ products, fetchProducts }) {
  const deleteProduct = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );
    fetchProducts();
  };

  return (
    <ul>
      {products.map((p) => (
        <li key={p._id}>
          {p.title} - ₹{p.price}
          <button onClick={() => deleteProduct(p._id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
