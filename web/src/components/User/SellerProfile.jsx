import { useState, useEffect } from "react";
import LoaderSeller from "../User/LoaderSeller";
import { useNavigate, useParams } from "react-router-dom";
import PersonalProfile from "./PersonalProfile";
import axios from "axios";
import "./profileelements.css";
import UploadedProperty from "./UploadedProperty";
import UploadPropForm from "./UploadPropForm";

export default function UserSeller() {
  const [loading, setLoading] = useState(true);
  const [openComponent, setOpenComponent] = useState(false);
  const [openProperties, setOpenProperties] = useState(false);
  const [profile, setProfile] = useState(false);
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await axios.get(`http://localhost:3000/users/${id}`);
      return setUser(info.data);
    };
    fetchUserInfo();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [id]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const show = () => {
    setOpenComponent((prevState) => !prevState);
  };
  const showProps = () => {
    setOpenProperties((state) => !state);
  };
  const showProfile = () => {
    setProfile((prevState) => !prevState);
  };
  return (
    <>
      {loading ? (
        <LoaderSeller />
      ) : (
        <>
          <section className="flex flex-row justify-between items-center font-pop px-14 py-10  text-blue-950">
            <h1 className="text-3xl ">Welcome to your profile!</h1>
            <button
              className="logoutButton bg-blue-950 rounded-md px-10 py-4"
              onClick={handleLogout}
            >
              Log out
            </button>
          </section>
          <div className=" ">
            <section>
              <button
                onClick={showProps}
                className="text-xl font-pop text-blue-950 px-14 py-5"
              >
                Check your uploaded properties
              </button>
              {openProperties ? <UploadedProperty user={user} /> : null}
            </section>
            <section>
              <button
                onClick={show}
                className="text-xl font-pop text-blue-950 px-14 py-5"
              >
                Add property +
              </button>
              {openComponent ? <UploadPropForm /> : null}
            </section>
            <section>
              <button
                onClick={showProfile}
                className="text-xl font-pop text-blue-950 px-14 py-5"
              >
                Check your personal information
              </button>
              {profile ? <PersonalProfile user={user} /> : null}
            </section>
          </div>
        </>
      )}
    </>
  );
}
