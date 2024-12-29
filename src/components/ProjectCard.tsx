import React from 'react'

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
    console.log(props.project.bg)
  return (
        <div className={`shadow-xl flex min-w-[400px] min-h-96 text-white font-bold 
              w-1/4 rounded-lg m-10 h-60 group overflow-hidden
            bg-[url('${props.project.bg}')] bg-cover bg-center`}>
            <div className='p-4 w-full invisible group-hover:visible group-hover:bg-opacity-30 group-hover:bg-black flex flex-col justify-between items-center'>
                <h1 className='text-xl md:text-2xl lg:text-3xl uppercase'>{props.project.title}</h1>
                <p className='mt-4'>
                    {props.project.info}
                </p>
                <a href={props.project.link} className="w-[70%]"><button className='p-4 w-full bg-teal-400 rounded-xl border-gray-300 border-2'>GitHub Repo</button></a>
            </div>
        </div>
  )
}
