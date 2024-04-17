import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { arsenal } from "./components/fonts";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "terre restaurant",
  description: "test task for a company that sells everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <GoogleTagManager gtmId="GTM-T8LWJZVD" />
      <body
        className={`${arsenal.className} flex flex-col items-center justify-between`}
      >
        <main
          className={`relative m-auto flex min-h-screen flex-col w-full desktop:w-desktop ldesktop:w-ldesktop`}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
