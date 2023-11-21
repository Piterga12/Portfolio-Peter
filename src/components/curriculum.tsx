import { Inter } from "next/font/google";
import Menu from "./menu";
import LowMenu from "./lowmenu";
import Meta from "./meta";

const inter = Inter({ subsets: ["latin"] });

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => (
  <>
    <div className="flex flex-col items-center justify-between overflow-hidden">
      <h2 className="mt-16 font-oswald text-slate-900 underline text-4xl z-10">
        Curriculum
      </h2>
      <embed
        className="my-8 h-screen w-full sm:w-2/3"
        src={`/documents/${pdfUrl}#zoom=25`}
        type="application/pdf"
      />
    </div>
  </>
);

export default PDFViewer;
