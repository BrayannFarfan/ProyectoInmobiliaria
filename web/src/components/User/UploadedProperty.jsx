import { useState } from "react";
//import { Link } from "react-router-dom";
import delet from "../../../images/Trash.png";
import edit from "../../../images/Edit.png";
import DeleteModal from "../Modals/DeleteModal";

// eslint-disable-next-line react/prop-types
export default function UploadedProperty({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section className="flex flex-row lg:m-6">
        {user?.Properties.length > 0 ? (
          user.Properties.map((prop) => {
            return (
              <div key={prop.property_id} className="flex flex-col px-5">
                {/* <Link to={`/${prop.property_id}`}></Link> */}
                <img className="lg:h-40" src={prop.img} />
                <p className="mx-10">{prop.name}</p>
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
    </div>
  );
}
