import React from 'react'
import Image from 'next/image'
import gainImg from '../styles/img/gainImg.png';
const Gain = () => {
    const arr= [
        {id:1,label:"Training",desc:"You will be trained by experts for four months and Develop a lifelong pursuit of knowledge, understanding and wisdom."},
        {id:2,label:"Internship",desc:"You will be transfered to one of our trusted partners where you will learn. Will would also track your progress and provide data stipend."},
        {id:3,label:"Project",desc:"You will participate in real life projects and you will have your own personal projects."},
        {id:4,label:"Certificate",desc:"You will be certified."}
    ]
  return (
    <div className='flex flex-col space-y-2 lg:space-y-6'>
        <div className='wow fadeIn'>
            <h3 className='text-2xl lg:text-center font-semibold lg:text-4xl mt-12'> What You Will Gain</h3>
        </div>
        <div className='flex w-full flex-col flex-col-reverse lg:flex-row lg:items-center'>
            <div className="w-full lg:w-1/2 flex flex-col space-y-4" >
            
            <ul className='flex flex-col  lg:mx-0 space-y-4  text-base lg:pr-4	'>
                {arr.map((item,index)=>
                    <li key={item.id} className="flex flex-col space-y-2 border p-4 shadow-lg wow fadeIn"> 
                        <div className='font-semibold uppercase text-sm tracking-wide text-primary'>{item.label} </div>
                        <div className='text-base'>
                                {item.desc}
                        </div>
                        
                    </li>
                )}     
            </ul>
            </div>
            <div className='h-full hidden lg:flex w-200 lg:w-1/2 flex mb-4 items-center lg:mb-0
                wow fadeIn' data-wow-duration="2s">
                <Image
                    src={gainImg}
                    className="rounded"
                    alt="Partner2"
                    placeholder='blur'
                />
            </div>
        </div>
        
       
    </div>  
  )
}

export default Gain