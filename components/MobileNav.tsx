"use client";
import React, { useEffect, useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';
const MobileNav = () => {
  const [Mobile,setMobile]=useState<boolean>(false);
    const links=[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/resume', label: 'Resume' },
        { href: '/work', label: 'Work' },
        { href: '/contact', label: 'Contact' },        
      ]
      const pathname=usePathname();
      useEffect(()=>
        {
          if((window.innerWidth < 640))
            {
              setMobile(true);
            }
            else
            {
              setMobile(false)
            }

        },[window.innerWidth])
  return (
    <Sheet>
      <SheetTrigger asChild className='focus:outline-none'>
        <button className="flex justify-center items-center">
          <CiMenuFries className="text-4xl text-[#00ff99]" />
        </button>
      </SheetTrigger>
      <SheetContent side={Mobile ? "right" : 'left'} className='md:w-[310px] w-[220px] flex flex-col md:gap-44 gap-16 font-bold md:justify-center justify-start items-center text-white'>
        <div className='text-white font-bold text-2xl'>Abood<span className='text-4xl text-[#00ff99]'>.</span></div> 
        <div className='flex flex-col items-center md:gap-10 gap-7'>
      {links.map((link,index)=>
      {
        return(
        <Link
        href={link.href}
        key={index}
        className={link.href===pathname ? 'text-[#00ff99] border-b-2 border-[#00ff99]' : 'text-white hover:text-[#00ff99] ease-out transition-all'}
        >
         {link.label}
        </Link>
        )
      })}
      <Link href='/contact'>
      <Button className='focus:outline-none'>Hire me</Button>
      </Link>
    </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

