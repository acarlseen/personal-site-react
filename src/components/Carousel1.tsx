import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './CarouselDots'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrows'
import useEmblaCarousel from 'embla-carousel-react'
import { projectsContent } from '../content/ProjectsContent'
import { ProjectCard } from './ProjectCard'

// TODO - call project slide component with props

type PropType = {
  slides: number[] // change this to []projects ; or ProjectContents
  options?: EmblaOptionsType
}

const Carousel1: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla px-12">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projectsContent.map((project, index) => (
            // TODO HERE
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number"><ProjectCard project={project} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel1
