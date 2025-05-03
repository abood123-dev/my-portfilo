import Link from 'next/link';
import React from 'react'
import {FaGithub,FaInstagram,FaFacebook} from "react-icons/fa";
const Socials = () => {
    const socials=
    [
        {icon:<FaGithub/>,path:"" },
        {icon:<FaInstagram/>,path:"" },
        {icon:<FaFacebook/>,path:"" },
    ]
  return (
        socials.map((social,index)=>
    {
      return(
      <Link key={index} href={social.path} className='text-[#00ff99] border border-[#00ff99] p-3 rounded-full hover:bg-[#00ff99] hover:text-[#1c1c22] transition-all ease-out'>{social.icon}</Link>
      )

    })
  )
}

export default Socials
