
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
  } from "react-icons/ai";
  function BioHeader({ fullName, city, heading }) {
    return (
      <header className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold   text-zinc-800">
        I’m {fullName} I live in {city}, Where I'm The  {heading}
        </h1>
        <p className="mt-6 text-base text-zinc-600 ">
          Organic meggings sus, lo-fi adaptogen prism hammock sartorial. Everyday
          carry sartorial brunch, cliche YOLO umami etsy hoodie ennui narwhal
          venmo cornhole. Ugh kitsch art party asymmetrical pitchfork shabby chic.
          VHS microdosing sartorial, umami seitan raclette chia photo booth
          tousled listicle narwhal poutine banjo tattooed. Coloring book keytar
          trust fund lomo.
        </p>
        <ul className="mt-6 flex gap-6">
          <li aria-label="Follow on Twitter">
            <AiOutlineTwitter className="text-xl fill-slate-500" />
          </li>
          <li aria-label="Follow on Instagram">
            <AiOutlineInstagram className="text-xl fill-slate-500" />
          </li>
          <li aria-label="Follow on GitHub">
            <AiOutlineGithub className="text-xl fill-slate-500" />
          </li>
          <li aria-label="Follow on LinkedIn">
            <AiFillLinkedin className="text-xl fill-slate-500" />
          </li>
         
        </ul>
      </header>
    );
  }
  
  export default BioHeader;
  