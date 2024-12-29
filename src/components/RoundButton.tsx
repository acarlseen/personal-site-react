import React, { ReactElement } from 'react'
import { GlowBorder } from '../animations/GlowBorder'
import { FaComputer } from 'react-icons/fa6'
import { GiComputerFan } from 'react-icons/gi'
import { HiComputerDesktop } from 'react-icons/hi2'
import { MdComputer } from 'react-icons/md'
import { IconBase, IconBaseProps } from 'react-icons'

interface Props {
    size: number,
    content: ReactElement,
    glow?: boolean
}

/**
 * creates a round button, expects input of size in Tailwind units (1/4 rems)
 * 
 * @param size - diameter in 1/4rem
 * @param content - text/icon displayed on button
 */
export const RoundButton = (props : Props) => {
    const div_size = (props.size*4)+8
  return (
    <div className={`w-${props.size+2} h-${props.size+2} `}>
        {props.glow != null ? <GlowBorder x={props.size} y={props.size} round /> : <></>}
        <div className={`bg-zinc-500 h-12 w-${props.size} rounded-full relative inset-1 flex items-center justify-center`}>
            {props.content}
        </div>

    </div>
  )
}
