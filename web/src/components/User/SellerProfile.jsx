import { useState, useEffect } from "react";
import LoaderSeller from "../User/LoaderSeller";
import propiedades from "../../info/info";
import delet from "../../../images/Trash.png";
import edit from "../../../images/Edit.png";
import UploadPropForm from "./UploadPropForm";
import { useNavigate } from "react-router-dom";
import "./profileelements.css";

export default function UserSeller() {
  const [loading, setLoading] = useState(true);
  const [fotos, setFotos] = useState(propiedades);
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
              {fotos.map((f) => {
                return (
                  <div key={Math.random()} className="flex flex-col">
                    <img className="lg:p-4 lg:w-50" src={f.photos[1]} />
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
              })}
            </section>
          </div>
          <div>
            <h1 className="font-pop text-lg lg:m-10">To upload a property</h1>
            <UploadPropForm />
          </div>
        </>
      )}
    </>
  );
}
