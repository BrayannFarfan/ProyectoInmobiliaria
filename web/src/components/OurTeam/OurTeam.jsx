import teamMembers from "../../info/team";

import { useState } from "react";
export default function OurTeam() {
  const [members, setMembers] = useState(teamMembers);
  return (
    <>
      <h1 className="lg:h-10 lg:p-7 bg-blue-950 flex justify-center text-white font-pop font-bold lg:text-3xl text-xl h-9 md:h-12 ">
        Our Team
      </h1>
      <div className="h-40 lg:h-auto bg-blue-950 lg:flex  text-white font-pop font-bold lg:flex-row text-sm justify-center tracking-wide leading-loose">
        {members?.map((m) => {
          return (
            <section
              className="flex justify-center lg:flex-col"
              key={Math.random()}
            >
              <img
                className="hidden lg:block rounded-full h-36 w-3/4 mt-10 mx-10"
                src={m.photo}
                alt="per"
              />
              <section className="flex justify-center lg:flex-col lg:ml-10 lg:mb-10 lg:mt-4">
                <h1 className="text-center">{m.name}</h1>
                <h2 className="text-center">{m.job}</h2>
              </section>
            </section>
          );
        })}
      </div>
    </>
  );
}
