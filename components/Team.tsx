import React from 'react'
import tutor1 from '../styles/img/tutor1.png';
import tutor2 from '../styles/img/tutor2.png';
import tutor3 from '../styles/img/tutor3.png';
import tutor4 from '../styles/img/tutor4.png';
import tutor5 from '../styles/img/tutor5.png';
import tutor6 from '../styles/img/tutor6.png';
import Image from 'next/image'


const Team = () => {
  const arr =[
    {id:1,
      name:"Oyewunmi",
      role:"Product Designer",
      label:"5 Years Experience",
      tutorImage:tutor1
  },
  {id:2,
      name:"Toluwani ",
      role:"Web Developer",
      label:"3 Years Experience",
      tutorImage:tutor2
  },  
  {id:3,
      name:"Emmanuel ",
      role:"Graphics Designer",
      label:"4 Years Experience",
      tutorImage:tutor3
  }, 
   {id:4,
    name:"Claire ",
    role:"Product Designer",
    label:"2 Years Experience",
    tutorImage:tutor4
},  {
  id:5,
    name:"Fola ",
      role:"Web Developer",
    label:"2 Years Experience",
    tutorImage:tutor5
},{
  id:6,
    name:"Mosope",
    role:"Graphics Designer",
    label:"3 Years Experience",
    tutorImage:tutor6

}


  ]
  return (
    <div className='flex flex-col space-y-8'>
      <div>
        <h3 className='text-2xl font-semibold lg:text-4xl mt-8 text-center'>Meet Our Tutors</h3>
      </div>
     
    </div>

  )
}

export default Team