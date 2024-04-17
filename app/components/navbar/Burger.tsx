"use client";
import { useState } from "react";
import Image from "next/image";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="burger"
        className="desktop:hidden size-[50px] bg-white flex flex-col border-2 border-black rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      <div
        className={`box-border absolute w-full ${
          !isOpen ? "hidden" : "flex"
        } top-[75px] left-0 right-0 flex-col justify-between  bg-white text-black text-[20px] px-[10px] teblet:px-[20px] py-[20px] tablet:py-[30px]`}
      >
        <div className="flex flex-col gap-[20px] text-left w-full">
          <a href="" className="hover:underline focus:underline h-[39px]">
            menu
          </a>
          <a
            href="#booking"
            className="hover:underline focus:underline h-[39px]"
          >
            book now
          </a>
          <a href="" className="hover:underline focus:underline h-[39px]">
            gift cards
          </a>
        </div>
        <div className="flex justify-between py-[20px]">
          <div className="flex gap-[20px]">
            <a
              href=""
              className="size-[40px] bg-black  flex items-center justify-center fill-white hover:bg-white hover:fill-black focus:bg-white focus:fill-black"
            >
              <svg className=" h-auto w-[24px]">
                <use href="/nav/icons.svg#icon-yt"></use>
              </svg>
            </a>
            <a
              href=""
              className="size-[40px] bg-black flex items-center justify-center fill-white  hover:bg-white hover:fill-black  focus:bg-white focus:fill-black"
            >
              <svg className="h-[24px] w-auto">
                <use href="/nav/icons.svg#icon-inst"></use>
              </svg>
            </a>
          </div>

          <a
            href=""
            className="hover:underline focus:underline h-[39px] flex items-center"
          >
            <Image
              src="/flags/france.jpg"
              height={26}
              width={40}
              alt="flag"
            ></Image>
          </a>
        </div>
      </div>
    </>
  );
};
