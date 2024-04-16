import Image from "next/image";

export default () => {
  return (
    <nav className="absolute bg-transparent top-0 w-ldesktop h-[125px] min-w-20 py-auto text-white text-[20px]">
      <div className="m-auto w-[1360px] mt-[24px] flex flex-col justify-between h-full">
        <div className="border-b-2 border-solid border-white border-opacity-40 flex justify-between items-center h-full">
          <div>
            <a href="">
              <Image src="/logo.svg" width={147} height={38} alt="logo" />
            </a>
          </div>
          <div className="flex gap-[50px] items-center">
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
        </div>
        <div className="flex justify-end h-full items-center gap-[20px]">
          <div className="h-[30px] border-r-2 border-opacity-40 border-solid border-white"></div>
          <p>125 Water street st. john's, nl 709 383 2136t</p>
        </div>
      </div>
    </nav>
  );
};
