const services = [
  {
    title: "Web App Development",
    description: "Building cutting-edge, high-performing web apps tailored to your business needs. Our solutions ensure seamless user experiences.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e93cc1b1603fe4bc655ad045820f2d8cf138b2f67e0a91343850f8ff2a98b3d"
  },
  {
    title: "App Development",
    description: "Crafting exceptional mobile experiences that revolutionize user engagement on the go. Our solutions deliver intuitive, high-performance apps.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fe115984d13cf1abdddbcf451ee6beb2867f551ce9a6e6a052a8bc730b4b64f"
  },
  {
    title: "IT Consulting",
    description: "Strategic IT consulting services to guide businesses through the dynamic technology landscape. We provide expert insights and solutions to optimize your IT infrastructure.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e34773a297bb8176c7c8e4570f19ffc409df29b06e2009d47d9cc92d6dd1ab7"
  },
  {
    title: "Software Development",
    description: "Enterprise-grade, bespoke solutions that perfectly align with your business needs and goals.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb4551bff53aefa8fe7bcaac8cb54335066f5762da5a7a922b3a0e6d98db6759"
  },
  {
    title: "Cloud Services",
    description: "Empower businesses to harness the full potential of cloud computing with solutions that ensure flexibility, scalability, and security.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2239cfca5083de1059b6b7acd2f603205cc755961df8a092b7e619ab4340391b"
  },
  {
    title: "Data Engineering",
    description: "Robust data pipelines, ensuring the seamless collection, storage, and management of your data, no matter the scale.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/309100dcf7235692c3fb84810631cbbc20d72d95c2dffb1bcd4c0df67bef34cb"
  }
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="flex flex-col grow shrink self-stretch px-6 pt-6 pb-11 my-auto bg-white rounded-3xl border border-gray-300 border-solid min-h-[288px] min-w-[240px] w-[307px] max-md:px-5">
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center w-16 min-h-[64px]">
        <div className="flex relative flex-col w-full aspect-square">
          <img
            loading="lazy"
            srcSet={`${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=100 100w, ${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=200 200w, ${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=400 400w, ${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=800 800w, ${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1200 1200w, ${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1600 1600w, ${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=2000 2000w, ${icon}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965`}
            className="object-cover absolute inset-0 size-full"
            alt={title}
          />
          <div className="flex relative shrink-0 w-full h-16 rounded-full bg-slate-500 bg-opacity-10" />
        </div>
      </div>
      <div className="flex flex-col mt-3.5 w-full text-3xl font-semibold text-blue-800">
        <div className="w-full">{title}</div>
      </div>
    </div>
    <div className="mt-5 text-lg text-gray-600">{description}</div>
  </div>
);

function ServiceSection() {
  return (
    <div className="flex flex-col px-32 py-16 bg-gray-50 max-md:px-5">
      <div className="flex flex-col self-center max-w-full text-center w-[548px]">
        <div className="text-5xl font-semibold text-blue-800 max-md:max-w-full max-md:text-4xl">
          Services
        </div>
        <div className="mt-2 text-xl text-gray-500 max-md:max-w-full">
          Comprehensive business services designed to support growth and enhance
          your competitive edge.
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 justify-center w-full max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex gap-2.5 justify-center items-center self-center px-9 py-3.5 mt-8 text-base font-semibold text-center bg-white rounded-lg border border-blue-800 border-solid text-slate-800 max-md:px-5">
          <div className="self-stretch my-auto">View More</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e799eea8c579dd9bdfb995335693fc59d1adfd147d9672b23708121ba488e5?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.63] w-[15px]"
            alt="View More Arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;