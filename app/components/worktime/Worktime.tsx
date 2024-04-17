import Image from "next/image";
import WorktimeItem from "./WorktimeItem";

export default () => {
  return (
    <section className="w-full min-h-[750px] relative overflow-hidden px-[10px] tablet:px-[20px] desktop:px-[120px] py-[90px]">
      <Image
        width={863}
        height={657}
        src="/worktime/worktime-bg1.svg"
        alt=""
        className="absolute right-0 top-[-10px] z-0"
      />

      <Image
        width={863}
        height={657}
        src="/worktime/worktime-bg2.svg"
        alt=""
        className="absolute left-[-450px] top-[107px] z-0"
      />

      <div className="flex flex-col gap-[60px] ">
        <WorktimeItem
          imgsrc="/worktime/worktime1.jpg"
          title="RESTAURANT"
          worktimeList={[
            { title: "friday", text: "8AM – 11:30AM" },
            { title: "Saturday & Sunday", text: "9AM – 2:00PM" },
          ]}
          number={1}
        />
        <WorktimeItem
          imgsrc="/worktime/worktime2.jpg"
          title="CAFÉ"
          worktimeList={[
            { title: "Breakfast & Lunch", text: "Every day from 8AM – 3PM" },
          ]}
          number={2}
        />
      </div>
    </section>
  );
};
