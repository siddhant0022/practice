import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    login(res.data);
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
