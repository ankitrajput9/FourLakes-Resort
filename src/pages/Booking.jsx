import React from 'react';
import Section from "../components/Section";
import SplitText from "../components/Texts/SplitText";
import CardSection from "@/components/cards/CardSection";


const Booking = () => {
     const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    
      <Section  id="booking" bg="/background/bg.jpg" speed={0.3}>
        <div className=" flex flex-col h-auto mt-30 items-center justify-center">
          <SplitText
            text="Book Your Stay at Four Lakes Hotel"
            className="text-4xl font-bold py-4 text-center"
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
          <p className="text-lg text-black md:text-xl max-w-2xl mx-auto font-light">
            Find Comfort and Convenience in Every Room
          </p>
          <div className="flex  p-10 gap-25 " style={{ height: '600px', position: 'relative' }}>

            <div className="w-full h-screen z-10 text-white">
              {/* Other sections like Hero, Lake, etc. */}
              <CardSection />
              {/* Continue with Booking section */}
            </div>


          </div>

        </div>
      </Section>

  );
}

export default Booking;
