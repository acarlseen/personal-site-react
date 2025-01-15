import { ReactElement } from 'react'
import { GlowBorder } from '../animations/GlowBorder'

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
  const tailToRem = props.size/4
  return (
    <div className="flex justify-center items-center"
    style={{width : `${tailToRem+0.5}rem`, height: `${tailToRem+0.5}rem` }}>
        {props.glow != null ? <GlowBorder x={props.size} y={props.size} round /> : <></>}
        <div className={`bg-zinc-500 rounded-[50%] relative flex items-center justify-center`}
        style={{height: `${tailToRem}rem` , width: `${tailToRem}rem` }}>
            {props.content}
        </div>

    </div>
  )
}
