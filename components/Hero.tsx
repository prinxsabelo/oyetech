import React from 'react'
import Image from 'next/image'
import HeroImg from '../styles/img/HeroImg.png';
import ButtonLink from './ButtonLink';
const Hero = () => {
  return (
    <div className='mt-28 lg:mt-30 flex flex-col lg:flex-row items-center space-y-8 md:space-y-0'>
        <div className='w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-8'>
            <div className="testimonial-item text-start">
                <h1 className="text-4xl lg:text-6xl mb-2 mt-2 font-bold leading-tight">
                    We Offer<br/>
                    Digital <span className="text-primary">trainings</span>
                </h1>
                <p className="lg:text-lg pr-2 lg:pr-6">
                    We focus on providing excellent solutions to your digital
                    problems by designing and developing newly
                    conceptualized ideas.
                </p>
            </div>
            <div className="d-flex align-items-center">
                <ButtonLink>
                     Get Started
                </ButtonLink>
            </div>
        </div>
        <div className='w-full lg:w-1/2'>
         <Image
                src={HeroImg}
                alt="Hero"
                 
            />
        </div>
    </div>
  )
}

export default Hero