import React from 'react'
import {Link} from 'react-router-dom'
import Fuw from '../assets/fuw.png'

const NavBar = () => {
  return (

    <div>
      <div className='m-3'>
        <div style={{backgroundColor: '#0d2a4e', color: 'white'}} className='flex justify-between items-center rounded-2xl'>
          <div className='flex flex-row  '>
            <div className='logo pl-16 mr-4 pt-2'>
              <img src={Fuw} alt="Logo" className='w-10 h-10 object-contain' />
            </div>

            <div className='Name of website gap-2 p-2'>
              <h2>Federal University Wukari</h2>
              <h3 style={{color: '#b48c32'}}>Certificate Verification System</h3>
            </div>

          </div>

          <div>
            <ul className='flex flex-row gap-8 link-none pr-16'>
              <li><Link to="/home" className='text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'>Home</Link></li>

              <li><Link to='/verify' className='text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'>Verify a certificate</Link></li>

              <li><Link to='/admin' className='text-white hover:text-[#b48c32] hover:underline transition-colors duration-200'>Admin Login</Link></li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default NavBar
