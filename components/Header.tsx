import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (
    <div className='flex flex-row justify-center gap-[550px] items-center mt-3'>
        <Link href='/'> 
        <div className='text-white font-semibold text-3xl'>Abood<span className='text-4xl text-[#00ff99]'>.</span> </div>
        </Link>
        <Nav/>
    </div>
  )
}

export default Header
