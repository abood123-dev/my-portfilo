import Link from 'next/link';
import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (
    <div className='flex flex-row justify-center gap-[500px] items-center mt-4'>
        <Link href='/'> 
        <div className='text-white font-bold text-2xl'>Abood<span className='text-4xl text-[#00ff99]'>.</span> </div>
        </Link>
        <Nav/>
    </div>
  )
}

export default Header
