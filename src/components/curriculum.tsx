import { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between overflow-hidden">
      <h2 className="mt-16 font-oswald text-slate-900 underline text-4xl z-10">
        Curriculum
      </h2>
      {isSmallScreen ? (
        <a
          href={`/documents/${pdfUrl}`}
          download
          className="my-8 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer transition-colors duration-300"
        >
          Download Curriculum (PDF)
        </a>
      ) : (
        <embed
          className="my-8 h-screen w-full sm:w-2/3"
          src={`/documents/${pdfUrl}#zoom=25`}
          type="application/pdf"
        />
      )}
    </div>
  );
};

export default PDFViewer;
