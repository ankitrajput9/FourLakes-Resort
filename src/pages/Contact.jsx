import React from 'react';
import Section from "../components/Section";
import ContactForm from "@/components/form/ContactForm";

const Contact = () => {
  return (
      <Section id="booking" bg="/images/blur.webp" speed={0.3}>
        <div className="h-screen w-full flex items-center justify-center">
             <div className="w-full text-white">
      {/* Other sections like Hero, Lake, CardSection, Booking, etc. */}
      <ContactForm/>
    </div>
        </div>
      </Section>
  );
}

export default Contact;
