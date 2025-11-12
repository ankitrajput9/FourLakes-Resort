import React from 'react';
import Section from "../components/Section";
import ScrollReveal from "../components/Texts/ScrollReveal"

const Welcome = () => {
  return (
   <Section className="text-black" id="rooms" bg="white" speed={0.35}>
        <div className="h-100 text-black flex items-center justify-center">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={13}
            blurStrength={22}
          >
            Four Lakes is a premium leisure and hospitality destination located on Sahara Bypass Road, Bhopal, Madhya Pradesh. Surrounded by lush greenery and open landscapes, it offers the perfect escape for families, couples.
          </ScrollReveal>
        </div>
      </Section>

  );
}

export default Welcome;
