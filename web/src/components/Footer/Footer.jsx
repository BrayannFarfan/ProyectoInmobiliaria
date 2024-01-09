import mapa from "../../../images/google.png";
import direc from "../../../images/address.png";
import mail from "../../../images/mail.png";
import hours from "../../../images/time.png";
import phone from "../../../images/tel.png";
import logo from "../../../images/Logo.png";
export default function Footer() {
  return (
    <div className="lg:w-full lg:h-[444px] bg-blue-950 font-pop font-thin text-xs">
      <div className="grid grid-cols-3  lg:p-8">
        <section className="flex flex-row lg:mt-10 lg:space-y-8 lg:space-x-2">
          <img src={hours} className="lg:h-14 lg:p-2 lg:mt-6" />
          <h1 className="text-blue-900">
            Open hours: <br />
            <span className="text-white">
              Monday-Friday: <br />
              11:00 AM- 22:00 PM
            </span>
          </h1>
        </section>
        <section className="flex flex-row lg:mt-10 lg:space-y-8 lg:space-x-2 ">
          <img className="lg:h-14 lg:p-2 lg:mt-6" src={mail} />
          <h1 className="text-blue-900 lg:mt-2">
            Email: <br />
            <span className="text-white">bonplandinmobiliaria@gmail.com</span>
          </h1>
        </section>
        <section className="flex flex-row lg:ml-20">
          <img src={mapa} />
        </section>
        <section className="flex flex-row lg:space-x-2">
          <img className="lg:h-14 lg:p-2" src={direc} />
          <h1 className="text-blue-900 ">
            Address: <br />
            <span className="text-white">
              43 Raymouth Rd. Baltemoer,
              <br />
              London 3910
            </span>
          </h1>
        </section>
        <section className="flex flex-row lg:space-x-2">
          <img className="lg:h-14 lg:p-2" src={phone} />
          <h1 className="text-blue-900 lg:mt-2">
            Call Us: <br />
            <span className="text-white">+1 1234 55488 55</span>
          </h1>
        </section>
        <img />
      </div>
      <div className="flex justify-center">
        <section className="flex-2">
          <img
            src={logo}
            className="w-[23vw] lg:w-[13vw] lg:p-5 lg:m-2 lg:mx-7"
          />
          <h1 className="text-zinc-400 lg:m-2">
            Copyright ©2023 All rights reserved
          </h1>
        </section>
      </div>
    </div>
  );
}
