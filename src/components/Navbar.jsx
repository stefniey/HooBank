import React from 'react'
import { useState, useEffect} from 'react'
import { close, logo, menu } from "../assets"
import { navLinks } from '../constants'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [toggle, setToggle] = useState(false);

  return (
    <nav data-aos="fade-down" className='w-full flex py-6 px-8 justify-between items-center navbar'>
      <img src={logo} alt="HooBank" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointed text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}
              className='text-white'>{nav.title}
            </a>

          </li>

        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className='w-[30px] h-[30px] object-contain '
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className='list-none flex flex-col justify-end items-center flex-1 '>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointed text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}
                  className='text-white'>{nav.title}
                </a>

              </li>

            ))}
          </ul>

        </div>
      </div>


    </nav>
  )
}

export default Navbar