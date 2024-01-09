import teamMembers from "../../info/team";
import logo from "../../../images/grouplogo.png";
//import points from "../../../images/points.png";
import { useState } from "react";
export default function OurTeam() {
  const [members, setMembers] = useState(teamMembers);
  return (
    <>
      <h1 className="lg:h-10 lg:p-7 bg-blue-950 flex justify-center text-white font-pop font-bold lg:text-3xl">
        Our Team
      </h1>
      <div className="h-20 lg:h-auto bg-blue-950 lg:flex  text-white font-pop font-bold lg:flex-row justify-center">
        {members?.map((m) => {
          return (
            <section
              className="flex justify-center flex-col"
              key={Math.random()}
            >
              <img
                className="hidden lg:block rounded-full h-36 w-3/4 mt-10 mx-10"
                src={m.photo}
                alt="per"
              />
              <section className="flex justify-center flex-col lg:ml-10 lg:mb-10 lg:mt-4">
                <h1 className="text-center">{m.name}</h1>
                <h2 className="text-center">{m.job}</h2>
              </section>
            </section>
          );
        })}
      </div>
      <div>
        <h1 className="lg:text-4xl text-xl text-blue-950 font-pop font-bold lg:p-5 lg:flex justify-center">
          Our Trayectory
        </h1>
        <p className="p-10 lg:text-md text-sm text-zinc-400 font-bold font-pop leading-7 text-start lg:p-20">
          In the ever-evolving world of real estate, Bonpland has emerged as a
          reliable beacon for those looking to buy and sell properties
          effectively and safely.
          <span className="hidden lg:block">
            With a decade-long history of success, Bonpland has become the
            preferred destination for thousands of people seeking to conduct
            real estate transactions efficiently. <br />
            <br />
            Founded in 2012, Bonpland has been committed from the outset to
            providing a hassle-free real estate buying and selling experience.
            Our online platform has revolutionized how people interact with the
            real estate market, offering a range of benefits that include an
            intuitive interface and expert advice. <br /> <br />
            Join the Bonpland community today and discover why we are the
            trusted destination for buying and selling real estate. Your next
            home or investment is waiting, and we are here to guide you every
            step of the way. Welcome to Bonpland, your real estate partner!
          </span>
        </p>
        <div className="flex justify-center">
          <img src={logo} alt="" className="" />
        </div>
      </div>
    </>
  );
}
