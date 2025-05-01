import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
const Header = () => {
  return (
    <div className='flex flex-row justify-start md:justify-center md:gap-[500px] gap-52 items-center mt-4 ml-3 md:ml-0'>
        <Link href='/'> 
        <div className='text-white font-bold text-2xl'>Abood<span className='text-4xl text-[#00ff99]'>.</span> </div>
        </Link>
        <Nav/>
        <div className='md:hidden'>
         <MobileNav/>
        </div>
    </div>
  )
}

export default Header
