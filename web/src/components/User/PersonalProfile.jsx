import delet from "../../../images/Trash.png";
import edit from "../../../images/Edit.png";
export default function PersonalProfile({ user }) {
  return (
    <div className="text-xl font-pop text-blue-950 flex flex-col justify-start p-10 my-8 mx-10 border rounded-lg border-blue-950 w-[60vw]">
      <section className="flex flex-row m-1">
        <label>Full Name:</label>
        <h1 className="mx-4 text-gray-600">{user?.name}</h1>
      </section>

      <section className="flex flex-row m-1">
        <label>Phone number:</label>
        <h1 className="mx-4 text-gray-600">{user?.phone_number}</h1>
      </section>

      <section className="flex flex-row m-1">
        <label>Email:</label>
        <h1 className="mx-4 text-gray-600">{user?.email}</h1>
      </section>

      <section className="flex flex-row m-1">
        <label>Postal Code:</label>
        <h1 className="mx-4 text-gray-600">{user?.postal_code}</h1>
      </section>

      <section className="flex flex-row m-1">
        <label>City:</label>
        <h1 className="mx-4 text-gray-600">{user?.city}</h1>
      </section>

      <section className="flex flex-row m-1">
        <label>State:</label>
        <h1 className="mx-4 text-gray-600">{user?.state}</h1>
      </section>

      <section className="flex flex-row m-1">
        <label>Country:</label>
        <h1 className="mx-4">{user?.country}</h1>
      </section>

      <section className="flex flex-row m-1">
        <label>Registered as:</label>
        <h1 className="mx-4 text-gray-600">
          {user?.role_id === "A" ? "Seller" : "Buyer"}
        </h1>
      </section>
      <div className="flex flex-row justify-end mt-4">
        <section className="lg:p-3 flex flex-col justify-center items-center">
          <img src={edit} className="lg:h-5" />
          <p className="text-xs">Edit</p>
        </section>
        <section className="lg:p-6 flex flex-col justify-center items-center">
          <img src={delet} className="lg:h-5" />
          <button className="text-xs">Delete</button>
        </section>
      </div>
    </div>
  );
}
