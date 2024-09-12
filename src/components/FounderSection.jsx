
function FounderSection() {
  return (
    <div className="flex flex-wrap gap-10 px-32 pt-16 pb-28 bg-gray-50 max-md:px-5 max-md:pb-24">
      <div className="flex flex-col grow shrink justify-center min-w-[240px] w-[483px] max-md:max-w-full">
        <div className="flex flex-col w-full text-5xl font-semibold text-blue-800 max-w-[571px] max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full max-md:text-4xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63783f8892e2175877f10dff1826a89ea023f673234ab816b4431c534f96d1be?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
            />
            <div className="grow shrink self-stretch my-auto w-[492px] max-md:max-w-full max-md:text-4xl">
              Meet Our <span className="text-blue-800">Founder</span>
            </div>
          </div>
        </div>
        <div className="mt-10 text-2xl text-gray-600 max-md:max-w-full">
          With decades of industry experience,{" "}
          <span className="font-bold">Mayank</span> is a highly skilled software
          developer, solution architect and technology entrepreneur. He
          specializes in building modular and scalable cross platform software
          solutions.
          <br />
          <br />
          Over the past, he has worked with numerous business, helping them
          overcome complex business challenges by building innovative technology
          solutions.  Admired by clients, developers and designers alike, his
          entrepreneurial vision drives{" "}
          <span className="font-bold">Imeleo</span>, empowering businesses with
          cutting-edge technology solutions, thus fueling growth and innovation.
        </div>
      </div>
      <div className="flex flex-col grow shrink font-semibold min-w-[240px] w-[433px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ac918f4e0b54584323374112eb3893e99adb1a8c223d1f67ccf81350763c7cf?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
          className="object-contain max-w-full rounded-2xl aspect-[1.46] w-[541px]"
        />
        <div className="flex flex-col mt-8 max-w-full w-[436px]">
          <div className="flex gap-3.5 items-center self-start text-4xl text-blue-800">
            <div className="self-stretch my-auto w-[268px]">Mayank Mahajan</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e805e11232cc91ddc673befc3d645dc8ea29cbc006be314b00b529a4102e11?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            />
          </div>
          <div className="mt-1.5 text-2xl text-gray-800 max-md:max-w-full">
            Founder, Imeleo
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderSection;