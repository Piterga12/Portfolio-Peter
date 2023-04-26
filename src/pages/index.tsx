import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/menu";
import TextSquare from "../components/textsquare";
import SliderImages from "../components/sliderimages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <Menu />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Portfolio de Peter González-Anta Torrents-Faura
        <div>
          <TextSquare>
            Hi, I&apos;m Pedro González Anta Torrents Faura! <br></br>
            <br></br> I&apos;m a junior video game developer with a strong
            background in programming languages like C++ and experience using
            Unity to create exciting games. I&apos;m passionate about game
            development, and my LinkedIn profile showcases my academic
            background, experience, and skills in this field. <br></br>Through
            my projects and internships, I have developed strong problem-solving
            and analytical skills that are essential in game programming. I also
            have experience working collaboratively in teams and meeting project
            deadlines, and I&apos;m committed to delivering high-quality work.
            In addition to my technical skills, <br></br>
            <br></br>I&apos;m fluent in Spanish, Catalan, and English, which can
            be a valuable asset for companies with international operations or
            clients. <br></br>Overall, I&apos;m a motivated and skilled video
            game developer with a strong work ethic and a commitment to
            delivering high-quality work. I&apos;m excited to continue learning
            and growing in my field and to create games that entertain and
            inspire players.
          </TextSquare>
        </div>
        <SliderImages images={images} />
      </main>
    </>
  );
}
