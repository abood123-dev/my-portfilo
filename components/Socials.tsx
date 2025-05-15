import Link from 'next/link';
import React from 'react'
import {FaGithub,FaInstagram,FaFacebook} from "react-icons/fa";
const Socials = () => {
    const socials=
    [
        {icon:<FaGithub/>,path:"https://www.github.com/abood123-dev"},
        {icon:<FaInstagram/>,path:"https://www.instagram.com/abd_alfatah123"},
        {icon:<FaFacebook/>,path:"https://facebook.com/abood.hajinrahim" },
    ]
  return (
        socials.map((social,index)=>
    {
      return(
      <Link key={index} href={social.path} target='blank' className='text-[#00ff99] border border-[#00ff99] p-3 rounded-full hover:bg-[#00ff99] hover:text-[#1c1c22] transition-all ease-out'>{social.icon}</Link>
      )

    })
  )
}

export default Socials
