import React from 'react';
import SplitText from "../components/Texts/SplitText";
import Section from "../components/Section";
import TiltedCard from '@/components/cards/TiltedCard';



const Hero = () => {
     const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
     <Section id="hero" bg="/images/main." speed={0.25}>
        <div className='flex justify-between h-screen'>
           
        <div className=" text-black flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
            <SplitText
              text="Welcome to Four Lakes"
              className="text-7xl font-extrabold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h1>
          <p className="max-w-2xl text-black/60 text-lg md:text-2xl font-medium">
            Luxury lakeside stay, serene views, unforgettable experiences.
          </p>
          <div className="mt-8">
            <a href="#booking" className="px-6 py-3  bg-black/10 font-bold rounded-lg backdrop-blur-sm hover:bg-black/20">
    BookNow
            </a>
          </div>
        </div>
           <div className=' text-black flex items-center justify-center text-center'>
               <TiltedCard
  imageSrc="/images/main.jpg"
  altText="FourLakes WaterPark"
  captionText="FourLakes WaterPark"
  containerHeight="600px"
  containerWidth="600px"
  imageHeight="450px"
  imageWidth="450px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text text-2xl font-bold text-black">
     FourLakes WaterPark
    </p>
  }
/>
  
            </div>
        </div>
      </Section>
  );
}

export default Hero;
