import React from 'react'
import { Link } from 'react-router-dom'

const Verify = () => {
  return (
    <div>
      <div>
        <form className='flex flex-col justify-center items-center mt-5'>
            <div className='flex flex-col items-center'>
                <div className='mb-5 flex flex-col items-center'>
                    <div>
                        <button className=' text-[#0d2a4e] bg-[#e8f5ee] border border-[#1a7f4b] rounded-xl px-10 py-2 w-100 mb-4 p-2'>Certificate Verification</button>
                        
                    </div>

                    <div>
                        <h1 className='text-2xl text-[#1a7f4b] font-bold'>Verify a Certificate</h1>
                        <p className='text-xl font-medium text-[#0d2a4e]'>Copy and paste the certificate id located at the buttom of the certificate. <br />
                            Note: You don't need to have an account to verify a certificate
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center border bg-[#e8f5ee] border-[#42554bd3] rounded-xl px-10 py-2 w-100 h-60 items-center'>
                    <h3 className='mr-42'>Certificate Id: </h3>

                    <div className='flex'>
                        <input type="text" placeholder='0x3a9fBc2d1e7b...' className='border p-2' />
                        <Link to='result' className='bg-[#0d2a4e] text-white ml-4 p-2'>Verify ➙</Link>
                    </div>
                    <p>The id starts with 0x and is printed at the buttom of every certificate as from the year 2027-till date</p>
                </div>
                
            </div>

            

        </form>
      </div>
    </div>
  )
}

export default Verify
