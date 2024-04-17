import Image from "next/image";
import { lora } from "../fonts";
import GalleryMenuItem from "./GalleryMenuItem";

export default () => {
  return (
    <section
      className={`w-full h-[750px] relative text-white ${lora.className}`}
    >
      <Image
        width={1600}
        height={750}
        src="/about/res1.jpg"
        alt="restaurant"
        className="w-full h-full object-cover"
      />
      <div className="absolute flex flex-col gap-[20px] tablet:flex-row px-[10px] tablet:px-[20px] desktop:px-[120px]  bottom-[60px] justify-between h-[90px] items-start tablet:items-center w-full">
        <h3 className="text-[20px] tablet:text-[30px] desktop:text-[50px] lowercase">
          Text abouT photo#1
        </h3>
        <div className="flex gap-[10px] items-center w-full tablet:w-auto">
          <GalleryMenuItem />
          <GalleryMenuItem />
          <GalleryMenuItem />
          <GalleryMenuItem />
        </div>
      </div>
    </section>
  );
};
