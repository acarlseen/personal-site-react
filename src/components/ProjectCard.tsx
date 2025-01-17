interface obj {
    title : string,
    info : string,
    link : string,
    bg: string
}

interface Props {
    project : obj
}

/**
 * Renders a Project Card for slides with background image and mouse-over text.
 * Expects an object wih contents:
 * 
 * @param title expects a string;
 * @param info expects a string;
 * @param link execpts a URL as string;
 * @param bg expects a file reference to an image;
 */
export const ProjectCard = (props : Props) => {
    console.log(`BACKGROUND PROP: ${props.project.bg}`)
  return (
        <div className={`project-card relative shadow-lg flex h-full w-full  text-white font-bold 
               rounded-lg  group overflow-hidden items-center justify-center 
            bg-cover bg-center`}
             style={{background: `url("${props.project.bg}")`, backgroundSize: 'cover'}}
            //  style={{background: `url("/src/assets/img/BreakOut.jpeg")`, backgroundSize: 'cover'}}
            >
            <div className='absolute text-4xl bg-transparent group-hover:opacity-0 transition'>
                {props.project.title}
            </div>
            <div className=' absolute p-4 w-full invisible group-hover:visible group-hover:opacity-100 group-hover:bg-opacity-30 group-hover:bg-black flex flex-col justify-between items-center transition'>
                <h1 className='text-xl md:text-2xl lg:text-3xl uppercase'>{props.project.title}</h1>
                <p className='mt-4'>
                    {props.project.info}
                </p>
                <a href={props.project.link} className="w-[70%]" target='new'><button className='p-4 my-4 w-full bg-[#00df9a] rounded-xl 
                hover:bg-[#379b7b]'>GitHub Repo</button></a>
            </div>
        </div>
  )
}
