import React from 'react'

export const Projects = () => {
  return (
    <div className='bg-zinc-50 w-full p-10'>
        <div className='flex flex-row justify-evenly w-full flex-wrap'>
            <div className="shadow-xl  flex justify-between min-w-96 min-h-64 text-white font-bold
             p-4 w-1/4 rounded-lg m-10 h-60 items-center 
            bg-[url('src/assets/img/BeanCounter.jpg')] bg-cover bg-center">
                <div className='flex-col items-center hidden hover:visible'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>Bean Counter</h1>
                    <p className='mt-4'>
                        Built in React with Typescript and Vite, and 
                        with a back-end PostgreSQL database hosted on
                        AWS. This app will help you journal your coffee
                        experiences and explore new roasts.
                    </p>
                    <button className='p-4 w-[70%] bg-teal-400 rounded-xl border-gray-300 border-2 mb-4'>GitHub Repo</button>
                </div>
            </div>
            <div className="shadow-xl  flex justify-between min-w-96 min-h-64 bg-white bg-opacity-25
             p-4 w-1/4 rounded-lg m-10 h-60 items-center ">
                <h1 className='text-xl md:text-2xl lg:text-3xl'>Car Collection</h1>
                <p className='mt-4'>
                    Built in React, this 
                </p>
                <button className='p-4 w-[70%] bg-teal-400 rounded-xl border-gray-300 border-2 mb-4'>GitHub Repo</button>
            </div>
            <div className="shadow-xl  flex justify-between min-w-96 min-h-64 bg-white bg-opacity-25
             p-4 w-1/4 rounded-lg m-10 h-60 items-center ">
                <h1 className='text-xl md:text-2xl lg:text-3xl'>BreakOut</h1>
                <p className='mt-4'>
                    A basic game using Godot and written in C# 
                    to test the Observer design pattern.
                </p>
                <button className='p-4 w-[70%] bg-teal-400 rounded-xl border-gray-300 border-2 mb-4'>GitHub Repo</button>
            </div>
            <div className="shadow-xl  flex justify-between min-w-96 min-h-64 bg-white bg-opacity-25
             p-4 w-1/4 rounded-lg m-10 h-60 items-center ">
                <h1 className='text-xl md:text-2xl lg:text-3xl'>Quicken Amortization</h1>
                <p className='mt-4'>
                    Contributed to a project written in Objective C
                    by expanding functionality for payment term and
                    interest compounding schedule.
                </p>
                <button className='p-4 w-[70%] bg-teal-400 rounded-xl border-gray-300 border-2 mb-4'>GitHub Repo</button>
            </div>
        </div>
    </div>
  )
}
