import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex items-center justify-center px-3'>
      <div style={{backgroundColor: '#0d2a4e', color: 'white'}} className='flex flex-col items-center justify-center rounded-2xl m-3 w-full max-w-2xl py-10'>
        <div className='px-6 flex flex-col gap-4 w-full'>
          
          <div style={{color: '#b48c32'}}>
            <button className='bg-[#0d2a4e] border border-[#b48c32] rounded-full px-3 py-1 text-sm'>
              ✦ Powered By Ethereum Blockchain
            </button>
          </div>

          <div>
            <h1 className='text-2xl md:text-3xl font-bold'>Certificate Verification</h1>
            <h1 className='text-2xl md:text-3xl font-bold' style={{color: '#b48c32'}}>On The Blockchain</h1>
          </div>

          <div>
            <p className='text-sm md:text-base'>
              FUW uses Blockchain Technology to issue and verify certificates —
              reliable, tamper-proof, and instant
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-3'>
            <Link 
              to='/verify' 
              className='text-center text-[#0d2a4e] hover:text-[#b48c32] hover:bg-amber-50 transition-colors duration-200 bg-[#b48c32] rounded-md px-4 py-3 font-medium'
            >
              Verify a Certificate ➙
            </Link>
            <Link 
              to='/admin' 
              className='text-center text-white hover:text-[#b48c32] hover:bg-amber-50 transition-colors duration-200 border rounded-md px-4 py-3 font-medium'
            >
              Admin Portal
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero