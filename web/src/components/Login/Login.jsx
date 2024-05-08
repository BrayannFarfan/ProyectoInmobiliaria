import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:3000/users/login", login);
      const { user, token } = resp.data;
      if (user && token) {
        toast.success("Login successful");
        setLogin({ email: "", password: "" });
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("There was an error when you tried to login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(login);
    setLogin({ ...login, [name]: value });
  };
  return (
    <>
      <h1 className="font-pop text-blue-950 text-3xl text-center py-10">
        Log in
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col justify-center items-center font-pop"
      >
        <label htmlFor="email">Email</label>
        <input
          name="email"
          onChange={handleChange}
          type="text"
          className="border border-blue-950 rounded-lg px-14 py-1"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          className="border border-blue-950 rounded-lg px-14 py-1"
        />
        <button
          className="border border-blue-950 bg-blue-950 rounded-lg px-10 py-3 m-10 text-white"
          type="submit"
        >
          Enter
        </button>
      </form>
    </>
  );
}
