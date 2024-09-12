
function ContactSection() {
  return (
    <div className="flex flex-col px-32 py-16 bg-gray-50 max-md:px-5">
      <div className="flex flex-col self-center max-w-full text-center w-[548px]">
        <div className="text-5xl font-semibold text-blue-800 max-md:max-w-full max-md:text-4xl">
          Contact Us
        </div>
        <div className="mt-2 text-xl text-gray-500 max-md:max-w-full">
          {" "}
          Reach out to discuss how we can transform your business with tailored
          solutions and expert support.
        </div>
      </div>
      <div className="flex relative flex-col items-start mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex z-0 self-stretch w-full bg-blue-800 min-h-[461px] rounded-[52px] max-md:max-w-full" />
        <div className="flex absolute z-0 flex-col max-w-full bottom-[51px] right-[85px] w-[551px]">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                We help you to grow your business faster & easier.
              </div>
              <div className="mt-2 text-base text-gray-50 max-md:max-w-full">
                Partner with us to simplify the path to your success. We'll make
                reaching your business goals faster and easier than ever
              </div>
            </div>
            <div className="flex flex-col mt-6 max-w-full text-3xl font-semibold text-white min-h-[87px] w-[329px]">
              <div className="flex gap-3 items-end w-full whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b92272d60e9d5677181ec602b1e16c8a605f4096aae54e339029099299e3f1b?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
                  className="object-contain shrink-0 w-8 aspect-square"
                />
                <div className="w-[285px]">+91-8873-33-8873</div>
              </div>
              <div className="flex gap-3 items-center mt-4 w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/32991e881f6ce768402c02fcdf51a6291c2f2c82488d794fae20a94204b5f803?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
                  className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                />
                <div className="self-stretch my-auto underline w-[285px]">
                  <a
                    href="mailto:contact@imeleo.com"
                    className="underline"
                    target="_blank"
                  >
                    contact@imeleo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-8 w-full text-lg font-semibold text-blue-800 max-md:max-w-full">
            <div className="gap-2.5 self-stretch px-6 py-4 bg-white rounded-xl max-md:px-5">
              Contact Us
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43746ccbfd67f8bc354d0da6febae13a46f2bc824fa805c675f00bdad1e2971e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
          className="object-contain absolute left-px z-0 max-w-full aspect-[0.85] h-[600px] top-[-138px] w-[512px]"
        />
      </div>
    </div>
  );
}

export default ContactSection;