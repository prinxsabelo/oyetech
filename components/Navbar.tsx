import Link from "next/link"
import { useState } from "react"
import { BiMenuAltRight } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'
import removeBg from '../styles/img/image-3-1_1-removebg-preview.png'
import Image from 'next/image'
import { time } from "console"
import ButtonLink from "./ButtonLink"

const Navbar = () => {
    const [sideNav, setSideNav] = useState < boolean > (false)
    const navArr=[
        {
            id:1,
            name:"Home",
            link:"/home",
            isActive:false,
        },{
            id:2,
            name:"About Us",
            link:"/about",
            isActive:false,

        },{
            id:3,
            name:"Services",
            link:"/services",
            isActive:false,

        },{
            id:4,
            name:"Training",
            link:'/training',
            isActive:false,

        },{
            id:5,
            name:"Contact Us",
            link:"contact",
            isActive:false,

        },{
            id:6,
            name:"Blog",
            link:"blog",
            isActive:false,

        }
    ]
    return (
        <nav className="fixed top-0 left-0 right-0 px-4  sm:px-20 bg-white  navbar  flex items-center justify-between z-50 ">
            <a href="index.html" className="navbar-brand d-block d-lg-none py-4">
            <Image
                    src={removeBg}
                    alt="Picture of the author"
                 
            />
            </a>
            {!sideNav&&(
                <BiMenuAltRight className=" text-4xl lg:hidden cursor-pointer" onClick={()=>setSideNav(true)}/>
            )}
            <ul className="hidden lg:flex list-none space-x-2 font-medium text-base">
                {navArr.map(item=>
                    <li key={item.id}>
                        <a href={item.link} className="nav-link">{item.name}</a>
                    </li>    
                )}
            </ul>
            <div className="hidden lg:flex navbar-nav ms-auto py-0">
                <ButtonLink>
                    Start for Free
                </ButtonLink>
            </div>
            {sideNav&&(
                <div className="lg:hidden fixed top-0 left-0 bottom-0 w-full h-screen bg-white border flex z-50">
                    <div className="w-5/6 bg-white border  h-screen flex flex-col p-4 mb-8 space-y-4">
                        <a href="index.html" className="navbar-brand d-block d-lg-none">
                            <Image
                                    src={removeBg}
                                    alt="logo"
                                    layout="responsive"
                            />
                        </a>
                        <ul className="lg:hidden flex flex-col px-2 py-4 space-y-8">
                            {navArr.map(item=>
                                <li className="text-2xl"  key={item.id}>
                                    <a href={item.link} className="">{item.name}</a>
                                </li>    
                            )}
                        </ul>
                        <div className="p-2  fixed bottom-0 right-0 bg-white left-0 ">
                            <ButtonLink>
                                Check for more blog
                            </ButtonLink>
                        </div>
                    </div>
                    <div className="w-1/6 bg-white py-10 flex" onClick={()=>setSideNav(false)}>
                     <IoCloseOutline className=" text-5xl mx-auto cursor-pointer" onClick={()=>setSideNav(false)}/>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar