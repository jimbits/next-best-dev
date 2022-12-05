import Image from "next/image";
import bannerImage from "./../../public/banner.png";

function LandingPageHeader() {
  return (
    <header className=" py-10 px-4 bg-gradient-to-r from-rose-100 to-teal-100">
      <figure className="flex flex-col justify-center items-center   md:flex-row   md:justify-center md:gap-8   "
      >
        <figcaption className="text-center md:text-left">     
          <h1 
          className="  text-2xl font-semibold md:text-3xl  lg:text-5xl xl:text-6xl text-indigo-600">
           <span className="block  -mt-1">You Have Opportunities.</span> We Have Developers 
          </h1>

          <p className="font-light text-base md:text-xl mb-6  md:mt-1  lg:mt-4 lg:text-xl text-indigo-800">
            Find The Perfect Match 
            <span className=" block  -m-1 sm:inline sm:m-0"> On Next Best Dev</span>
          </p>
        </figcaption>

        <Image
          className="w-full sm:w-2/3 md:w-5/12 lg:w-5/12"
          src={bannerImage}
          alt="next best developer hiring thinng"
          priority={true}

        />
      </figure>
    </header>
  );
}

export default LandingPageHeader;
