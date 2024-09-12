import React from "react";
import SolutionSectionImg1 from "../assets/Solution_Section_img1.svg";
import SolutionSectionImg2 from "../assets/Solution_Section_img2.svg";
import SolutionSectionImg3 from "../assets/Solution_Section_img3.svg";
import SolutionSectionImg4 from "../assets/Solution_Section_img4.svg";
import SolutionSectionImg5 from "../assets/Solution_Section_img5.svg";
import SolutionSectionImg6 from "../assets/Solution_Section_img6.svg";

const solutionCards = [
  { img: SolutionSectionImg1, title: "Content Management" },
  { img: SolutionSectionImg2, title: "Employee Management" },
  { img: SolutionSectionImg3, title: "Vehicle Management" },
  { img: SolutionSectionImg4, title: "Lead Management" },
  { img: SolutionSectionImg5, title: "Inventory Management" },
  { img: SolutionSectionImg6, title: "Hospital Management" },
];

const SolutionCard = React.memo(({ img, title }) => (
  <div className="flex flex-col grow shrink p-6 bg-white rounded-3xl border border-gray-300 min-w-[240px] w-full sm:w-[45%] md:w-[307px]">
    <div className="flex flex-col text-2xl font-semibold text-blue-800">
      <img
        src={img}
        loading="lazy"
        alt={title}
        className="object-contain w-full rounded-lg aspect-[1.37]"
      />
      <h3 className="mt-3">{title}</h3>
    </div>
    <p className="mt-5 text-base text-slate-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididun.Lorem ipsum dolor sit amet, consectetur
    </p>
  </div>
));

function SolutionSection() {
  return (
    <section className="flex flex-col px-4 py-8 bg-white sm:px-8 md:px-32 md:py-16">
      <div className="flex flex-col self-center text-center w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-blue-800 sm:text-4xl md:text-5xl">
          Solutions
        </h2>
        <p className="mt-2 text-base text-gray-500 sm:text-lg md:text-xl">
          Innovative software solutions tailored to streamline your business
          operations and maximize efficiency.
        </p>
      </div>

      <div className="flex flex-col justify-center mt-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionCards.map((card, index) => (
            <SolutionCard key={index} {...card} />
          ))}
        </div>

        <button className="flex gap-2 items-center justify-center px-6 py-2 mt-8 text-base font-semibold text-blue-800 border border-blue-800 rounded-lg hover:bg-blue-100 transition-colors duration-300 mx-auto">
          <span>View More</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e799eea8c579dd9bdfb995335693fc59d1adfd147d9672b23708121ba488e5?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
            className="w-4 h-4 object-contain"
            alt="Arrow"
          />
        </button>
      </div>
    </section>
  );
}

export default SolutionSection;
