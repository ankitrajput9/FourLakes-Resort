"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSticky({
  image,
  height = "120vh",
  speed = 0.3,
  children,
}) {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const amplitude = 120 * speed;

    const ctx = gsap.context(() => {
      // BACKGROUND ONLY PARALLAX
      gsap.fromTo(
        bgRef.current,
        { y: -amplitude, scale: 1.15, opacity: 0 },
        {
          y: amplitude,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      {/* FULL WIDTH */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-screen h-full overflow-hidden">

        {/* BACKGROUND PARALLAX IMAGE */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform -z-10"
          style={{ backgroundImage: `url("${image}")` }}
        />

        {/* STATIC CONTACT FORM (NO MOTION) */}
        <div className="relative z-30 w-full h-full flex items-center justify-center px-6 md:px-20">
          {children}
        </div>

      </div>
    </section>
  );
}
