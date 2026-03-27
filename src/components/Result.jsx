import React from 'react'
import {Link} from 'react-router-dom'
import Fuw from '../assets/fuw.png'


const Result = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 py-2'>
      <div className='w-full max-w-3xl flex flex-col items-center justify-center gap-4'>
        
        <div className='flex flex-row w-full items-center border rounded-2xl bg-[#e8f5ee] border-[#1a7f4b] p-3'>
          <div className='pl-3 pt-3 mr-2'>✅</div>
          <div>
            <h2 className='text-[#1a7f4b]'>Certificate is Valid</h2>
            <p>Genuine and Issued by Federal University Wukari</p>
          </div>
        </div>

        <div className='w-full flex flex-col border bg-[#e8f5ee] border-[#42554bd3] rounded-xl'>
          <div className='flex flex-row mb-4 rounded-t-xl p-3 bg-[#0d2a4e]'>
            <div>
              <img src={Fuw} alt="Logo" className='w-10 h-10 object-contain' />
            </div>
            <div className='flex flex-row'>
            <div>
              <h2 style={{ color: 'white' }}>Federal University Wukari</h2>
              <h3 style={{ color: '#b48c32' }}>Official Academic Certificate</h3>
            </div>
              <div className='ml-88 mt-8' >
              <Link to='/home' className='bg-[#1a4274] w-15 rounded-2xl text-white ml-4 p-2'>Home</Link>
              </div>
            </div>
            
          </div>

          

          <div className='px-6 pb-6'>
            <div className='flex flex-row mb-4 justify-between w-full'>
              <div>
                <h3>STUDENT NAME</h3>
                <p>Enoch Methuselah Ezekiel</p>
              </div>
              <div>
                <h3>MATRIC NO</h3>
                <p>CIS/CSS/22/041</p>
              </div>
            </div>

            <div className='mb-4'>
              <h3>PROGRAMME</h3>
              <p>B.Sc Computer Science</p>
            </div>

            <div className='flex flex-row justify-between w-full'>
              <div>
                <h3>CLASSIFICATION</h3>
                <p>First Class</p>
              </div>
              <div>
                <h3>DATE ISSUED</h3>
                <p>20/4/2027</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Result