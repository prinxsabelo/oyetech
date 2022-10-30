import React from 'react'
import Image from 'next/image'
import HeroImg from '../styles/img/HeroImg.png';
import ButtonLink from './ButtonLink';
const Hero = () => {
  return (
    <div className='mt-28 lg:mt-30 flex flex-col lg:flex-row items-center space-y-8 md:space-y-0'>
        <div className='w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-8'>
            <div className="testimonial-item text-start">
                <h1 className="text-4xl lg:text-6xl mb-2 mt-2 font-bold leading-tight 
                    " >
                    <span className='wow fadeIn' data-wow-duration="1s"> We Offer<br/></span>
                    <span className='wow fadeIn' data-wow-duration="2s" > Digital <span className="text-primary">trainings</span> </span>
                </h1>
                <p className="lg:text-lg pr-2 lg:pr-2
                wow fadeIn"  data-wow-duration="3s"
                >
                   We concentrate on teaching you how to design and develop newly thought ideas in order to provide exceptional solutions to your digital challenges.
                </p>
            </div>
            <div className="d-flex align-items-center wow fadeIn" data-wow-duration="4s">
                <ButtonLink>
                     Get Started
                </ButtonLink>
            </div>
        </div>
        <div className='w-full lg:w-1/2  wow fadeIn'  data-wow-duration="5s">
         <Image
                src={HeroImg}
                alt="Hero"
                placeholder='blur'
               
            />
        </div>
    </div>
  )
}

export default Hero