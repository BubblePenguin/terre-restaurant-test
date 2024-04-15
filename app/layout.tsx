import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { arsenal } from "./components/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${arsenal.className} flex flex-col items-center justify-between`}
      >
        <Navbar />
        <main className={`m-auto flex min-h-screen flex-col  w-ldesktop`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
