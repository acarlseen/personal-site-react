
import { MdCode, MdDescription, MdEmail } from 'react-icons/md'
import { RoundButton } from './RoundButton'
import { MdComputer } from 'react-icons/md'


// TODO - make free-floating round buttons
// TODO - separate glow effect to use as a border anywhere?

export default function SideBar() {
  return (
    // <div className='fixed left-0 top-1/4 bg-black  w-14 z-40 rounded-r-lg overflow-hidden'>
    //     <div className='absolute w-40 h-32 rounded-r-lg bg-gradient-to-br from-[#C084FC] to-[#0EA5E9] opacity-75 blur animate-pulse'></div>
    //     <div className='relative m-1 bg-[#000300] rounded-r-lg h-full bg-opacity-100 p-1 flex'>
    //         <ul className='flex flex-col justify-between items-center'>
    //             <li ><a href="https://github.com/acarlseen" target='new'><FaGithub size={30} color='white'/></a></li>
    //             <li><a href="https://www.linkedin.com/in/acarlseen/" target='new'><ImLinkedin2 size={30} color='white' /></a></li>
    //             <li><a href="" target='new'><FaCoffee size={40} color='white'/></a></li>

    //         </ul>
    //     </div>
    // </div>
    <div className='fixed w-24 invisible left-8 top-1/4 h-[50%] z-40 flex flex-col justify-evenly lg:visible'>
        <RoundButton size={12} content={<MdComputer size={24} color='white' />} glow />
        <RoundButton size={12} content={<MdCode size={24} color='white' />} glow />
        <RoundButton size={12} content={<MdDescription size={24} color='white' />} glow />
        <RoundButton size={12} content={<MdEmail size={24} color='white' />} glow />
    </div>

  )
}
