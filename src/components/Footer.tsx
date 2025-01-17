import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

export const Footer = () => {
  return (
    <div className='flex flex-row my-12'>
        <ul className='flex justify-evenly w-96 mx-auto'>
            <li>
                <a href="https://www.linkedin.com/in/acarlseen/"
                target='new'>
                    <IoLogoLinkedin color='white' size={40} />
                </a>
            </li>
            <li>
                <a href="https://github.com/acarlseen"
                target='new'>
                    <IoLogoGithub color='white' size={40}/>
                </a>
            </li>
        </ul>
    </div>
  )
}
