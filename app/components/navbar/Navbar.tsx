import Image from "next/image";
import Burger from "./Burger";

const NavBar = () => {
  return (
    <nav className="absolute left-0 right-0 bg-transparent w-auto desktop:w-desktop ldesktop:w-ldesktop h-32 text-white text-[20px] px-[10px] tsblet:px-[20px] desktop:px-[120px]">
      <div className="m-auto pt-3 tablet:pt-5 desktop:pt-6 flex flex-col justify-between h-full">
        <div className="border-b-2 border-solid border-white border-opacity-40 flex justify-between items-center h-full">
          <div>
            <a href="">
              <Image
                src="/logo.svg"
                width={147}
                height={38}
                alt="logo"
                className="w-[120px] tablet:w-[130px] desktop:w-[147px] h-auto"
              />
            </a>
          </div>
          <div className="hidden desktop:flex gap-[50px] items-center">
            <a href="" className="hover:underline focus:underline">
              menu
            </a>
            <a href="#booking" className="hover:underline focus:underline">
              book now
            </a>
            <a href="" className="hover:underline focus:underline">
              gift cards
            </a>
            <a href="" className="hover:underline focus:underline">
              <Image
                src="/flags/france.jpg"
                height={16}
                width={24}
                alt="flag"
              ></Image>
            </a>
          </div>
          <Burger />
        </div>
        <div className="flex justify-end h-full items-center gap-[20px]">
          <div className=" h-[24px] tablet:h-[30px] border-r-2 border-opacity-40 border-solid border-white"></div>
          <p className="text-sm tablet:text-base desktop:text-xl">
            125 Water street st. john&apos;s, nl 709 383 2136t
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
