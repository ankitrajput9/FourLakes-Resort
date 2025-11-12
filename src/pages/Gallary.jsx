import React from 'react';
import Section from "../components/Section";
import InfiniteMenu from "@/components/InfiniteMenu";
import SplitText from "../components/Texts/SplitText";

const Gallary = () => {

     const items = [
    {
      image: '/images/pool.avif',
      link: '',
      title: 'Pool ',
      description: 'This is pretty cool, right?'
    },
    {
      image: '/images/vibe.avif',
      link: '',
      title: 'Cotage',
      description: 'This is pretty cool, right?'
    },
    {
      image: '/images/resort.avif',
      link: '',
      title: 'Resort',
      description: 'This is pretty cool, right?'
    },
    {
      image: '/images/launge.avif',
      link: '',
      title: 'Lounge',
      description: 'This is pretty cool, right?'
    },
     {
      image: '/images/room.avif',
      link: '',
      title: 'Rooms',
      description: 'This is pretty cool, right?'
    },
     {
      image: '/images/food.avif',
      link: '',
      title: 'Food',
      description: 'This is pretty cool, right?'
    },
     {
      image: '/images/water.avif',
      link: '',
      title: 'WaterPark',
      description: 'This is pretty cool, right?'
    },
  ];
   const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
   <Section id="lake" bg="white" speed={0.4}>
        <div className="absolute  ">
        </div>
        <div className="relative z-10 h-auto mt-18 w-full max-w-none px-0 md:px-8 ">
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
          <p className="text-lg text-black/60 md:text-xl text-center   mx-auto font-medium">
            Experience serenity by the shimmering waters — where nature meets luxury.
          </p>
          <div className="text-white py-4 w-full" style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu items={items} />
          </div>
        </div>
      </Section>
  );
}

export default Gallary;
