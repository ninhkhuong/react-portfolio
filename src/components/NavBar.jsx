import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [navbar, setNavBar] = useState(false);

    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'portfolio'
        },
        {
            id:4,
            link: 'contact'
        },
    ]


  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <img className="w-10 h-10" src="/src/assets/logo.png" alt="Icon" />

      <ul className="hidden md:flex">
         {links.map(({id,link})=> (
        <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            {link}
        </li>
         ))}
      </ul>

      <div 
        onClick={() => setNavBar(!navbar)} 
        classname="cursor-pointer pr-4 z-10 text-gray-500
        md:hidden"
    >
        {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

   {navbar && ( 
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
    {links.map(({id,link})=> (
        <li
            key={id}
            className="px-4 py-6 cursor-pointer capitalize text-4xl">
            {link}
        </li>
         ))}
      </ul>)}
    </nav>
  )
}

export default NavBar