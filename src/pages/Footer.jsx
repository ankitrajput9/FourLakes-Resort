import Section from '@/components/Section';
import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <Section>
      <footer className="w-full py-10">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-6">

            {/* Left: Title */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Keep In Touch</h2>
              <p className="mt-2 text-sm text-white/70 max-w-md">
                We'd love to hear from you — enquiries, bookings or just to say hi.
              </p>
            </div>

            {/* Center: Social icons */}
            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center gap-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-white/6 hover:bg-green-900/90 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
                >
                  <FaInstagram className="text-2xl text-white" />
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-3 rounded-full bg-white/6 hover:bg-green-900/90 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
                >
                  <FaWhatsapp className="text-2xl text-white" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-white/6 hover:bg-green-900/90 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
                >
                  <FaFacebook className="text-2xl text-white" />
                </a>
              </div>

              <p className="mt-4 text-sm text-white/70">Follow us for the latest updates & offers</p>
            </div>

            {/* Right: Address & copyright */}
            <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
              <address className="not-italic text-sm text-white/80">
                Four Lakes, Katara Hills Extension<br/>
                Sahara Bypass, Jhagariya Khurd<br/>
                Bhopal, Madhya Pradesh 462022
              </address>

              <a
                href="tel:+919999999999"
                className="mt-3 text-sm text-white/90 hover:underline"
              >
                +91 99999 99999
              </a>

              <p className="mt-4 text-xs text-white/60">© {new Date().getFullYear()} Monk Global Media</p>
            </div>

          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
