import HeroImage from "../assets/Hero Image.svg";

function HeroSection() {
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
        <button className="px-9 py-3.5 text-white bg-blue-800 rounded-lg max-md:px-5">
          Know more
        </button>
        <button className="px-9 py-3.5 bg-white rounded-lg border border-blue-800 text-slate-800 max-md:px-5">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
