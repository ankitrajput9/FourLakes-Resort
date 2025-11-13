import React from "react";
import Section from "../components/Section";
import SplitText from "../components/Texts/SplitText";
import CardSection from "@/components/cards/CardSection";

const Booking = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <Section id="booking" bg="/background/bg.jpg" speed={0.3}>
      <div className="w-full min-h-screen flex flex-col items-center justify-start pt-20 px-6">

        {/* Heading */}
        <SplitText
          text="Book Your Stay at Four Lakes Hotel"
          className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-center text-green-950"
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

        {/* Subtitle */}
        <p className="text-lg text-black/60 md:text-xl text-center   mx-auto font-medium">
          Find Comfort and Convenience in Every Room
        </p>

        {/* Cards Section */}
        <div className="w-full mt-10 mb-20 flex justify-center">
          <div className="w-full max-w-6xl px-4 md:px-0">
            <CardSection />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Booking;
