import React, { useState } from 'react'


interface Props {

}

export const Carousel = () => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const carouselHeight = '60vh';
    const onCycle = () => {

    }

    const handleClick = () => {

    }

  return (
    <div className='border-2 flex justify-center'>
      <div className={`m-4 h-[${carouselHeight}] w-2/3 flex justify-center`}>
          <div className='flex flex-row justify-between items-center h-full w-full px-4'>
            <div className='h-3/4 w-1/3  border-2'>
            <img src="src/assets/img/BeanCounter.jpeg" 
              className='blur'
              alt="" />
            
            </div>
            <div className='h-3/4 w-1/3  border-2'>
            <img src="src/assets/img/BeanCounter.jpeg" alt="" />

            </div>
          </div>
          <div className={`w-full absolute h-[${carouselHeight}] bg-transparent`}>

          </div>
          <div className={`w-[40%] h-[${carouselHeight}] z-10 absolute border-2 bg-slate-300 shadow-md`}>
            <img src="src/assets/img/BeanCounter.jpeg" alt="" />
          </div>

      </div>
      <div>
        
      </div>
    </div>
  )
}
