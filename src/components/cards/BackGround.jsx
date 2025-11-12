import { motion, useScroll, useTransform } from "framer-motion";

const Background = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]); // Parallax effect

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-0"
      style={{
        backgroundImage: "url('/background/bg.avif')",
        y,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" />
    </motion.div>
  );
};

export default Background;
