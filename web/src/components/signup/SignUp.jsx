import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function SignUp() {
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await axios.post(
        "http://localhost:3000/users/signup",
        user
      );
      if (newUser) {
        setUser("");
        toast.success("User Registered!!");
      } else {
        toast.error("There was a problem to register a new user");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <h1 className="font-pop text-blue-950 text-3xl text-center py-10">
        Complete the form and get full access!
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col justify-center items-center font-pop text-blue-950"
      >
        <label className="" htmlFor="name">
          Full name
        </label>
        <input
          type="text"
          name="name"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="phone_number">
          Phone Number
        </label>
        <input
          type="text"
          name="phone_number"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="city">
          City
        </label>
        <input
          type="text"
          name="city"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="state">
          State
        </label>
        <input
          type="text"
          name="state"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="postal_code">
          Postal code
        </label>
        <input
          type="text"
          name="postal_code"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="country">
          Country
        </label>
        <input
          type="text"
          name="country"
          className="border border-blue-950 rounded-lg px-10 py-1"
          onChange={handleChange}
        />
        <label className="mt-4" htmlFor="role_id">
          Type of User
        </label>
        <select
          name="role_id"
          className="border border-blue-950 rounded-lg px-20 py-1"
          onChange={handleChange}
        >
          <option defaultValue="A">Seller</option>
          <option value="B">Buyer</option>
        </select>
        <button
          type="submit"
          className="border border-blue-950 bg-blue-950 rounded-lg px-20 py-3 m-10 text-white"
        >
          Register
        </button>
      </form>
    </>
  );
}
