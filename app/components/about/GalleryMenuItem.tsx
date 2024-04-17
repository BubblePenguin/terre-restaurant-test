import Image from "next/image";

export default () => {
  return (
    <Image
      width={140}
      height={70}
      src="/about/res1.jpg"
      alt="restaurant"
      className="object-cover grow min-w-[70px] h-[auto]] tablet:w-[100px] tablet:h[50px] desktop:w-[140px] desktop:h-[70px] opacity-70 border-white border-[1px] hover:scale-110 hover:opacity-100"
    />
  );
};
