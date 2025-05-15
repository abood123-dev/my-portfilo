"use client";
import React from 'react'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {FaPhoneAlt,FaEnvelope} from 'react-icons/fa';
import Swal from 'sweetalert2';
const page = () => {
    async function handleSubmit(event : any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "92a6eb25-9ef1-4485-ab7c-f3edea3c4acd");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: "success!",
                text: "Message sent successfully !, i'll reply as soon as possible",
                icon: "success"
              });
        }
    }
  const info=
  [
    {
      element:<FaPhoneAlt/>,
      title:'phone',
      description:'+963 992 960 766'
    },
    {
     element:<FaEnvelope/>,
     title:"Email",
     description:'aboodhajibrahim6@gmail.com' 
    }
  ]
  return (
    <form onSubmit={handleSubmit} className='flex md:flex-row flex-col-reverse   justify-center items-center gap-20 mt-10 mb-10'>  
    <div className='flex flex-col items-start justify-center gap-[20px] bg-[#27272c] md:w-[640px] w-[350px] py-[50px] md:px-[20px] px-[10px]'>
         <div className='text-[#00ff99] text-2xl font-extrabold'>Let's work together</div>
         <div className='text-white/60 text-sm font-normal'>Interested in working together or want to learn more about my work? Drop me a message — I'd love to hear from you.</div>
         <div className='flex md:flex-row flex-col justify-center items-center md:gap-8 gap-4'>
              <div><Input name='firstname' placeholder='Firstname' required/></div>
              <div><Input name='lastname' placeholder='Lastname' required/></div>
         </div>
         <div className='flex md:flex-row flex-col justify-center items-center md:gap-8 gap-4'>
              <div><Input name='email address' placeholder='Email Address' required/></div>
              <div><Input name='phone number' placeholder='Phone Number' required/></div>
         </div>
         <div><Textarea name='Message' className='h-[200px]' placeholder='type your message here' required/></div>
         <div><Button type='submit' className='bg-[#00ff99] rounded-full px-5 py-4 outline-none'>Send message</Button></div>
    </div>
    <div className='flex flex-col items-start md:ml-0 ml-5 gap-20'>
      {info.map((info,index)=>
        {
          return(
            <div key={index} className='flex flex-row items-center gap-5'>
             <div className='bg-[#27272c] md:text-2xl text-xl px-[28px] py-[18px]  rounded-md text-[#00ff99] content-center'> 
            {info.element}
             </div>
             <div className='flex flex-col items-start gap-3'>
            <div className='font-normal text-white/60'>{info.title}</div>
            <div className='text-white font-bold md:text-2xl text-sm'>{info.description}</div>
            </div>
            </div>
          )
        })}
    </div>
    </form>
  )
}

export default page
