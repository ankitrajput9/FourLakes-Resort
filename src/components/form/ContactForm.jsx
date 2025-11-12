import React from "react";
import { motion } from "framer-motion";
import SplitText from "../Texts/SplitText";
const ContactForm = () => {
  return (
    <section
      id="contact"
      className="relative h-auto mt-15 w-full bg-cover bg-center flex items-center justify-center text-black"
      style={{ padding:"15px" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 w-11/12 md:w-1/2 lg:w-1/3 shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
       <SplitText
            text="Get In Touch"
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
            // onLetterAnimationComplete={handleAnimationComplete}
          />
        </h2>
        <p className="text-black/80 text-center mb-8">
          Have a question or ready to book your stay? Fill out the form below and we’ll get back to you soon.
        </p>

        <form className="flex flex-col space-y-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-black/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-black/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Contact */}
          <input
            type="tel"
            placeholder="Your Contact Number"
            className="p-3 rounded-lg bg-black/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-black/20 placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-500 rounded-lg font-semibold text-white hover:bg-blue-600 transition-colors"
            type="submit"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;

