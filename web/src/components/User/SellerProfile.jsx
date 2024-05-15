import { useState, useEffect } from "react";
import LoaderSeller from "../User/LoaderSeller";
import delet from "../../../images/Trash.png";
import edit from "../../../images/Edit.png";
import UploadPropForm from "./UploadPropForm";
import { useNavigate, useParams, Link } from "react-router-dom";
import DeleteModal from "../Modals/DeleteModal";
import PersonalProfile from "./PersonalProfile";
import axios from "axios";
import "./profileelements.css";

export default function UserSeller() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
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
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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
          <section className="flex flex-row justify-between items-center font-pop px-14 py-10  text-blue-950">
            <h1 className="text-3xl ">Welcome to your profile! </h1>
            <button
              className="logoutButton bg-blue-950 rounded-md px-10 py-4"
              onClick={handleLogout}
            >
              Log out
            </button>
          </section>
          <div className="flex flex-row">
            <h1 className=" text-xl font-pop text-blue-950 px-14 py-5">
              Your uploaded properties
            </h1>
            <h1 className=" text-xl font-pop text-blue-950 px-14 py-5">
              Your personal information
            </h1>
          </div>
          <section className="flex flex-row lg:m-6">
            {user?.length > 0 ? (
              user.map((prop) => {
                return (
                  <div key={prop.property_id} className="flex flex-col px-5">
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
                        <button className="text-xs" onClick={openModal}>
                          Delete
                        </button>
                      </section>
                      <section>
                        <DeleteModal isOpen={isOpen} onClose={closeModal} />
                      </section>
                    </section>
                  </div>
                );
              })
            ) : (
              <section>
                <p className="font-pop text-blue-950">
                  YOU DID NOT POST A PROPERTY YET
                </p>
              </section>
            )}
          </section>

          <div>
            <UploadPropForm />
          </div>
        </>
      )}
    </>
  );
}
