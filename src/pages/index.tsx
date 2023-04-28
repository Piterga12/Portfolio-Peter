import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/menu";
import LowMenu from "../components/lowmenu";
import TextSquare from "../components/textsquare";
import SliderImages from "../components/sliderimages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
    console.log(background);
  };
  const images = [
    {
      src: "/image1.jpg",
      alt: "Image 1",
      width: 640,
      height: 360,
      link: "/projects/second",
    },
    {
      src: "/image2.jpg",
      alt: "Image 2",
      width: 640,
      height: 360,
      link: "/projects/second",
    },
    {
      src: "/image3.jpg",
      alt: "Image 3",
      width: 640,
      height: 360,
      link: "/projects/playwithme",
    },
    {
      src: "/image4.jpg",
      alt: "Image 4",
      width: 640,
      height: 360,
      link: "/projects/playwithme",
    },
  ];

  const background = isDark ? "/backgroundDark.mp4" : "/backgroundLight.mp4";

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Peter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="2jnM1AoXQEkKAfi-2hjdsjt14rkuRzDrkBMPwGtSPu8"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu isDark={isDark} handleToggle={handleToggle} />
      <main className="min-h-screen items-center justify-between bg-transparent">
        <video
          className="fixed z-[-1] w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={background} type="video/mp4" />
        </video>
        <div className="margin-top-16">
          <TextSquare>
            <p className="my-4 z-10">
              {`Hi, I'm Pedro González Anta Torrents Faura!`}
            </p>
            <p className="my-4 z-10">
              {`I'm a junior video game developer with a strong
              background in programming languages like C++ and experience using
              Unity to create exciting games. I'm passionate about game
              development, and my LinkedIn profile showcases my academic
              background, experience, and skills in this field.`}
            </p>
            <p className="my-4 z-10">
              {`Through my projects and internships, I have developed strong problem-solving
              and analytical skills that are essential in game programming. I also
              have experience working collaboratively in teams and meeting project
              deadlines, and I'm committed to delivering high-quality work.`}
            </p>
            <p className="my-4 z-10">
              {`In addition to my technical skills, 
              I'm fluent in Spanish, Catalan, and English, which can
              be a valuable asset for companies with international operations or
              clients. Overall, I'm a motivated and skilled video
              game developer with a strong work ethic and a commitment to
              delivering high-quality work. I'm excited to continue learning
              and growing in my field and to create games that entertain and
              inspire players.`}
            </p>
          </TextSquare>
        </div>
        <SliderImages images={images} />
      </main>
      <LowMenu />
    </>
  );
}
