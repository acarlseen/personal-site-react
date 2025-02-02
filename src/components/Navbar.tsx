import { useEffect, useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const [navbarIsExpanded, setNavbarIsExpanded] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect( () => {
        const handleScrollEvent = () =>{
            const currentScrollY = window.scrollY;
            if (navbarIsExpanded==true && currentScrollY > prevScrollY)
                setNavbarIsExpanded(false);
            else if (navbarIsExpanded==false && currentScrollY < prevScrollY)
                setNavbarIsExpanded(true);

            setPrevScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScrollEvent);
        return () => removeEventListener('scroll', handleScrollEvent);
    
    }, [prevScrollY]);

  return (
    <>
    <div className={navbarIsExpanded ? 'z-50 fixed bg-[#000300] w-full top-0 ease-in-out duration-300' 
        :
            'z-50 fixed bg-[#000300] w-full top-[-5rem] opacity-40 ease-in-out duration-1000'}>

        <div className='flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-white '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ALEX CARLSEEN.</h1>
            
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <a href="#projects">
                        Projects
                    </a> 
                </li>
                <li className='p-4'>
                    <a href="#skills">
                        Skills
                    </a> 
                </li>
            </ul>

            <div className='block md:hidden'
            onClick={() => setExpanded(!expanded)}>
                {
                    !expanded ?
                        <AiOutlineMenu size={20} />
                    :
                        <AiOutlineClose size={20} />
                }
            </div>
            <div className={!expanded ? 
                    'fixed left-[-100%] top-16 ease-in-out duration-300' 
                : 
                    'fixed left-0 top-16 w-[60%] h-fit border-r border-r-gray-900 bg-gray-900 rounded-b m-4 ease-in-out duration-300 md:hidden z-10 bg-opacity-70'}>

                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Projects</li>
                    <li className='p-4 border-b border-gray-600'>Skills</li>
                    <li className='p-4'>Links</li>
                </ul>
            </div>
            
        </div>
    </div>
    <div className='h-20'>
                {/* this is a buffer div to keep elements below navbar on load */}
    </div>
    </>
  )
}
