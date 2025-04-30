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
    <div className='flex flex-row items-center gap-8 text-sm'>
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
      <Button>Hire me</Button>
      </Link>
    </div>
  )
}

export default Nav
