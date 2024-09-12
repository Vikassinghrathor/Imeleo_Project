
const FeatureItem = ({ icon, text }) => (
  <div className="flex gap-5 items-center mt-8 first:mt-0">
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.87]"
      alt={text}
    />
    <div className="self-stretch my-auto">{text}</div>
  </div>
);

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44c009b64e188ba545de851e3e682b3e552585275484dae6a9c78f32cd5ae477?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965",
    text: "Problem Solving"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ff31ff47eaf27b0ab2b8e4c6ed1c45e2956fd00e7708c676666e218e2f5911a?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965",
    text: "Strategic Growth"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62d8122eb1927ee65c1ef878b7d0581f71d77f47f7db7b251dcfa1001dc21c31?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965",
    text: "Enhanced Performance"
  }
];

function AboutSection() {
  return (
    <div className="flex flex-col px-32 py-16 bg-gray-50 max-md:px-5">
      <div className="flex flex-col self-center max-w-full text-center w-[548px]">
        <h2 className="text-5xl font-semibold text-blue-800 max-md:max-w-full max-md:text-4xl">
          About Imeleo
        </h2>
        <p className="mt-2 text-xl text-gray-500 max-md:max-w-full">
          Imeleo provides cutting-edge solutions and expert insights to drive
          your business success in the digital age.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f869b9be6aa8f81a90ee02138d5f66fd6b9116c86a0d8614a9c9ddb278af7b34?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
          className="object-contain grow shrink self-stretch my-auto rounded-2xl aspect-[1.1] min-w-[240px] w-[454px] max-md:max-w-full"
          alt="Imeleo company"
        />
        <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[475px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h3 className="w-full text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              <span className="text-gray-700">We Are Increasing </span>
              <span className="text-blue-800">Business</span>
              <span className="text-gray-700"> Success With </span>
              <span className="text-blue-800">Technology</span>
            </h3>
            <p className="mt-5 text-lg text-gray-600 max-md:max-w-full">
              At Imeleo, we use technology to help businesses grow, work
              smarter, and get better results. Our goal is to make it easier
              for companies to succeed in today's digital world.
            </p>
          </div>
          <div className="flex flex-col items-start mt-8 max-w-full text-3xl font-semibold text-gray-800 w-[363px]">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
          <button className="flex gap-2.5 justify-center items-center self-start px-9 py-5 mt-12 text-base font-bold text-center text-white bg-blue-800 rounded-lg max-md:px-5 max-md:mt-10">
            <span className="self-stretch my-auto">View More</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/036ed1d29452b9eb58f64a61f64cc3e17495a5efa4458ab7dddb5fe34332fffc?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.63] w-[15px]"
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;