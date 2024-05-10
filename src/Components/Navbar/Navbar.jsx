import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import logo from '../../assets/nav_logo.webp'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [isDark,setIsDark]=useState(false);
  const navItems = [
    { id: 1, text: 'MakeMyWeb.' },
    { id: 2, text: 'Home' },
    { id: 3, text: 'Company' },
    { id: 4, text: 'Blogs' },
  ];

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-16'>
      <img src={logo}/>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:font-semibold rounded-xl m-2 cursor-pointer'
          >
            {item.text}
          </li>
        ))}
        {
            isDark ?  <li className='p-4 hover:font-semibold rounded-xl m-2 cursor-pointer'><CiLight size={25}/></li>
             :
             <li className='p-4 hover:font-semibold rounded-xl m-2 cursor-pointer'><IoMoon size={22}/></li>
        }
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:font-semibold duration-300 cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
         {
            isDark ?  <li className='p-4 hover:font-semibold rounded-xl m-2 cursor-pointer'><CiLight size={25}/></li>
             :
             <li className='p-4 hover:font-semibold rounded-xl m-2 cursor-pointer'><IoMoon size={22}/></li>
        }
      </ul>
    </div>
  );
};

export default Navbar;