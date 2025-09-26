import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className='mycontainer flex justify-between items-center py-12 px-4 h-20'>
        <div className='div1'>
          <div className="font-bold text-2xl flex w-full pl-10">
            <img className='h-20 border-2 border-x-lime-500 rounded-full' src="/icons/Logo.jpg" alt="Plase Connect With the " />
          </div>
          <div className='div2 '>
            <span className='text-green-700 ms-8'>&lt;</span>
            <span>GM</span>
            <span className='text-green-700'>VAULT&gt;</span>
          </div>
        </div>
        <ul>
          <li className='flex gap-10 justify-between'>
            <Link className='hover:font-bold' to="/">Home</Link>
            <Link className='hover:font-bold' to="/about">About</Link>
            <Link className='hover:font-bold' to="/services">Services</Link>
            <Link className='hover:font-bold' to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center">
                   <button
            className="text-white bg-red-500 my-5 rounded-full flex items-center px-5 py-2 font-bold ring-white ring-1 hover:bg-red-600 transition-colors"
            onClick={onLogout}
          >
            <lord-icon style={{ width: '28px', height: '28px', paddingTop: '0px', paddingLeft: '0px' }} src="https://cdn.lordicon.com/vfiwitrm.json" trigger="hover"></lord-icon>
            LogOut
          </button>
        </div>
      </div>
    </nav>
  )
}



export default Navbar
