import { Inter } from "next/font/google";
import Menu from "../../components/menu";
import LowMenu from "../../components/lowmenu";
import Meta from "../../components/meta";

const inter = Inter({ subsets: ["latin"] });
const pdfUrl = "/PedroGA_CV.pdf";

export default function MyPDFViewer() {
  return (
    <>
      <Meta title="CV" description="Curriculum Vitae." />
      <Menu />
      <video
        className="fixed z-[-1] w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/videos/backgroundLight.mp4" type="video/mp4" />
      </video>
      <main className="flex flex-col items-center justify-between overflow-hidden">
        <div className="hidden h-screen w-screen sm:block">
          <embed
            className="h-full w-full"
            src={`/documents/${pdfUrl}`}
            type="application/pdf"
          />
        </div>
      </main>
      <LowMenu />
    </>
  );
}
