import Image from "next/image";
import { montez } from "../fonts";
import { lora } from "../fonts";

type prop = {
  imgsrc: string;
  title: string;
  worktimeList: worktimeType[];
  number: number;
};

type worktimeType = {
  title: string;
  text: string;
};

const worktimeItem = (item: worktimeType) => {
  return (
    <div className="flex items-center gap-[12px]">
      <Image width={50} height={50} src="/worktime/logo.svg" alt="" />
      <p className="lowercase text-[17px] tablet:text-[20px] desktop:text-[22px]">
        <span className="font-bold">{item.title + ": "}</span> {item.text}
      </p>
    </div>
  );
};

export default (props: prop) => {
  const { imgsrc, title, worktimeList, number } = props;

  const text = (
    <div className="z-10 flex justify-end flex-col grow">
      <h3
        className={`${montez.className} text-[17px] tablet:text-[20px] desktop:text-[22px] text-mint normal-case`}
      >
        Work time
      </h3>
      <h2
        className={`lowercase ${lora.className} text-[40px] tablet:text-[50px] desktop:text-[60px]`}
      >
        {title}
      </h2>
      <div className="flex flex-row  desktop:flex-col gap-[60px] desktop:gap-[30px]">
        {worktimeList.map(worktimeItem)}
      </div>
    </div>
  );

  const image = (
    <Image
      src={imgsrc}
      width={650}
      height={500}
      alt=""
      className={`w-full desktop:w-[650px] h-auto z-10`}
    />
  );

  return (
    <div
      key={number}
      className="flex desktop:flex-row justify-between flex-col desktop:odd:flex-row-reverse gap-[60px]"
    >
      {text}
      {image}
    </div>
  );
};
