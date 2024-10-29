import React from 'react'

import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  const handelNavigateToProject=()=>{
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth" })
  }

  const handelNavigateToTools=()=>{
    document.getElementById("Tools").scrollIntoView({behavior:"smooth"})
  }
  return (
    <div  className='w-full  flex flex-col lg:flex-row items-center justify-between gap-3'>
      <div className='w-full bg-rounded-line bg-no-repeat bg-box-color-orange p-5 rounded-lg relative '>
        <div className='flex flex-col items-left  py-10'>
        <h2 className='text-xl md:text-2xl font-semibold text-white '>Hungry Nomad,<br/>Cinema Column...</h2>
        </div>
        
         
         <div onClick={handelNavigateToProject} className='absolute p-3 border-2 bottom-2 right-2 border-white rounded-lg cursor-pointer' >
          <GoArrowRight/>
         </div>
      </div>
      <div className='w-full bg-line-path bg-no-repeat bg-box-xolor-green p-5 rounded-lg relative '>
        <div className='flex flex-col items-left  py-10'>
        <h2 className='text-lg md:text-2xl font-semibold text-secondary-color'>Javascript,Typescript,React<br/>Redux,Tailwind,Testing...</h2>
        </div>
        
         
         <div onClick={handelNavigateToTools} className='absolute p-3 border-2 bottom-2 right-2 border-secondary-color rounded-lg cursor-pointer'>
          <GoArrowRight/>
         </div>
      </div>
    </div>
  )
}

export default Blog
