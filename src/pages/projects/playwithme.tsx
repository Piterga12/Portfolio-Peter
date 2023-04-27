import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Menu from "../../components/menu";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };
  const background = isDark ? "/backgroundDark.gif" : "/backgroundLight.gif";
  return (
    <>
      <Menu isDark={isDark} handleToggle={handleToggle} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          Play with Me
          <Link href={"/"}> Go Back</Link>
        </div>
      </main>
      <style jsx>{`
        .animate-gradient {
          background-image: url(${background});
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  );
}
