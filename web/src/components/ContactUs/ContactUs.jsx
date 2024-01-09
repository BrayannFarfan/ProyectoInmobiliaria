const ContactUs = () => {
  return (
    <>
      <div className="bg-blue-950 lg:align-center text-white font-pop font-bold lg:h-28 lg:text-2xl flex justify-center">
        <h1 className="lg:mt-6">
          If you have Any Questions, <br /> Please Contact Us
        </h1>
      </div>

      <h1 className="text-zinc-400 flex justify-center lg:p-10">
        Complete the questionnaire and send us your question!
      </h1>
      <form id="contact-form" className="flex flex-col lg:ml-80 ">
        <div className="flex flex-row lg:w-2/3">
          <input
            className="lg:w-full lg:h-[50px] border lg:m-0.5 border-zinc-400 rounded-2xl mr-5 "
            placeholder="Name..."
            type="text"
            name="user_name"
          />
          <input
            className="lg:w-full lg:h-[50px] lg:m-0.5 border border-zinc-400 rounded-2xl"
            placeholder=" Email..."
            type="text"
            name="user_email"
          />
        </div>
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-400 rounded-2xl"
          placeholder=" Subject..."
          type="text"
          name="subject"
        />
        <textarea
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-400 rounded-2xl"
          placeholder=" Your message"
          type="message"
        ></textarea>
        <section className="flex justify-end lg:w-2/3 lg:mt-10">
          <button
            className="border border-blue-950 rounded-2xl lg:bg-blue-950 text-white lg:py-2 lg:px-5 lg:w-[113px] lg:h-[48px] lg:mb-10"
            type="submit"
          >
            Send
          </button>
        </section>
      </form>
    </>
  );
};
export default ContactUs;
