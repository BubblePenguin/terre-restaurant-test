import { lora } from "../fonts";

export default () => {
  return (
    <div className="w-full bg-[url('/restaurant-1.jpg')] h-[750px] flex flex-col justify-end p-[120px]  text-white">
      <h1 className={`${lora.className} text-[120px]`}>terre restaurant</h1>
      <div className="flex gap-[34px] items-center flex-row text-[22px]">
        <button className="w-[120px] h-[120px] bg-white text-black rounded-full hover:bg-transparent hover:text-white hover:border-2  border-white uppercase">
          <span>about{<br />}us</span>
        </button>
        <p className="">
          We have beautiful and fun things coming up on the patio this summer.
          {<br />}
          Now it only needs to… be summer. To be continued!
        </p>
      </div>
      <div></div>
    </div>
  );
};
