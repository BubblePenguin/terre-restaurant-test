import Image from "next/image";
import { lora } from "../fonts";
import { montez } from "../fonts";
import HistoryImage from "./HistoryImage";

const History = () => {
  return (
    <section
      className="w-full pb-[690px] tablet:pb-[550px] desktop:pb-[430px] ldesktop:pb-[330px] overflow-hidden relative px-[10px] tablet:px-[20px] desktop:px-[120px] py-[100px] text-black"
      id="about"
      key="about"
    >
      <Image
        src="/about/bg-history.svg"
        width={1407}
        height={1434}
        alt=""
        className="absolute left-[-200px] bottom-[-200px] "
      ></Image>
      <div className="flex flex-col items-end text-[14px] tablet:text-[17px] desktop:text-[20px]">
        <div className="flex justify-between flex-col desktop:flex-row-reverse w-full desktop:items-center">
          <h3
            className={`${montez.className} text-[17px] tablet:text-[20px] desktop:text-[22px] text-mint normal-case`}
          >
            We could not be prouder to be.
          </h3>
          <h2
            className={`lowercase ${lora.className} text-[40px] tablet:text-[50px] desktop:text-[60px]`}
          >
            Our history
          </h2>
        </div>
        <div className="flex flex-col w-full desktop:w-[600px] ldesktop:w-[768px] gap-[40px] items-start desktop:items-end">
          <p className="">
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
          <button className="w-full h-[50px] tablet:w-[280px] tablet:h-[56px] desktop:w-[300px] desktop:h-[60px] border-mint border-2 hover:bg-mint font-bold lowercase hover:text-white">
            Read the full enRoute story
          </button>
        </div>

        <HistoryImage
          src="/about/history.jpg"
          width={460}
          height={500}
          classes="z-20 desktop:z-10 tablet:left-auto tablet:right-[0px] scale-125 tablet:scale-100 left-0 right-0 w-[460px] h-[500px] m-auto tablet:m-0 tablet:left-[65px] bottom-[70px] desktop:w-400 desktop:h-450 desktop:left-[65px] desktop:bottom-[90px] rotate-[-12deg] ldesktop:left-[70px] ldesktop:bottom-[100px]"
        />
        <HistoryImage
          src="/about/history.jpg"
          width={400}
          height={320}
          classes="tablet:z-10 z-20 hidden tablet:block right-auto left-[60px] rotate-[12deg] desktop:left-[450px] bottom-[5px]"
        />
      </div>
    </section>
  );
};

export default History;
