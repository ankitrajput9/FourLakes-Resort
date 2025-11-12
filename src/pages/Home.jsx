import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import InfiniteMenu from "@/components/InfiniteMenu";
import GradientText from '../components/Texts/GradientText'
import ScrollReveal from "../components/Texts/ScrollReveal"
import SplitText from "../components/Texts/SplitText";
import Carousel from "../components/cards/Carousel";
import CardSection from "@/components/cards/CardSection";
import ContactForm from "@/components/form/ContactForm";
import Footer from "@/components/footer/Footer";

const Home = () => {


  const items = [
    {
      image: '/images/restro.avif',
      link: '',
      title: 'Rooms ',
      description: 'This is pretty cool, right?'
    },
    {
      image: '/images/resort.avif',
      link: '',
      title: 'Cotage',
      description: 'This is pretty cool, right?'
    },
    {
      image: '/images/restro1.webp',
      link: '',
      title: 'Gallary',
      description: 'This is pretty cool, right?'
    },
    {
      image: '/images/main.jpg',
      link: '',
      title: 'Garden',
      description: 'This is pretty cool, right?'
    }
  ];
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="w-full text-black">
      <Navbar />

      {/* Hero section */}



      <Section id="hero" bg="/images/main.jpg" speed={0.25}>
        <div className="h-screen text-white flex flex-col items-center justify-center text-center">
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
          <p className="max-w-2xl text-lg md:text-2xl font-light">
            Luxury lakeside stay, serene views, unforgettable experiences.
          </p>
          <div className="mt-8">
            <a href="#booking" className="px-6 py-3  bg-white/10 font-bold rounded-lg backdrop-blur-sm hover:bg-white/20">
              Book Now
            </a>
          </div>
        </div>
      </Section>


      {/* Welcome section */}


      <Section className="text-black" id="rooms" bg="white" speed={0.35}>
        <div className="h-100 text-black flex items-center justify-center">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={13}
            blurStrength={25}
          >
            Four Lakes is a premium leisure and hospitality destination located on Sahara Bypass Road, Bhopal, Madhya Pradesh. Surrounded by lush greenery and open landscapes, it offers the perfect escape for families, couples.
          </ScrollReveal>
        </div>
      </Section>





      {/* Gallary Section */}

      <Section id="lake" bg="white" speed={0.4}>
        <div className="absolute  ">
        </div>
        <div className="relative z-10 h-auto mt-18 w-full">
          <h2 className="text-4xl text-center md:text-6xl font-extrabold mb-4 text-black ">
            <SplitText
              text="Hospitality"
              className="text-4xl font-bold text-center"
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
          </h2>
          <p className="text-lg text-black md:text-xl max-w-2xl mx-auto font-light">
            Experience serenity by the shimmering waters — where nature meets luxury.
          </p>
          <div className="text-white py-4" style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu items={items} />
          </div>
        </div>
      </Section>

      {/* Booking / CTA section */}


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


      {/* Booking / CTA section */}
      <Section id="booking" bg="/images/blur.webp" speed={0.3}>
        <div className="h-screen w-full flex items-center justify-center">
             <div className="w-full text-white">
      {/* Other sections like Hero, Lake, CardSection, Booking, etc. */}
      <ContactForm/>
    </div>
        </div>
      </Section>

<Section>
  <Footer/>
</Section>

    </div>
  );
};

export default Home;
