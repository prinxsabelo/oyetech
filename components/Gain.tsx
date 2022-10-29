import React from 'react'
import Image from 'next/image'
import BlackShake from '../styles/img/black-shake.jpg';
const Gain = () => {
    const arr= [
        {id:1,label:"Training",desc:"You will be trained by experts for four months and Develop a lifelong pursuit of knowledge, understanding and wisdom."},
        {id:2,label:"Internship",desc:"You will be transfered to one of our trusted partners where you will learn. Will would also track your progress and provide data stipend."},
        {id:3,label:"Project",desc:"You will participate in real life projects and you will have your own personal projects."},
        {id:4,label:"Certificate",desc:"You will be certified."}
    ]
  return (
    <div className='flex flex-col flex-col-reverse space-y-4 lg:space-y-0 lg:flex-row items-center space-x-4'>
        <div className="w-full lg:w-1/2 flex flex-col space-y-4" >
            <div>
                <h3 className='text-2xl font-semibold lg:text-4xl mt-8'> What You Will Gain</h3>
            </div>
            <ul className='flex flex-col  lg:mx-0 space-y-4  text-base lg:pr-4	'>
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
        <div className='h-full flex items-center relative top-10'>
        <Image
            src={BlackShake}
           
            alt="Partner2"
        />
        </div>
       
    </div>  
  )
}

export default Gain