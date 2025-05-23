"use client";
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
const Nav = () => {
    const links=[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/resume', label: 'Resume' },
        { href: '/work', label: 'Work' },
        { href: '/contact', label: 'Contact' },        
      ]
      const pathname=usePathname();
  return (
    <div className='md:flex md:flex-row md:items-center md:gap-8 md:text-sm hidden '>
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
  )
}

export default Nav
