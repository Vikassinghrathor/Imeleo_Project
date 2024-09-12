import { Link } from "react-router-dom"; // Make sure to have this import if using react-router-dom

function Navbar() {
  return (
    <div className="flex flex-wrap gap-10 justify-between items-center px-32 py-5 text-lg font-medium bg-blue-800 max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9dc789e4fe1e2c5bfe5a77a5e28a11d8ca43717b3d0274dcf73dcb05601396d?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
        className="object-contain shrink-0 self-stretch my-auto aspect-[2.85] w-[114px]"
        alt="Logo"
      />
      <div className="flex flex-wrap items-center self-stretch my-auto text-white min-w-[240px] max-md:max-w-full">
        {["Solutions", "Services", "About Us", "Careers", "Why Us", "Blogs"].map(
          (item, index) => (
            <Link
              to={`/${item.replace(/\s+/g, "").toLowerCase()}`} // Dynamically creating links, adjust according to your route structure
              key={index}
              className="gap-2.5 self-stretch px-6 py-3.5 my-auto whitespace-nowrap max-md:px-5"
            >
              {item}
            </Link>
          )
        )}
      </div>
      <div className="flex gap-3.5 items-center self-stretch py-3.5 pr-9 pl-5 my-auto text-gray-600 whitespace-nowrap bg-white rounded-3xl min-w-[240px] w-[261px] max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6fd3afb9ed7ea71b45b4ebd55bafb7fa87591d4f61ff0769171c59db2846a11?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Search Icon"
        />
        <input
          type="text"
          placeholder="Search"
          className="outline-none flex-1 bg-transparent my-auto"
        />
      </div>
    </div>
  );
}

export default Navbar;
