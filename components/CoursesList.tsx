import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import {AiOutlineCheckCircle} from 'react-icons/ai';
import ButtonLink from './ButtonLink';
const CoursesList = (props:any) => {
  const { onArr, offArr, courseType} = props;
  console.log(courseType)
  return (
    <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:gap-4
                    lg:flex justify-around  p-2 flex-wrap items-start '>
        
    {courseType === 'on' ?
      <>
       {onArr.map((item:any) =>
            <div key={item.id} className='w-full p-2 lg:m-0 flex-none text-left bg-white
                    co-card rounded-2xl p-4 lg:rounded-3xl flex flex-col space-y-4   '>
                <header className='flex flex-col space-y-2'>
                  <h3 className='uppercase text-2xl text-primary font-medium tracking-wide'> {item.title} </h3>
                  <div className='text-3xl lg:text-5xl text-primary font-semibold tracking-wider'>
                    &#8358;{item.onPrice}
                  </div>
                </header>
                <div className='border-b-2'></div>
                <div>
                  Duration: {item.duration}
                </div>
                <div className='flex flex-col space-y-2 items-start text-base' >
                      {item.list?.map((co:any,index:number)=>
                        <div className='flex space-x-2' key={index}>
                      
                            <div className='w-8'>
                              <AiOutlineCheckCircle className='w-5 h-5 mt-1' />
                            </div>
                            <div>
                              {co}
                            </div>
                        
                         
                        </div>
                      )}
                  
                    
                </div>
                <footer>
                  <ButtonLink className="w-full">
                        Get Started
                  </ButtonLink>
                
                </footer>
            </div>
       )}
      </>    
      :
      <>
        {offArr.map((item:any) =>
          <div key={item.id} className='w-full lg:m-0 flex-none text-left bg-white
                    co-card rounded-2xl p-4 lg:rounded-3xl flex flex-col space-y-4   '>
            <header className='flex flex-col space-y-2'>
              <h3 className='uppercase text-2xl text-primary font-medium tracking-wide'> {item.title} </h3>
              <div className='text-3xl lg:text-5xl text-primary font-semibold tracking-wider'>
                &#8358;{item.offPrice}
              </div>
            </header>
            <div className='border-b-2'></div>
            <div>
              Duration: {item.duration}
            </div>
            <div className='flex flex-col space-y-4 items-start text-base' >
                  {item.list?.map((co:any,index:number)=>
                      <div className='flex space-x-2' key={index}>
                    
                          <div className='w-8'>
                            <AiOutlineCheckCircle className='w-5 h-5 mt-1' />
                          </div>
                          <div>
                            {co}
                          </div> 
                      </div>
                    )}
            </div>
      <footer>
        <ButtonLink className="w-full">
              Get Started
        </ButtonLink>

      </footer>
          </div>
        )}
      
      </>

    
    }
    </div>
  )
  
}

export default CoursesList