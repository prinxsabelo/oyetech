import React, { useEffect, useState } from 'react'
import CoursesList from './CoursesList';
import ToggleSwitch from './ToggleSwitch'

const About = () => {
  const [courseType, setCourseType] = useState("on");
  useEffect(()=>{
    console.log(courseType);
  },[])
  const onCourseChange= (checked:any) => {
    console.log(checked)
    setCourseType(checked);
  }
  let onArr = [
    {
      id:1,
      title:"UI/UX DESIGN",
      onPrice:"30,000",
      duration:"4 months",
      list:[
        "Learn UI/UX best practices using the latest trends in the industry",
        "Learn best practices that takes years to learn in the design industry",
        "Have an amazing design portfolio customized and professionally completed by the end of the course.",
        "Master both Web and Mobile design principles and how to go from sketching to fully fledged high fidelity designs that will wow customers"
      ]
    },
    {
      id:2,
      title:"Web Development",
      onPrice:"30,000",
      duration:"4 months",

      list:[
        "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
        "Create responsive, accessible, and beautiful layouts",
        "Create a complicated yelp-like application from scratch",
        "Create static HTML and CSS portfolio sites and landing pages",
        "Create complex HTML forms with validations",
        "Use CSS Frameworks including Bootstrap 5, Semantic UI"
      ]
    },
    {
      id:3,
      title:"Graphics Design",
      onPrice:"30,000",
      duration:"4 months",

      list:[
        "Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and skills",
        "Create logos and branding packages for potential clients",
        "Master the pen tool, shape builder tool and other essential vector design tools in Adobe Illustrator.",
        "Understand solid logo design and ad design principles to create compelling campaigns and logos",
        "Learn non-destructive editing techniques in Adobe Photoshop"
      ]
    },
  ]
  let offArr=[
    {
      id:1,
      title:"UI/UX DESIGN",
      offPrice:"50,000",
      duration:"4 months",

      list:[
        "Learn UI/UX best practices using the latest trends in the industry",
        "Learn best practices that takes years to learn in the design industry",
        "Have an amazing design portfolio customized and professionally completed by the end of the course.",
        "Master both Web and Mobile design principles and how to go from sketching to fully fledged high fidelity designs that will wow customers"
      ]
    },
    {
      id:2,
      title:"Web Development",
      offPrice:"50,000",
      duration:"4 months",

      list:[
        "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
        "Create responsive, accessible, and beautiful layouts",
        "Continue to learn and grow as a developer",
        "Create a complicated yelp-like application from scratch",
        "Create static HTML and CSS portfolio sites and landing pages",
        "Create complex HTML forms with validations",
        "Use CSS Frameworks including Bootstrap 5, Semantic UI"
      ]
    },
    {
      id:3,
      title:"Graphics Design",
      offPrice:"50,000",
      duration:"4 months",

      list:[
        "Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and skills",
        "Create logos and branding packages for potential clients",
        "Master the pen tool, shape builder tool and other essential vector design tools in Adobe Illustrator.",
        "Understand solid logo design and ad design principles to create compelling campaigns and logos",
        "Learn non-destructive editing techniques in Adobe Photoshop"
      ]
    }
  ]
  return (
    <div className='bg-co py-12 lg:py-24'>
        <div className='text-center flex flex-col space-y-6 lg:space-y-6'>
            <div>
                <h3 className='text-2xl lg:text-4xl text-white font-semibold wow fadeIn'> Courses we offer</h3>
            </div>
              <div className='wow fadeIn' data-wow-duration="2s">
                <ToggleSwitch  id="newsletter"
                  checked={courseType}
                  onChange={onCourseChange}
                />
              </div>
              
              <CoursesList onArr={onArr} offArr={offArr} courseType={courseType} />
            

        </div>
        
    </div>
  )
}

export default About