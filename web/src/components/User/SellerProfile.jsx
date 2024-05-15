import { useState, useEffect } from "react";
import LoaderSeller from "../User/LoaderSeller";
import delet from "../../../images/Trash.png";
import edit from "../../../images/Edit.png";
import UploadPropForm from "./UploadPropForm";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./profileelements.css";

export default function UserSeller() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await axios.get(`http://localhost:3000/users/${id}`);
      return setUser(info.data.Properties);
    };
    fetchUserInfo();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleDelete = async () => {
    try {
      const del = await axios.put(
        `http://localhost:3000/properties/delete/${property_id}`
      );
      if (del) toast.success(del.message);
    } catch (error) {
      console.error(error);
    }
    setModal(false);
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
              {user?.length > 0 ? (
                user.map((prop) => {
                  return (
                    <div key={prop.property_id} className="flex flex-col px-5">
                      <Link to={`property/${prop.property_id}`}>
                        <img
                          className="lg:h-40"
                          src={prop.img}
                          onClick={() => navigate()}
                        />
                        <p className="mx-10">{prop.name}</p>
                      </Link>
                      <section className="flex flex-row justify-center">
                        <section className="lg:p-3 flex flex-col justify-center items-center">
                          <img src={edit} className="lg:h-5" />
                          <p className="text-xs">Edit</p>
                        </section>
                        <section className="lg:p-3 flex flex-col justify-center items-center">
                          <img src={delet} className="lg:h-5" />
                          <button
                            className="text-xs"
                            onClick={() => setModal(true)}
                          >
                            Delete
                          </button>
                        </section>
                        <section>
                          {modal && (
                            <div>
                              <div>
                                <p>
                                  Do you really want to delete this property?
                                </p>
                                <button type="button" onClick={handleDelete}>
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setModal(false)}
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          )}
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
