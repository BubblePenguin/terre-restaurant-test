import { lora } from "../fonts";

const Hero = () => {
  return (
    <section className="w-full bg-center bg-cover bg-[url('/restaurant-1.jpg')] h-[500px] tablet:h-[535px] desktop:h-[750px] flex flex-col justify-end pb-[50px] px-[10px] tablet:pb-[70px] tablet:px-[20px] desktop:p-[120px]  text-white">
      <h1
        className={`${lora.className} text-[50px] tablet:text-[70px] desktop:text-[120px]`}
      >
        terre restaurant
      </h1>
      <div className="flex gap-[34px] items-start tablet:items-center flex-col-reverse tablet:flex-row tablet:text-[17px] desktop:text-[22px]">
        <button className="desktop:size-[120px] tablet:size-[80px] size-[70px] bg-white text-black rounded-full hover:bg-transparent hover:text-white hover:border-2  border-white uppercase">
          <span>about{<br />}us</span>
        </button>
        <p className="text-[14px] tablet:text-[17px] desktop:text-[22px]">
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
