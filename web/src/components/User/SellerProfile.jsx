import { useState, useEffect } from "react";
import LoaderSeller from "../User/LoaderSeller";
import delet from "../../../images/Trash.png";
import edit from "../../../images/Edit.png";
import UploadPropForm from "./UploadPropForm";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./profileelements.css";

export default function UserSeller() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await axios.get(`http://localhost:3000/users/${id}`);
      return setUser(info.data.Properties);
    };
    fetchUserInfo();
    console.log("aca el userinfo", user);
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
        <LoaderSeller />
      ) : (
        <>
          <section className="flex flex-row justify-between items-center font-pop px-14 py-10">
            <h1 className="text-lg">Your properties</h1>
            <button
              className="logoutButton bg-blue-950 rounded-md"
              onClick={handleLogout}
            >
              Log out
            </button>
          </section>
          <div>
            <section className="flex flex-row lg:m-6">
              {user.length > 0 ? (
                user.map((prop) => {
                  return (
                    <div key={prop.property_id} className="flex flex-col">
                      <Link to={`property/${prop.property_id}`}>
                        <img className="lg:h-40" src={prop.img} />
                        <p className="mx-10">{prop.name}</p>
                      </Link>
                      <section className="flex flex-row justify-center">
                        <section className="lg:p-3 flex flex-col justify-center items-center">
                          <img src={edit} className="lg:h-5" />
                          <p className="text-xs">Edit</p>
                        </section>
                        <section className="lg:p-3 flex flex-col justify-center items-center">
                          <img src={delet} className="lg:h-5" />
                          <p className="text-xs">Delete</p>
                        </section>
                      </section>
                    </div>
                  );
                })
              ) : (
                <section>
                  <p>YOU DID NOT POST A PROPERTY YET</p>
                </section>
              )}
            </section>
          </div>
          <div>
            <h1 className="font-pop text-lg lg:m-10">Upload a property</h1>
            <UploadPropForm />
          </div>
        </>
      )}
    </>
  );
}
