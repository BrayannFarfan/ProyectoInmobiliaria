import prof from "../../../images/man.png";
import gol from "../../../images/Goal.png";
import pai from "../../../images/paid.png";
import hom from "../../../images/home.png";
import escudo from "../../../images/shield.png";
import busq from "../../../images/search.png";

export default function About() {
  return (
    <>
      <h1 className="text-white bg-blue-950 w-full lg:h-20 h-10 font-pop flex justify-center items-center lg:text-3xl font-extrabold">
        About Us
      </h1>
      <div className="flex-2 lg:p-20 content-center p-4 mr-6">
        <div className="flex flex-row items-center content-center ">
          <section className="flex flex-col items-center justify-center w-1/3">
            <img
              src={hom}
              className="object-cover object-center lg:w-[6vw] lg:h-20 w-[10vw] md:h-16 h-8 bg-gray-200 p-1 lg:p-5 m-2 rounded-full"
              alt="man"
            />
            <h2 className="font-pop lg:mt-4 mb-4 lg:text-xl text-sm text-center">
              Variety of properties
            </h2>
            <p className="font-xs w-80 text-zinc-500 text-justify leading-relaxed hidden lg:block">
              Whether you are looking for your first home, a lucrative
              investment, or a place to expand your business, Bonpland offers a
              wide range of properties.
            </p>
          </section>
          <section className="flex flex-col items-center justify-center w-1/3">
            <img
              src={gol}
              className="object-cover lg:w-[6vw] lg:h-20 w-[10vw] h-8 md:h-16 bg-gray-200 p-1 lg:p-5 m-2 rounded-full"
              alt="man"
            />
            <h2 className="font-pop lg:mt-4 mb-4 lg:text-xl text-sm text-center">
              Costumer focused
            </h2>
            <p className="font-xs w-80 text-zinc-500 text-justify leading-relaxed hidden lg:block">
              Our focus has always been to place the user at the center. We have
              designed Bonpland to meet the needs, expectations, and desires of
              our users.
            </p>
          </section>
          <section className="flex flex-col items-center justify-center w-1/3">
            <img
              src={pai}
              alt="man"
              className="object-cover lg:w-[6vw] lg:h-20 w-[10vw] h-8 md:h-16 bg-gray-200 p-1 lg:p-5 m-2 rounded-full"
            />
            <h2 className="font-pop lg:mt-4 mb-4 lg:text-xl text-sm text-center">
              Dependable
            </h2>
            <p className="lg:font-xs lg:w-80 text-zinc-500 text-justify leading-normal hidden lg:block">
              We acknowledge that when buying or selling a property, you are
              making a significant decision that will impact your life and
              finances. That is why we strive tirelessly to build and maintain
              the trust of our users in every aspect.
            </p>
          </section>
        </div>
        <div className="flex flex-row lg:mt-14 content-center">
          <section className="flex flex-col items-center justify-center w-1/3">
            <img
              src={prof}
              alt="man"
              className="object-cover lg:w-[6vw] lg:h-20 w-[10vw] h-8 md:h-16 bg-gray-200 p-1 lg:p-5 m-2 rounded-full"
            />
            <h2 className="font-pop lg:mt-4 mb-4 text-center lg:text-xl text-sm">
              Top rated agents
            </h2>
            <p className="font-xs w-80 text-zinc-500 text-justify leading-relaxed hidden lg:block">
              We have an expert real estate team ready to guide you every step
              of the way, from property evaluation to contract signing.
            </p>
          </section>
          <section className="flex flex-col items-center justify-center w-1/3">
            <img
              src={escudo}
              alt="man"
              className="object-cover lg:w-[6vw] lg:h-20 w-[10vw] h-8 md:h-16 bg-gray-200 p-1 lg:p-5 m-2 rounded-full"
            />
            <h2 className="font-pop lg:mt-4 mb-4 text-center lg:text-xl text-sm">
              Easy and safe
            </h2>
            <p className="font-xs w-80 text-zinc-500 text-justify leading-relaxed hidden lg:block">
              Our focus on security has been instrumental in building trust with
              our users. Every transaction is carried out securely, supported by
              our robust practices.
            </p>
          </section>
          <section className="flex flex-col items-center justify-center w-1/3">
            <img
              src={busq}
              alt="man"
              className="object-cover lg:w-[6vw] lg:h-20 w-[10vw] h-8 md:h-16 bg-gray-200 p-1 lg:p-5 m-2 rounded-full"
            />
            <h2 className="font-pop lg:mt-4 mb-4 text-center lg:text-xl text-sm">
              Transparency
            </h2>
            <p className="font-xs w-80 text-zinc-500 text-justify leading-relaxed hidden lg:block">
              A core value that guides every aspect of our platform. We provide
              accurate and detailed information, and we make your transactions
              clear and accessible.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
