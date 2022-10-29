import React from 'react'
import VImg from '../styles/img/confident-teacher-explaining-lesson-pupils 1.png';
import Image from 'next/image'

const Values = () => {
  const arr= [
    {id:1,label:"Proactiveness",desc:"We position our customers at the center of our decisions to identify and tackle their pain points and take a step ahead to prevent future occurrences."},
        {id:2,label:"Insight-driven",desc:"We harness qualitative and quantitative insight to make more informed decisions and plan more robust strategies"},
        {id:3,label:"Innovation",desc:"Our employees approach each day with an innovative mindset to enhance their creativity and organizational sustainability which does not only help them create new ideas/procedures but also focus and improve on existing ones."},
        {id:4,label:"Simplicity",desc:"We take a simple approach to creating and implementing your ideas efficiently in terms of time and resources to ensure a quick, easy, and hassle-free experience."}
  
    ]
  return (
    <div className='flex flex-col space-y-4'>
        <div className='flex w-full flex-col flex-col-reverse lg:flex-row-reverse lg:flex-row items-center  h-full' >
          <div className='w-full lg:w-1/2 flex flex-col'>
                <h3 className='text-2xl absolute left-0 right-0  px-4 lg:text-center   font-semibold lg:text-4xl mt-8 lg:mt-0'> Our Values</h3>

                <div className='w-full  hflex flex-col items-center justify-center text-xl space-y-6  text-xl mt-4'>
                  <ul className='flex flex-col w-full  lg:mx-0 space-y-2  text-base mt-16	'>
                        {arr.map(item=>
                            <li key={item.id} className="flex flex-col space-y-2 border p-4 shadow" >
                                <div className='font-semibold uppercase text-sm'>{item.label} </div>
                                <div className='text-base'>
                                    {item.desc}
                                </div>
                              
                            </li>
                        )}     
                    </ul>
                </div>
          </div>

     
          <div className='w-full lg:w-1/2 relative'>
          <Image    
                  className='w-full lg:w-1/2'            
                    src={VImg}
                    alt="Partner2"
                    height={500}
                    objectFit="contain"
                />
            </div>
            
         
              
        
        </div>
    </div>
  )
}

export default Values