import React from 'react'

const Header = ({heading1,heading2}) => {
  return (
    <>
      <div className="text-white  text-center xl:text-left mt-0 lg:mt-10">
        <div className="hidden md:block lg:hidden mt-4 ">
          <div className=" w-full flex gap-2 justify-center">
            <h1 className="text-4xl font-bold">{heading1}</h1>
            <h1 className="text-4xl font-bold text-secondary-color">
              {heading2}
            </h1>
          </div>
        </div>
        <h1 className="text-4xl mt-10 md:hidden lg:block lg:text-7xl  lg:mt-0 xl:text-7xl font-extrabold text-whitetracking-wide">
          {heading1}
        </h1>
        <h1 className="text-5xl md:hidden lg:block lg:text-8xl xl:text-7xl font-bold text-secondary-color tracking-wide">
         {heading2}
        </h1>
      </div>
    </>
  )
}

export default Header
