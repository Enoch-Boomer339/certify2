import React from 'react'
import { LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom'

const AdminState1 = () => {
  return (
    <div className='flex justify-center items-center min-w-80 min-h-96'>
      <div className='flex flex-col items-center justify-between'>
        <div>
            <LockKeyhole  className='text-[#b48c32] h-34 w-35 mb-7'/>
        </div>

        <div className='mb-6'>
            <h2 className='text-4xl font-bold mb-2 text-[#0d2a4e]'>Connect Your Wallet</h2>
            <p>You need an authorized metamask wallet to <br /> issue certificates</p>
        </div>

        <div className='flex flex-col items-center'>
            <Link to='/admin2' className='text-[#b48c32] hover:text-[#caab63] hover:bg-[#11417cd3] hover:cursor-pointer transition-colors duration-200 bg-[#0d2a4e] rounded-md p-3 px-17'>Connect MetaMask Wallet</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminState1
