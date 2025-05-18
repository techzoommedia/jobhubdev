import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } : any = useContext(AppContext);
  const titleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current?.value,
      location: locationRef.current?.value,
    });
    setIsSearched(true)
    console.log({
        title: titleRef.current?.value,
        location: locationRef.current?.value,
      })
  };
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-[#0254DF] to-[#012B72] text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Explore 10,000+ Career Opportunities
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
       You’ve got skills.
We’ve got the openings.
Let’s connect the two. <br /> Join thousands of professionals finding roles that truly fit.
From startups to global brands — your next opportunity is waiting.
        </p>
        <div className="flex items-center justify-between bg-white max-w-xl  rounded text-gray-600 pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
            ref={titleRef}
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
            ref={locationRef}
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 px-6 py-2 text-white rounded m-1"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex ">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium ">Trusted by</p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
