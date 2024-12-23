import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projectsContent } from '../content/ProjectsContent'

export const Projects = () => {
  return (
    <div className='bg-zinc-50 w-full p-10'>
        <div className='flex flex-row justify-evenly w-full flex-wrap'>
            {
            projectsContent.map((obj) => (
                <ProjectCard key={obj.title} project= {obj} />
            ))  }
        </div>
    </div>
  )
}
