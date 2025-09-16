import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <Link className='hover:font-bold' to="/contact">Contact Us</Link>
            <Link className='hover:font-bold' to="/services">Services</Link>
          </li>
        </ul>
        <button className='text-white bg-green-500 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
          <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
          <a href="https://github.com/Ratnesh-Jatav" target='_blank' rel="noopener noreferrer">
            <span className='font-bold px-2'>GitHub</span>
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
