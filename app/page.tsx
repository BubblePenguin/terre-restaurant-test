import Hero from "./components/hero/Hero";
import Booking from "./components/booktable/Booking";
import About from "./components/about/About";
import Worktime from "./components/worktime/Worktime";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Worktime />
      <Booking />
      <GoogleTagManager gtmId="GTM-T8LWJZVD" />
    </>
  );
}
