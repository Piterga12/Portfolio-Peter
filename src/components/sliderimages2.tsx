import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface SliderVideoProps {
  src: string;
  type: string; // Make 'type' required
  alt: string;
  link?: string;
}

interface SliderImagesProps {
  videos: SliderVideoProps[]; // Use 'videos' instead of 'images'
}

const SliderVideos: React.FC<SliderImagesProps> = ({ videos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(videos.length - 1);
  const [nextSlide, setNextSlide] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    setCurrentSlide(currentSlide === 0 ? videos.length - 1 : currentSlide - 1);
    setNextSlide(currentSlide);
    setPrevSlide(prevSlide === 0 ? videos.length - 1 : prevSlide - 1);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide + 1) % videos.length);
    setPrevSlide(currentSlide);
    setNextSlide((currentSlide + 2) % videos.length);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleTransitionEnd = () => {
    setIsMoving(false);
  };

  const handleVideoClick = (link: string | undefined) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-full text-center">
        {videos.map((video, index) => (
          <div key={index}>
            {videoLoaded && (
              <video
                autoPlay
                muted
                loop
                className={`absolute top-0 left-0 right-0 bottom-0 m-auto object-cover ${
                  index === currentSlide
                    ? "z-30 opacity-100 transition-all duration-1000 ease-in-out"
                    : index === prevSlide
                    ? "z-20 opacity-50 left-2/3 transition-all duration-1000 ease-in-out"
                    : index === nextSlide
                    ? "z-20 opacity-50 right-2/3 transition-all duration-1000 ease-in-out"
                    : "z-10 opacity-0"
                }`}
                onTransitionEnd={handleTransitionEnd}
                onClick={() => handleVideoClick(video.link)}
                onLoadedData={handleVideoLoad}
              >
                <source src={video.src} type={video.type} />
              </video>
            )}
            {!videoLoaded && (
              <Image
                src="/images/PlayWithMe.png" // Replace with the path to your placeholder image
                alt={video.alt}
                width={400} // Set the width you desire
                height={300} // Set the height you desire
              />
            )}
          </div>
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
      `}</style>
    </div>
  );
};

export default SliderVideos;
