import Image from "next/image";

export default () => {
  return (
    <footer className="w-full desktop:w-desktop ldesktop:w-ldesktop py-[80px] text-white bg-black px-[10px] tsblet:px-[20px] desktop:px-[120px]">
      <div className="m-auto flex flex-col items-center gap-[40px] desktop:gap-0 desktop:items-start desktop:flex-row justify-center desktop:justify-between w-full">
        <div className="flex flex-col">
          <a href="">
            <Image src="/logo.svg" width={240} height={62} alt="logo" />
          </a>
        </div>
        <div className="flex gap-[30px] tablet:gap-[80px] flex-wrap tablet:flex-nowrap">
          <div className="flex flex-col grow">
            <h3 className="mb-[20px]">sitemap</h3>
            <a href="">Menu</a>
            <a href="#booking">Book now</a>
          </div>
          <div className="flex flex-col grow">
            <h3 className="mb-[20px]">Adress</h3>
            <a href="">125 water streetst. john’s,{<br />} nl a1c 5x4</a>
          </div>
          <div className="flex flex-col grow">
            <h3 className="mb-[20px]">contacts</h3>
            <a href="tel:+7093832136">+7 09 383 2136</a>
            <a href="mailto:info@terrerestaurant.com">
              info@terrerestaurant.com
            </a>
          </div>
          <div className="flex flex-col grow">
            <h3 className="mb-[20px]">Other</h3>
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
