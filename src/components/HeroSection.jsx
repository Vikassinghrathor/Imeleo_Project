import { useState } from "react";
import HeroImage from "../assets/Hero Image.svg";

function HeroSection() {
  const [hoveredButton, setHoveredButton] = useState("knowMore"); // Default state set to "knowMore"

  return (
    <div
      className="relative flex flex-col items-center px-[8vw] py-[12vh] text-center bg-cover bg-center max-md:px-5 max-md:py-[6vh]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="flex flex-col w-[40vw] max-w-full bg-opacity-80">
        <h1 className="text-[3.75rem] font-semibold tracking-tight text-blue-800 max-md:text-[2.5rem]">
          <span className="font-black">Business Software </span>Solutions And
          Services
        </h1>
        <p className="self-center mt-3 text-[1.25rem] font-medium text-gray-800 underline max-md:max-w-full">
          <span className="font-bold text-gray-800 underline">Software</span>{" "}
          services and solutions to take your{" "}
          <span className="font-bold text-gray-800 underline">Business</span> to
          the next level 🚀
        </p>
      </div>
      <div className="flex gap-5 items-center mt-6 text-base font-semibold">
        <button
          className={`px-9 py-3.5 rounded-lg max-md:px-5 ${
            hoveredButton === "knowMore" ? "bg-blue-800 text-white" : "bg-white text-blue-800 border border-blue-800"
          }`}
          onMouseEnter={() => setHoveredButton("knowMore")}
          onMouseLeave={() => setHoveredButton("knowMore")} // Keep first button blue when not hovered
        >
          Know more
        </button>
        <button
          className={`px-9 py-3.5 rounded-lg max-md:px-5 ${
            hoveredButton === "contactUs" ? "bg-blue-800 text-white" : "bg-white text-blue-800 border border-blue-800"
          }`}
          onMouseEnter={() => setHoveredButton("contactUs")}
          onMouseLeave={() => setHoveredButton("knowMore")} // Revert to "knowMore" when leaving
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
