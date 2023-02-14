import React from 'react'

const Navbar = () => {
  return (
   <div>
      <div className="navbar bg-base-100  flex justify-center">
        <div className="max-w-screen-2xl w-full flex justify-between">
        <div className="navbar-start w-fit"> 
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
