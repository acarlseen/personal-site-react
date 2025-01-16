import { projectsContent } from '../content/ProjectsContent'
import Carousel1 from './Carousel1'

export const Projects = () => {
const SLIDES = projectsContent;
  return (
    <div className='bg-zinc-50 w-full p-10'
    id='projects'>
        <div className='flex justify-center'>
            <h1 className='font-bold text-4xl m-12'>
                PROJECTS
            </h1>
        </div>
        <Carousel1 slides={SLIDES}/>
        {/* <div className="flex justify-center w-full text-zinc-700">
            <h1 className='text-3xl font-bold'>Projects</h1>
        </div>
        <div className='flex flex-row justify-evenly w-full flex-wrap'>
            {
            projectsContent.map((obj, index) => (
                <ProjectCard key={index} project= {obj} />
            ))  }
        </div> */}
    </div>
  )
}
