import { useState } from 'react'


export const Skills = () => {
    const [tabSelected, setTabSelected] = useState({
        languages: true,
        frameworks: false,
        skills: false
    });

    function handleClick(select : keyof typeof tabSelected)
    {
        var tempTab = tabSelected;
        Object.keys(tempTab).forEach(key => {
            tempTab[key as keyof typeof tempTab] = false;
        });
        tempTab[select]  = true;
        setTabSelected({...tempTab});
    }
    console.log('tabSelected:')
    console.table(tabSelected)

  return (
    <>
    <div className='flex justify-center w-full py-20 ' id='skills'>
        <div className='flex flex-col justify-center  mx-12 max-w-[800px] w-full'>

            <div className='flex-row flex rounded-md overflow-hidden'>
                <div className='space-y-3 tabs h-full flex flex-col'>
                    <h2 className='text-center text-2xl font-bold bg-red-200 max-h-fit py-2 filetab'
                    onClick={() => handleClick('languages')}>Languages</h2>
                    <h2 className='text-center text-2xl font-bold bg-blue-200 max-h-fit py-2 filetab'
                    onClick={() => handleClick('frameworks')}>Frameworks</h2>
                    <h2 className='text-center text-2xl font-bold bg-green-200 max-h-fit py-2 filetab'
                    onClick={() => handleClick('skills')}>Skills</h2>
                </div>
                <div className='grid skills w-full h-full'>
                    <div className={`${tabSelected.languages == true ? 'visible': 'invisible'} bg-red-200 skill-card h-full flex items-center justify-evenly p-4`}>
                        <ul className='pl-4 text-xl bg-white bg-opacity-50 p-2 rounded-md h-full '>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Objective-C</li>
                            <li>Python</li>
                            <li>Typescript</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <p>I began my coding journey in high school with two years of classes in C++ before </p>
                    </div>
                    <div className={`${tabSelected.skills == true ? 'visible': 'invisible'} bg-green-200 skill-card h-full`}>
                        <ul className='pl-4 text-xl bg-green-200'>
                            <li>Problem Solver</li>
                            <li>Crossfunctional communication</li>
                            <li>Rapid prototyping</li>
                            <li>Time Management</li>
                        </ul>
                    </div>
                    <div className={`${tabSelected.frameworks == true ? 'visible': 'invisible'} pl-4 text-xl bg-blue-200 skill-card`}>
                        <ul>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Flask</li>
                            <li>Godot</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
