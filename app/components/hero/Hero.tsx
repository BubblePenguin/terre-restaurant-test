import { lora } from "../fonts";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" relative w-full h-[500px] tablet:h-[535px] desktop:h-[750px] flex flex-col justify-end pb-[50px] px-[10px] tablet:pb-[70px] tablet:px-[20px] desktop:p-[120px]  text-white">
      <Image
        width={1600}
        height={750}
        src="/restaurant-1.jpg"
        alt=""
        className="absolute w-full h-full object-cover left-0 right-0 top-0 bottom-0 z-0"
      />
      <h1
        className={`${lora.className} text-[50px] tablet:text-[70px] desktop:text-[120px] z-10`}
      >
        terre restaurant
      </h1>
      <div className="z-10 flex gap-[34px] items-start tablet:items-center flex-col-reverse tablet:flex-row tablet:text-[17px] desktop:text-[22px]">
        <button className="z-10 desktop:size-[120px] tablet:size-[80px] size-[70px] bg-white text-black rounded-full hover:bg-transparent hover:text-white hover:border-2  border-white uppercase">
          <span>about{<br />}us</span>
        </button>
        <p className="z-10 text-[14px] tablet:text-[17px] desktop:text-[22px]">
          We have beautiful and fun things coming up on the patio this summer.
          {<br />}
          Now it only needs to… be summer. To be continued!
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
