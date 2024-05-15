import { toast } from "react-toastify";
import axios from "axios";
export default function DeleteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      const del = await axios.put(
        `http://localhost:3000/properties/delete/${property_id}`
      );
      if (del) toast.success(del.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="modal-container bg-white w-full md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-pop ">Are you sure?</p>
            </div>
            <button
              className="border bg-blue-950 m-3 px-3 rounded-md text-white"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              className="border bg-blue-950 m-3 px-3 rounded-md text-white"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
