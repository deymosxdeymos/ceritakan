import { useState, useRef, useEffect } from "react";
import depresi from "../../../assets/depresi.png";
import stress from "../../../assets/stress.png";
import tidur from "../../../assets/tidur.png";
import kecemasan from "../../../assets/kecemasan.png";
import fobia from "../../../assets/fobia.png";
import skizo from "../../../assets/skizo.png";

import styles from "./BenefitsSection.module.css";

interface BenefitsSection {
  className?: string;
}

export const BenefitsSection: React.FC<BenefitsSection> = ({ className }) => {
  const cardContent = [
    { image: depresi, title: "Depresi" },
    { image: tidur, title: "Gangguan Tidur" },
    { image: stress, title: "Stress" },
    { image: kecemasan, title: "Kecemasan" },
    { image: fobia, title: "Fobia" },
    { image: skizo, title: "Skizofrenia" },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContent = scrollRef.current;
      if (isPaused) {
        scrollContent.style.animationPlayState = "paused";
      } else {
        scrollContent.style.animationPlayState = "running";
      }
    }
  }, [isPaused]);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center px-4 md:px-16 py-12 md:py-24 mb-12 md:mb-36 ${className}`}
    >
      {/* Content Section */}
      <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
        <h1 className="text-2xl md:text-4xl md:tracking-widest md:leading-relaxed text-primary font-extrabold mb-2">
          Apa yang menjadikan kami lebih baik dari yang lain?
        </h1>
        <p className="text-base md:text-lg font-semibold text-gray-600 md:leading-loose">
          Sistem kecerdasan buatan ini dirancang untuk memahami dan memberikan
          arahan yang sesuai guna membantu Anda menghadapi segala macam
          tantangan hidup.
        </p>
      </div>

      {/* Horizontal Scrolling Container */}
      <div
        className={`${styles.scrollContainer} w-full lg:w-1/2 overflow-hidden`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className={`${styles.scrollContent} flex whitespace-nowrap`}
        >
          <div className="inline-flex space-x-4">
            {cardContent.map((card, index) => (
              <div
                key={index}
                className="bg-secondary rounded-2xl my-4 h-[300px] md:h-[407px] w-[200px] md:w-[287px] shadow-lg flex flex-col items-center justify-center"
              >
                <div className="h-[200px] md:h-[300px] flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={`${card.title} illustration`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary">
                  {card.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
