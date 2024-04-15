import Image from "next/image";

export default () => {
  return (
    <footer className="w-ldesktop py-[80px] text-white bg-black">
      <div className="w-[1360px] m-auto flex justify-between">
        <div className="flex flex-col">
          <a href="">
            <Image src="/logo.svg" width={240} height={62} alt="logo" />
          </a>
        </div>
        <div className="flex gap-[80px]">
          <div className="flex flex-col">
            <h3 className="mb-[20px]">sitemap</h3>
            <a href="">Menu</a>
            <a href="">Book now</a>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-[20px]">Adress</h3>
            <a href="">125 water streetst. john’s,{<br />} nl a1c 5x4</a>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-[20px]">contacts</h3>
            <a href="tel:+7093832136">+7 09 383 2136</a>
            <a href="mailto:info@terrerestaurant.com">
              info@terrerestaurant.com
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-[20px]">Other</h3>
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
