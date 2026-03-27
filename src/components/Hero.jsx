import { Heading1 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex items-center justify-center'>
      <div style={{backgroundColor: '#0d2a4e', color: 'white', height: '300px', width: '700px'}} className='flex flex-col items-center justify-center rounded-2xl m-3'>
        <div className='px-8 flex flex-col gap-3'>
          <div style={{color: '#b48c32', border:'block',borderColor: '#b48c32'}}>
              <button className=' bg-[#0d2a4e] border rounded-full p-1 mask-linear-to-170% mr-5 '>✦ Powered By Ethereum Blockchain</button>
          </div>

          <div>
              <h1>Certificate Verification</h1>
              <h1  style={{color: '#b48c32'}}>On The Blockchain</h1>
          </div>

          <div>
              <p>FUW uses Blockchain Technology to issue and verify certificates<br/>
              reliable, tamper-proof, and instant</p>
          </div>

          <div>
              <Link to='/verify' className='text-[#0d2a4e] hover:text-[#b48c32] hover:underline hover:bg-amber-50 hover:cursor-pointer transition-colors duration-200 bg-[#b48c32] rounded-md p-3 mr-5'>Verify a Certificate ➙</Link>

              <Link to='/admin' className='text-white hover:text-[#b48c32] hover:underline hover:bg-amber-50 hover:cursor-pointer transition-colors duration-200 border rounded-md p-3'>Admin Portal</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
