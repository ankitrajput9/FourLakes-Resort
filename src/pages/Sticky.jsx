
import React from 'react';
import Footer from './Footer';
import Contact from './Contact';
import Section from "../components/Section";
import ParallaxSticky from '@/components/ui/ParallaxSticky';


const Sticky = () => {
  return (
      <div >
    <Section bg="/background/back.jpg" >
 <ParallaxSticky
  image=""
  height="100vh"
  speed={0.35}
>
  <Contact/> {/* <-- your contact form inside sticky */}
</ParallaxSticky>
    </Section>
      {/* More sections below */}
      <section className=" h-50 bg-green-950/80  text-white flex items-center justify-center">
       <Footer/>
      </section>
    </div>
  );
}

export default Sticky;
