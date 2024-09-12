
const ContactInfo = ({ icon, content, isLink = false }) => (
  <div className="flex gap-3 items-center mt-4 first:mt-0 w-full whitespace-nowrap">
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 w-8 aspect-square"
      alt=""
    />
    {isLink ? (
      <a href={`mailto:${content}`} className="underline text-white w-full" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <div className="w-full text-white">{content}</div>
    )}
  </div>
);

function ContactSection() {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b92272d60e9d5677181ec602b1e16c8a605f4096aae54e339029099299e3f1b?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965",
      content: "+91-8873-33-8873"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/32991e881f6ce768402c02fcdf51a6291c2f2c82488d794fae20a94204b5f803?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965",
      content: "contact@imeleo.com",
      isLink: true
    }
  ];

  return (
    <section className="flex flex-col px-8 py-16 bg-gray-50 md:px-32">
      <div className="flex flex-col self-center max-w-full text-center w-full md:w-[548px]">
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-800">
          Contact Us
        </h2>
        <p className="mt-2 text-xl text-gray-500">
          Reach out to discuss how we can transform your business with tailored
          solutions and expert support.
        </p>
      </div>
      <div className="relative mt-12 md:mt-24 w-full">
        <div className="w-full bg-blue-800 rounded-[52px] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-16">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain w-full md:w-1/2 max-w-[512px] mb-8 md:mb-0"
              alt="Contact illustration"
            />
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                We help you to grow your business faster & easier.
              </h3>
              <p className="text-base text-gray-50 mb-6">
                Partner with us to simplify the path to your success. We'll make
                reaching your business goals faster and easier than ever.
              </p>
              <div className="flex flex-col mb-6">
                {contactDetails.map((detail, index) => (
                  <ContactInfo key={index} {...detail} />
                ))}
              </div>
              <button className="px-6 py-4 bg-white text-lg font-semibold text-blue-800 rounded-xl">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;