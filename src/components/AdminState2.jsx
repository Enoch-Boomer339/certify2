import React from 'react'
import { LockKeyholeOpen } from 'lucide-react'

const AdminState2 = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <form className='flex flex-col justify-center items-center'>
            <div className='flex flex-row mb-3 bg-[#e8f5ee] border border-[#1a7f4b] rounded-xl px-10 py-2 w-150 items-center'>
                <div>
                    <LockKeyholeOpen className='text-[#b48c32] mt-1.7 mr-2'/>
                </div>

                <div>
                    <div>
                        <h3 className='text-2xl font-semibold text-[#1a7f4b]'>Wallet Connected</h3>
                    </div>

                    <div>
                        <p className='text-[#1a7f4b] font-semibold'>0x3f9a...4b2c</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-row  justify-between mb-3'>
                    <div className='flex flex-col'>
                        <label>STUDENT NAME</label>
                        <input type="text" placeholder='Enoch Methuselah Ezekiel' className='border w-58' />
                    </div>

                    <div className='flex flex-col'>
                        <label>MATRIC NUMBER</label>
                        <input type="text" placeholder='CIS/CSC/22/041' className='border w-50' />
                    </div>
                </div>

                <div className='flex flex-col justify-between mb-3' >
                        <label>PROGRAMME</label>
                        <input type="text" placeholder='B.Sc Computer Science' className='border' />
                </div>

                <div className='flex flex-row justify-between mb-3'>
                    <div className='flex flex-col '>
                        <label>CLASSIFICATION</label>
                        <select className='border w-60 p-1 bg-amber-50 gap-1.5'>
                            <option value="">First Class</option>
                            <option value="first">Second Class Upper Division</option>
                            <option value="second">Second Class Lower Division</option>
                            <option value="third">Third Class Upper Division</option>
                            <option value="fourth">Third Class Lower Division</option>
                            <option value="fifth">Pass</option>
                        </select>
                    </div>

                    <div className='flex flex-col ml-6'>
                        <label>DATE ISSUED</label>
                        <input type="text" placeholder='20/2027' className='border w-58' />
                    </div>
                </div>

                    <div className='pl-28'>
                        <button className='text-[#b48c32] hover:text-[#caab63] hover:bg-[#11417cd3] hover:cursor-pointer transition-colors duration-200 bg-[#0d2a4e] rounded-md p-3 px-17 py-2.5 mt-3.5'>Issue Certificate</button>
                    </div>

            </div>
        </form>
      </div>
    </div>
  )
}

export default AdminState2
