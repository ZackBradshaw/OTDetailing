import React from 'react'

const Navbar = () => {
  return (
   <div>
      <div className="navbar bg-base-100  flex justify-center">
        <div className="max-w-screen-2xl w-full flex justify-between">
        <div className="navbar-start w-fit">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label> 
          </div>
          <a className="btn-ghost btn text-xl normal-case">OT Detailing</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          
        </div>
        <div className="navbar-end w-fit">
          <a className="btn">Get started</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
