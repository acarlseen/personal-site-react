interface Props {
    x : number,
    y : number,
    round?: boolean,

}


export const GlowBorder = (props: Props = {x: 0, y: 0, round: false}) => {
    const ring_x = (props.x/4) + 0.5
    const ring_y = (props.y/4) + 0.5
  return (
    <div className={`absolute bg-black overflow-hidden shadow-lg w-[${ring_x}rem] h-[${ring_y}rem] ${props.round ? 'rounded-full' : ''}`}>
        <div className={`absolute w-[calc(100%+2rem)] h-[calc(100%+2rem)] left-[-1rem] top-[-1rem] bg-gradient-to-br from-[#C084FC] to-[#0EA5E9] opacity-90 blur animate-pulse`}></div>
        
    </div>
  )
}
