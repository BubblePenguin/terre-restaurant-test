import Image from "next/image";
import { lora } from "../fonts";
import { montez } from "../fonts";

export default () => {
  return (
    <section
      className="w-full h-[850px] overflow-hidden relative px-[120px] py-[100px] text-black"
      id="about"
    >
      <Image
        src="/about/bg-history.svg"
        width={1407}
        height={1434}
        alt=""
        className="absolute left-[-200px] bottom-[-200px]"
      ></Image>
      <div className="flex justify-between">
        <h2 className={`lowercase ${lora.className} text-[60px]`}>
          Our history
        </h2>
        <div className="flex flex-col items-end w-[768px] gap-[40px]">
          <h3
            className={`${montez.className} text-[22px] text-mint normal-case`}
          >
            We could not be prouder to be.
          </h3>
          <p className="text-[20px]">
            It only took one visit to Newfoundland & Labrador for Chef Matthew
            Swift to pack-up everything he owned and make St. John’s his new
            home. Heading kitchens in Ontario and Quebec restaurants, including
            Montreal institution Joe Beef, for two decades was the perfect
            primer for Matthew to break out on his own. Inspired by the
            provinces people, food, produce, history and jaw-dropping
            landscapes, Matthew and his incredible team have created a welcoming
            comfortable space that reflects and respects it’s environment. In
            2021, Terre was selected as one of ‘Canada’s Best New Restaurants’
            by enRoute Magazine’s expert food panel. We could not be prouder to
            be part of this prestigious list.
          </p>
          <button className="w-[300px] h-[60px] border-mint border-2 hover:bg-mint font-bold lowercase hover:text-white">
            Read the full enRoute story
          </button>
        </div>

        <Image
          src="/about/history.jpg"
          width={460}
          height={500}
          alt=""
          className="absolute left-[113px] bottom-[100px] rotate-[-12deg] object-cover	w-[460px] h-[500px] "
        ></Image>
        <Image
          src="/about/history.jpg"
          width={400}
          height={320}
          alt=""
          className="absolute left-[600px] bottom-[40px] rotate-[12deg] w-[400px] h-[320px]  object-cover	"
        ></Image>
      </div>
    </section>
  );
};
