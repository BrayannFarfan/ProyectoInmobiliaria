import { useState, useEffect } from "react";
import LoaderBuyer from "../User/LoaderBuyer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UserBuyer = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/users/" + `${id}`);
        setUser(resp);
      } catch (error) {
        console.error(error);
      }
    };
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    clearTimeout(timer);
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {loading ? (
        <LoaderBuyer />
      ) : (
        <section className="flex flex-row justify-between items-center font-pop px-14 py-10">
          <h1 className="text-lg">Check our properties</h1>
          <button
            className="logoutButton bg-blue-950 rounded-md"
            onClick={handleLogout}
          >
            Log out
          </button>
        </section>
      )}
    </>
  );
};

export default UserBuyer;
