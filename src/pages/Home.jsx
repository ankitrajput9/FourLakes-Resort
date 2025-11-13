import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/pages/Footer";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Gallary from "./Gallary";
import Booking from "./Booking";

import Background from "@/components/cards/BackGround";
import Sticky from "./Sticky";


const Home = () => {
  return (
    <div className="relative min-h-screen  text-black">
<Background/>
      <Navbar />
      {/* Hero section */}
      <Hero />
      {/* Welcome section */}
      <Welcome />
      {/* Gallary Section */}
      <Gallary />
      {/* Booking / CTA section */}
      <Booking />
      {/* Contact */}
      <Sticky/>
      {/* Footer  */}
      {/* <Footer /> */}


    </div>
  );
};

export default Home;
