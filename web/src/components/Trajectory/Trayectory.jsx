import logo from "../../../images/grouplogo.png";
export default function Trayectory() {
  return (
    <div>
      <h1 className="lg:text-4xl text-xl text-blue-950 font-pop font-bold lg:p-5 flex justify-center mt-5">
        Our Trayectory
      </h1>
      <p className="p-10 lg:text-md text-sm text-zinc-400 font-bold font-pop leading-7 text-start lg:p-15">
        In the ever-evolving world of real estate, Bonpland has emerged as a
        reliable beacon for those looking to buy and sell properties effectively
        and safely.
        <span className="hidden lg:block">
          With a decade-long history of success, Bonpland has become the
          preferred destination for thousands of people seeking to conduct real
          estate transactions efficiently. <br />
          <br />
          Founded in 2012, Bonpland has been committed from the outset to
          providing a hassle-free real estate buying and selling experience. Our
          online platform has revolutionized how people interact with the real
          estate market, offering a range of benefits that include an intuitive
          interface and expert advice. <br /> <br />
          Join the Bonpland community today and discover why we are the trusted
          destination for buying and selling real estate. Your next home or
          investment is waiting, and we are here to guide you every step of the
          way. Welcome to Bonpland, your real estate partner!
        </span>
      </p>
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="h-24 md:h-48 lg:h-96" />
      </div>
    </div>
  );
}
