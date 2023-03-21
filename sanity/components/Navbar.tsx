import React from 'react'

const Navbar = () => { 
  return (
<div className="flex justify-center w-full bg-base-100 text-secondary"> 
  <div className="navbar max-w-screen-2xl bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-secondary text-xl">OT Detailing</a>
      </div> 
          <div className="dropdown dropdown-end flex-end"> 
          <div tabIndex={1} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://picsum.photos/200/300" />
            </div>
           </div>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a 
                className="justify-between"
                href='https://billing.stripe.com/p/login/test_fZedRD2zadofc243cc'>
                Customer Portal
              </a>
            </li>
            <li>
              <a
                className="justify-between"
                href='https://billing.stripe.com/p/login/test_fZedRD2zadofc243cc'>
                Login
              </a>
            </li>
            
          </ul>
          </div> 
    </div>
</div>
  )
}

export default Navbar
