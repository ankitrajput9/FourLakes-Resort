import React from "react";
import SplitText from "../components/Texts/SplitText";
import Section from "../components/Section";
import TiltedCard from "@/components/cards/TiltedCard";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <Section id="hero" bg="/images/main3.jpg" speed={0.25}>
      <div className="w-full h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-10 lg:px-20 gap-12">

        {/* LEFT TEXT BLOCK */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2">

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-green-950 leading-tight mb-4">
            <SplitText
              text="Welcome to Four Lakes"
              className="font-extrabold"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
       <div className="flex flex-col justify-center items-center">
          <p className="max-w-md text-center sm:max-w-lg text-black/80 text-lg sm:text-xl md:text-2xl font-medium mt-3">
            Luxury lakeside stay, serene views, unforgettable experiences.
          </p>

          <div className="mt-6 ">
            <a
              href="#booking"
              className="px-6 py-3  text-white bg-green-900/90 font-bold rounded-lg hover:bg-green-800 transition-all"
            >
              Book Now
            </a>
          </div>

       </div>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="w-full lg:w-300 flex items-center justify-center">
          <TiltedCard
            imageSrc="/images/move2.jpg"
            altText="FourLakes WaterPark"
            captionText="FourLakes WaterPark"
            containerHeight="350px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.15}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-xl sm:text-2xl font-bold text-black">
                FourLakes WaterPark
              </p>
            }
          />
        </div>

      </div>
    </Section>
  );
};

export default Hero;
