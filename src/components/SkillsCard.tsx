interface SkillContent {
    itemList : string[];
    blurb: string,
}


export const SkillsCard = ( {content} : {content: SkillContent} ) => {
  return (
    <div className='bg-black  max-w-[800px] w-full min-h-[500px] p-12 space-x-10 rounded-lg flex items-center glowborder'>
        <div className='flex flex-row items-center p-12 space-x-10 bg-[#0EA5E9] bg-opacity-50 rounded-lg text-white'>
            
            <div className='flex-col bg-[#0EA5E9] bg-opacity-20 p-4 rounded-lg'>
                <ul className='list-disc p-3'>
                    {content.itemList.map((item, index)=> (
                        <li key={index}
                        className='font-bold '>
                            {item}
                        </li>
                        )
                    )}
                </ul>
            </div>
            <div className='flex-col'>
                    {content.blurb}
            </div>

        </div>
    </div>
  )
}
