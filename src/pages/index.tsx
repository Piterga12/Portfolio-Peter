import { Inter } from "next/font/google";
import Menu from "../components/menu";
import LowMenu from "../components/lowmenu";
import TextWithPicture from "../components/textwithpicture";
import PDFViewer from "../components/curriculum";
import ContactMe from "../components/contactme";
import TextSquare from "../components/textsquare";
import SliderImages from "../components/sliderimages";
import SliderImages2 from "../components/sliderimages2";
import Meta from "../components/meta";
import { textList } from "../components/texts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const videos = [
    {
      src: "/videos/PlayWithMeIntro.mp4",
      type: "video/mp4",
      alt: "Play with Me",
      link: "/projects/playwithme",
    },
    {
      src: "/videos/StarFallRebellionIntro.mp4",
      type: "video/mp4",
      alt: "StarFallRebellion",
      link: "https://starfall-rebellion.vercel.app/",
    },
    {
      src: "/videos/MusicHeadIntro.mp4",
      type: "video/mp4",
      alt: "MusicHead",
      link: "/projects/musichead",
    },
  ];

  const packages = [
    {
      pictureSrc: "/images/StarFall.png",
      alt: "Lego Star Wars: StarFall Rebellion",
      text: "Lego Star Wars: StarFall Rebellion",
      text2: "C++ Programmer",
      link: "https://starfall-rebellion.vercel.app/",
    },
    {
      pictureSrc: "/images/Axolotl.png",
      alt: "Axolotl Engine",
      text: "Axolotl Engine",
      text2: "C++ Programmer",
      link: "https://horizons-games.vercel.app/es",
    },
    {
      pictureSrc: "/images/PlayWithMe.png",
      alt: "Play with Me",
      text: "Play With Me",
      text2: "C# Programmer",
      link: "/projects/playwithme",
    },
    {
      pictureSrc: "/images/musicHead.png",
      alt: "Music head",
      text: "MusicHead",
      text2: "C# Programmer",
      link: "/projects/musichead",
    },
    {
      pictureSrc: "/images/musicHead.png",
      alt: "Music head",
      text: "MusicHead",
      text2: "C# Programmer",
      link: "/projects/musichead",
    },
    // Add more packages as needed
  ];

  return (
    <>
      <Meta title="Portfolio" description="Portfolio Peter." />
      <Menu />
      <main className="min-h-screen items-center justify-between bg-transparent">
        <video
          className="fixed z-[-1] w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/backgroundLight.mp4" type="video/mp4" />
        </video>
        <SliderImages2 videos={videos} />
        <div>
          <p className="font-zyzol invisible text-4xl">Space</p>
        </div>
        <div className="bg-slate-900">
          <p className="font-zyzol invisible text-4xl">Space</p>
        </div>
        <div id="about" className="margin-top-16">
          <TextSquare>
            {textList[0]}
            {textList[1]}
            {textList[2]}
            {textList[3]}
          </TextSquare>
        </div>
        <div id="projects">
          <TextWithPicture packages={packages} />
        </div>
        <div id="curriculum" className="bg-white">
          <PDFViewer pdfUrl="PedroGA_CV.pdf" />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
      </main>
      <LowMenu />
    </>
  );
}
