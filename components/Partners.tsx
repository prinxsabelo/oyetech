import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import part1 from '../styles/img/part1.png';
import part2 from '../styles/img/part2.png';
import part3 from '../styles/img/part3.png';
import part4 from '../styles/img/part4.png';

const Partners = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay:true,
                    autoplaySpeed:1000,
                }
            }
        ]        
    }
   

  return (
    <div className='wow fadeIn'>
        <div className='lg:hidden'>
            <Slider {...settings}>
                <div className='  m-2  mr-2 lg:mr-1 h-8 p-8 flex justify-center items-center relative'>
                    <Image
                        src={part1}
                        layout="fill" // required
                        objectFit="contain"
                        alt="Partner1"
                        placeholder='blur'

                    />
                </div>
                <div className='  m-2  mr-2 lg:mr-1 h-8 p-8 flex justify-center items-center relative'>
                    <Image
                        src={part2}
                        layout="fill" // required
                        objectFit="contain"
                        alt="Partner2"
                        placeholder='blur'

                    />
                </div>
                <div className='  m-2  mr-2 lg:mr-1 h-8 p-8 flex justify-center items-center relative'>
                    <Image
                        src={part4}
                        layout="fill" // required
                        objectFit="contain"
                        alt="Partner4"
                        placeholder='blur'

                    />
                </div>
                <div className='  m-2  mr-2 lg:mr-1 h-8 p-8 flex justify-center items-center relative'>
                    <Image
                        src={part3}
                        layout="fill" // required
                        objectFit="contain"
                        alt="Partner3"
                        placeholder='blur'

                    />
                </div>


            </Slider>
        
            
                
                
        </div>
        <div className='hidden lg:flex border-t border-b py-2'>
        <div className='w-1/4 m-2  p-8 flex justify-center items-center relative wow fadeIn'
        >
                    <Image
                        src={part1}
                        layout="fill" // required
                        objectFit="contain"
                        className='h-8'
                        alt="Partner1"
                    />
                </div>
                <div className='w-1/4  m-2   h-8 p-8 flex justify-center items-center relative'>
                    <Image
                        src={part2}
                        layout="fill" // required
                        objectFit="contain"
                        alt="Partner2"
                    />
                </div>
                <div className='w-1/4  m-2  h-12 p-8  flex justify-center items-center relative'>
                    <Image
                        src={part3}
                        layout="fill" // required
                        objectFit="contain"
                        alt="Partner3"
                    />
                </div>
                <div className='w-1/4  m-2  h-12 p-8 flex justify-center items-center relative'>
                    <Image
                        src={part4}
                        layout="fill" // required
                        objectFit="contain"
                        alt="Partner4"
                    />
                </div>

        </div>
    </div>
  )
}

export default Partners