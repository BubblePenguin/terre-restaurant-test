import Image from "next/image";

export default () => {
  return (
    <Image
      width={140}
      height={70}
      src="/about/res1.jpg"
      alt="restaurant"
      className="w-[140px] h-[70px] opacity-70 border-white border-[1px] hover:w-[160px] hover:h-[90px] hover:opacity-100"
    />
  );
};
