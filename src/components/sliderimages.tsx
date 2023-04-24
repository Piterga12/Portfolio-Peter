import { useState, useEffect } from "react";
import Image from "next/image";

interface SliderImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  link: string;
}

interface SliderImagesProps {
  images: SliderImageProps[];
}

const SliderImages: React.FC<SliderImagesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-96">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full text-center">
        {images.map((image, index) => (
          <a key={index} href={image.link}>
            <div className="max-w-640 max-h-640 mx-auto">
              <Image
                src={image.src}
                alt={image.alt}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000 ease-in-out absolute top-0 left-0 right-0 bottom-0 m-auto`}
                layout="fixed"
                width={image.width}
                height={image.height}
                objectFit="cover"
                onClick={() => window.open(image.link, "_blank")}
              />
            </div>
          </a>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
        <button
          className="p-2 bg-gray-800 text-white mr-2"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button className="p-2 bg-gray-800 text-white" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SliderImages;
