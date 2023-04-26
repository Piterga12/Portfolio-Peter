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
  link: string;
}

interface SliderImagesProps {
  images: SliderImageProps[];
}

const SliderImages: React.FC<SliderImagesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(images.length - 1);
  const [nextSlide, setNextSlide] = useState(1);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
    setPrevSlide(currentSlide);
    setNextSlide((currentSlide + 2) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    setPrevSlide((currentSlide - 1 + images.length) % images.length);
    setNextSlide(currentSlide);
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
            {index === currentSlide && (
              <Image
                src={image.src}
                alt={image.alt}
                className={`transition-opacity duration-1000 ease-in-out absolute top-0 left-0 right-0 bottom-0 m-auto`}
                width={image.width}
                height={image.height}
                objectFit="cover"
                style={{ margin: "0 auto", zIndex: 2 }}
              />
            )}
            {index === prevSlide && (
              <Image
                src={image.src}
                alt={image.alt}
                className={`transition-opacity duration-1000 ease-in-out absolute top-0 left-0 bottom-0 opacity-25`}
                width={image.width}
                height={image.height}
                objectFit="cover"
                style={{ zIndex: 1 }}
              />
            )}
            {index === nextSlide && (
              <Image
                src={image.src}
                alt={image.alt}
                className={`transition-opacity duration-1000 ease-in-out absolute top-0 right-0 bottom-0 opacity-25`}
                width={image.width}
                height={image.height}
                objectFit="cover"
                style={{ zIndex: 1 }}
              />
            )}
          </a>
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
        <button
          className="bg-gray-800 text-white p-2 rounded-full button"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="bg-gray-800 text-white p-2 rounded-full button"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <style jsx>{`
        .button:hover {
          background-color: #4a5568;
        }
      `}</style>
    </div>
  );
};

export default SliderImages;
