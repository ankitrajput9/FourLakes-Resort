import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Props:
 *  - id: section id (for anchor)
 *  - bg: background image path (string, from public/ -> e.g. "/backgrounds/hero.avif")
 *  - children: content inside the section
 *  - speed?: number controlling parallax intensity (default 0.3)
 */
const Section = ({ id, bg, children, speed = 0.3 }) => {
  const ref = useRef(null);

  // scroll progress for this element
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset is tuned so progress goes 0→1 while the element is in view
    offset: ["start end", "end start"],
  });

  // Map progress to Y translation for parallax.
  // Negative -> moves up when entering, positive -> moves down when leaving.
  // speed controls amplitude (px)
  const amplitude = 100 * speed; // px
  const y = useTransform(scrollYProgress, [0, 1], [-amplitude, amplitude]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative h-full w-full overflow-hidden  flex items-center"
    >
      {/* background image (parallax) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-center  bg-cover bg-no-repeat will-change-transform"
        // bg image from public folder
        // we set inline style for backgroundImage so Tailwind doesn't need extra config
        // Note: keep URL starting with / so it references public/
        // if you prefer tailwind bracket syntax, ensure it's allowed.
        // Inline style below:
        initial={false}
        animate={false}
        // style prop with backgroundImage since we already set `y` above
      >
        {/* use inline style separately to avoid overriding 'style' prop above */}
      </motion.div>

      {/* Because motion.div doesn't accept backgroundImage together with style y easily
          we apply a nested div for the image so we can pass both y and background
      */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 "
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${bg}")` }}
        />
      </motion.div>

      {/* overlay */}
      <div className="absolute inset-0" />

      {/* content */}
      <div className="relative z-20 w-full max-w-full h-auto px-6 md:px-20">
        {children}
      </div>
    </section>
  );
};

export default Section;
