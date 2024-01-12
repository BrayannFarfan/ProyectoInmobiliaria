import plus from "../../../images/+.png";
export default function UploadPropForm() {
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col lg:mx-20 lg:my-15 ">
      <form
        onSubmit={handleSubmit}
        className="font-pop flex flex-col justify-center"
      >
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Property Name"
          name="property_name"
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder="  Location"
          name="location"
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Price"
          name="price"
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Size in square meters"
          name="sq_feet"
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Type of rental"
          name="type_of_rental"
        />
        <textarea
          className="lg:w-2/3 lg:h-[150px] lg:my-2 border border-zinc-300 rounded-2xl "
          type="text"
          placeholder=" Description"
          name="description"
        ></textarea>
        <div className="lg:w-2/3 lg:h-[227px]  bg-zinc-300 rounded-2xl lg:my-5 flex flex-col justify-center items-center">
          <img src={plus} alt="plus" className="lg:h-[50px] lg:w-14" />
          <p className="lg:mt-5">Attach images</p>
        </div>
        <section className="flex justify-end">
          <button
            className="border border-blue-950 rounded-2xl lg:bg-blue-950  text-white lg:py-2 lg:px-5 lg:w-[113px] lg:h-[48px] lg:mb-10 lg:mr-80 "
            type="submit"
          >
            Continue
          </button>
        </section>
      </form>
    </div>
  );
}
