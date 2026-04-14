import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import Fuw from '../assets/fuw.png'
import { TextAlignJustify } from 'lucide-react'

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (

    <nav className='rounded-2xl m-3 text-white bg-[#0d2a4e]'>
        <div className='flex justify-between w-full px-6 py-3'>
          <div className='flex'>
            {/* logo */}
            <div className='pl-16 mr-4 pt-3'>
              <img src={Fuw} alt="Logo" className='w-10 h-10 object-contain' />
            </div>

            <div className='space-y-2 p-2'>
              <h2>Federal University Wukari</h2>
              <h3 style={{color: '#b48c32'}}>Certificate Verification System</h3>
            </div>

          </div>


          <div className='flex items-center'>

            <button onClick={toggleMenu} className='md:hidden'>
              <TextAlignJustify size={30} className='cursor-pointer'/>
            </button>

            <div className='flex-row gap-8 link-none pr-16 hidden md:flex '>
              <NavLink to="/home" className={({ isActive }) => 
              isActive ? 
            'text-[#b48c32] underline'
          : 'text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'}>Home</NavLink>

              <NavLink to='/verify' className={({ isActive }) => 
              isActive ? 
            'text-[#b48c32] underline'
          : 'text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'}>Verify a Certificate</NavLink>

              <NavLink to='/admin' className={({ isActive }) => 
              isActive ? 
            'text-[#b48c32] underline'
          : 'text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'}>Admin Login</NavLink>
            </div>
          </div>
          </div>

          {isMenuOpen ? (
           <div className='flex-col pl-23 gap-8 link-none pr-16 flex md:hidden '>
              <NavLink to="/home" className={({ isActive }) => 
              isActive ? 
            'text-[#b48c32] underline'
          : 'text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'}>Home</NavLink>

              <NavLink to='/verify' className={({ isActive }) => 
              isActive ? 
            'text-[#b48c32] underline'
          : 'text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'}>Verify a Certificate</NavLink>

              <NavLink to='/admin' className={({ isActive }) => 
              isActive ? 
            'text-[#b48c32] underline'
          : 'text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'}>Admin Login</NavLink>
            </div>
          ):null}

    </nav>
  )
}

export default NavBar
