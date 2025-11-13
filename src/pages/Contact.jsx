"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* Background */}
     

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-10"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-green-950 text-center mb-8 tracking-wide"
          >
            Get in Touch
          </motion.h2>

          {/* Form */}
          <form className="space-y-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/70 focus:outline-none"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/70 focus:outline-none"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              type="tel"
              placeholder="Contact Number"
              className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/70 focus:outline-none"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              rows={4}
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/70 focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full py-3 bg-white text-black font-semibold rounded-xl shadow-2xl hover:bg-white/90"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
