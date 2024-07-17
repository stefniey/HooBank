import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = ({styles}) => {

    useEffect(() => {
      AOS.init();
    }, []);
  
  return (
    <button data-aos="fade-up" type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outlin-none ${styles}`}>Get Started</button>
  )
}

export default Button
