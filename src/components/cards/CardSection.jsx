import React from "react";
import { motion } from "framer-motion";

const CardSection = () => {
  const cards = [
    {
      image: "images/resort.avif",
      title: "Lake View Room",
      description:
        "Enjoy stunning panoramic views of the lake from your private balcony. Perfect for couples and nature lovers.",
    },
    {
      image: "images/restro.avif",
      title: "Luxury Suite",
      description:
        "Spacious suite with premium amenities, cozy interiors, and a relaxing bathtub for your comfort.",
    },
    {
      image: "images/restro1.webp",
      title: "Private Villa",
      description:
        "Exclusive villa surrounded by greenery and calm waters. Ideal for family vacations and private stays.",
    },
  ];

  return (
    <section className=" h-auto  text-black">
      {/* Card Grid */}
      <div className="grid grid-cols-1 h-auto md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group"
          >
            {/* Image */}
            <div
              className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-black/80 mb-6">{card.description}</p>
              </div>

              {/* Book Now Button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#booking"
                className="inline-block px-6 py-3 bg-green-950/80 rounded-lg text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
