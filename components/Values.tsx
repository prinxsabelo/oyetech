import React from 'react'
import VImg from '../styles/img/confident-teacher-explaining-lesson-pupils 1.png';
import Image from 'next/image'

const Values = () => {
  const arr= [
    {id:1,label:"Proactiveness",desc:"We position you at the center of our decisions to identify and tackle your pain points and take a step ahead to prevent future occurrences."},
        {id:2,label:"Insight-driven",desc:"We harness qualitative and quantitative insight to make more informed decisions and plan more robust strategies"},
        {id:3,label:"Innovation",desc:"Our tutors tackle each day with an inventive perspective to help you improve your creativity and build seamless solutions."},
        {id:4,label:"Simplicity",desc:"We take a simple approach to creating and implementing your ideas efficiently in terms of time and resources to ensure a quick, easy, and hassle-free experience."}
  
    ]
  return (
      <div className="w-full flex flex-col space-y-2 lg:space-y-4">
         
        <h3 className='text-2xl font-semibold lg:text-4xl lg:text-center wow fadeIn'> Our Values</h3>
         
        <div className='flex justify-between space-x-4 items-center flex-col lg:flex-row lg:flex-row-reverse'>
            <ul className='w-full  lg:w-1/2 flex flex-col   lg:mx-0 space-y-4  text-base 	'>
                {arr.map(item=>
                    <li key={item.id} className="flex flex-col space-y-2 border p-4 shadow-lg wow fadeIn" >
                        <div className='font-semibold uppercase text-sm text-primary'>{item.label} </div>
                        <div className='text-base'>
                            {item.desc}
                        </div>
                    
                    </li>
                )}     
            </ul>

            <div className='w-full hidden lg:flex pr-8 lg:w-1/2 relative wow fadeIn'
             data-wow-duration="2s">
                <Image    
                    src={VImg}
                    alt="Partner2"
                    placeholder="blur"
                    quality={100}
                />
            </div>
        </div>
      </div>
  )
}

export default Values