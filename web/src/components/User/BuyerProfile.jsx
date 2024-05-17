import { useState, useEffect } from "react";
import LoaderBuyer from "../User/LoaderBuyer";
import { useNavigate, Link } from "react-router-dom";

const UserBuyer = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
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
          <div className="flex flex-row">
            <h1 className="text-xl mx-6 mt-4 mb-10">Check your Profile</h1>
            <h1 className="text-xl mx-6 mt-4 mb-10">Check your Wishlist</h1>
            <Link to="/">
              <h1 className="text-xl mx-6 mt-4 mb-10">Check our properties</h1>
            </Link>
          </div>
          <button
            className="border border-blue-950 text-white px-8 py-3 mb-9 bg-blue-950 rounded-md"
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
