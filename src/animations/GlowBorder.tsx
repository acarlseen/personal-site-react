import React from 'react'

export const GlowBorder = () => {
  return (
    <div className='fixed left-0 top-1/4 bg-black  w-14 z-40 rounded-r-lg overflow-hidden'>
        <div className='absolute w-40 h-40 rounded-r-lg bg-gradient-to-br from-[#C084FC] to-[#0EA5E9] opacity-75 blur animate-spin'></div>
        <div className='relative m-1 bg-[#000300] rounded-r-lg h-full bg-opacity-100 p-1 flex'>
            <ul className='flex flex-col justify-between'>
                <li ><a href="https://github.com/acarlseen" target='new'><FaGithub size={30} color='white'/></a></li>
                <li><a href="https://www.linkedin.com/in/acarlseen/" target='new'><ImLinkedin2 size={30} color='white' /></a></li>
                <li><a href="" target='new'><FaCoffee size={40} color='white'/></a></li>

            </ul>
        </div>
    </div>
  )
}
