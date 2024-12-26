import React, { useState } from "react";
import { Link } from "react-router";

const HeroText = ({ display, order, setDisplay, children }) => {
  return (
    <div
      className={`container p-8 mx-auto flex flex-col justify-center items-start gap-y-2 absolute transition-all duration-300 ${
        display === order ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
     <h1 className="font-bold text-2xl">
      <span className="text-gray-500">|</span>{" "}
      <span className="text-white">HELLO</span>
     </h1>
      
      <h2 className="font-bold text-6xl">
        <span className="text-white"> I'm </span>{" "}
        <span className="text-teal-500"> Ade </span>{" "}
        <span className="text-white"> Raihan Hanafi </span>
         </h2>
      <p className="font-normal text-white text-2xl md:w-1/2">{children}</p>
      <button
        onClick={setDisplay}
        className="bg-teal-700 hover:bg-teal-500 font-medium text-white hover:text-gray-300 text-lg px-4 py-2 mt-5 rounded-xl"
      >
        Next
      </button>
      <Link to="/contact" className="bg-teal-700 hover:bg-teal-500 font-medium text-white hover:text-gray-300 text-lg px-4 py-2 mt-2 rounded-xl" >Contact</Link>
    </div>
  );
};

const Jumbotron = () => {
  const [display, setDisplay] = useState(0);
  return (
    <div
      className="h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('assets/Images/Jumbotron.jpeg')" }}
    >
      <div className="w-full h-full bg-gradient-to-r from-black/80 from-40% flex items-center justify-center relative ">
        {/* tampilan 1 */}
        <HeroText display={display} order={0} setDisplay={() => setDisplay(1)}>
          A Web Developer and UI UX Designer, looking for working around the globe.
        </HeroText>
        {/* tampilan 2 */}
        <HeroText display={display} order={1} setDisplay={() => setDisplay(0)}>
          Want to know more about me? <br />
          <span className="text-teal-500"> Just contact. </span>
        </HeroText>
      </div>
    </div>
  );
};

export default Jumbotron;