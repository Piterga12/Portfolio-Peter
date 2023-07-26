import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

interface SliderImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  link?: string;
}

interface SliderImagesProps {
  images: SliderImageProps[];
}

const SliderImages: React.FC<SliderImagesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(images.length - 1);
  const [nextSlide, setNextSlide] = useState(1);
  const [isMoving, setIsMoving] = useState(false);

  const handleNext = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    setNextSlide(currentSlide);
    setPrevSlide(prevSlide === 0 ? images.length - 1 : prevSlide - 1);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
    setPrevSlide(currentSlide);
    setNextSlide((currentSlide + 2) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleTransitionEnd = () => {
    setIsMoving(false);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full text-center">
        {images.map((image, index) => (
          <a key={index} href={image.link}>
            <Image
              src={image.src}
              alt={image.alt}
              className={`absolute top-0 left-0 right-0 bottom-0 m-auto object-cover ${
                index === currentSlide
                  ? "z-30 opacity-100 transition-all duration-1000 ease-in-out"
                  : index === prevSlide
                  ? "z-20 opacity-50 left-2/3 transition-all duration-1000 ease-in-out"
                  : index === nextSlide
                  ? "z-20 opacity-50 right-2/3 transition-all duration-1000 ease-in-out"
                  : "z-10 opacity-0"
              }`}
              width={image.width}
              height={image.height}
              onTransitionEnd={handleTransitionEnd}
            />
          </a>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full pointer-events-none">
        <button
          className="bg-gray-800 text-white p-2 rounded-full button pointer-events-auto"
          onClick={handlePrev}
        >
          <span className="sr-only">Previous</span>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="bg-gray-800 text-white p-2 rounded-full button pointer-events-auto"
          onClick={handleNext}
        >
          <span className="sr-only">Next</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <style jsx>{`
        .button:hover {
          background-color: #4a5568;
        }

        .opacity-100 {
          opacity: 1;
        }

        .opacity-50 {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default SliderImages;
