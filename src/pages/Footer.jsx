import Section from '@/components/Section';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <Section>
    <div className='h-70 w-full flex items-center bg-black text-white gap-5 flex-col p-10  '>
  
  <h1 className='text-3xl font-bold' >Keep In Touch</h1>
    <div className='flex text-3xl gap-5'>
<FaInstagram className='cursor-pointer' />
<FaWhatsapp className='cursor-pointer' />
<FaFacebook className='cursor-pointer'/>
    </div>
    <p>Four Lakes, Katara hills extention, sahara bypass, Jhagariya Khurd, Bhopal, Madhya Pradesh, 462022</p>
    <p>© 2025 by Monk Global Media</p>
    </div>
    </Section>
  );
}

export default Footer;
