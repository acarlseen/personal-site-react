import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';

export default function HeroImage() {
    const [index, setIndex] = useState(0);

  return (
    <div className='text-white bg-hero bg-cover bg-center bg-blend-multiply brightness-[1.3] max-h-[90vh] bg-no-repeat sm:mx-10 lg:mx-20'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>LEADERSHIP UNDER PRESSURE</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6'>Moving teams forward.</h1>
            <div className="typebox">
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>I am a{' '}
                <ReactTyped strings={['Mentor', 'Manager' ,'Team Player']} 
                typeSpeed={120} 
                backSpeed={90}
                backDelay={1500}
                fadeOut = {true}
                loop /> </p>
            </div>
        </div>
    
    </div>
  )
}
