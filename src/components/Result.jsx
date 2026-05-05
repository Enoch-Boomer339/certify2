import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Fuw from '../assets/fuw.png'

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Certificate not found
  if (!state || !state.found) {
    return (
      <div className='flex flex-col items-center justify-center px-10 py-10'>
        <div className='w-full max-w-3xl flex flex-col items-center gap-4'>
          <div className='flex flex-row w-full items-center border rounded-2xl bg-red-50 border-red-400 p-3'>
            <div className='pl-3 pt-1 mr-2 text-2xl'>❌</div>
            <div>
              <h2 className='text-red-600 font-semibold'>Certificate Not Found</h2>
              <p className='text-red-500'>This certificate ID does not exist on the blockchain or may be invalid.</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/verify')}
            className='mt-4 bg-[#0d2a4e] text-white px-8 py-3 rounded-md hover:bg-[#11417cd3] transition-colors'
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Certificate found
  return (
    <div className='flex flex-col items-center justify-center px-10 py-2'>
      <div className='w-full max-w-3xl flex flex-col items-center justify-center gap-4'>

        <div className='flex flex-row w-full items-center border rounded-2xl bg-[#e8f5ee] border-[#1a7f4b] p-3'>
          <div className='pl-3 pt-3 mr-2'>✅</div>
          <div>
            <h2 className='text-[#1a7f4b] font-semibold'>Certificate is Valid</h2>
            <p>Genuine and Issued by Federal University Wukari</p>
          </div>
        </div>

        <div className='w-full flex flex-col border bg-[#e8f5ee] border-[#42554bd3] rounded-xl'>
          <div className='flex flex-row mb-4 rounded-t-xl p-3 bg-[#0d2a4e] items-center gap-3'>
            <img src={Fuw} alt="Logo" className='w-10 h-10 object-contain' />
            <div>
              <h2 style={{ color: 'white' }}>Federal University Wukari</h2>
              <h3 style={{ color: '#b48c32' }}>Official Academic Certificate</h3>
            </div>
          </div>

          <div className='px-6 pb-6'>
            <div className='flex flex-row mb-4 justify-between w-full'>
              <div>
                <h3 className='font-semibold text-[#0d2a4e]'>STUDENT NAME</h3>
                <p>{state.studentName}</p>
              </div>
              <div>
                <h3 className='font-semibold text-[#0d2a4e]'>MATRIC NO</h3>
                <p>{state.matricNo}</p>
              </div>
            </div>

            <div className='mb-4'>
              <h3 className='font-semibold text-[#0d2a4e]'>PROGRAMME</h3>
              <p>{state.programme}</p>
            </div>

            <div className='flex flex-row justify-between w-full mb-4'>
              <div>
                <h3 className='font-semibold text-[#0d2a4e]'>CLASSIFICATION</h3>
                <p>{state.classification}</p>
              </div>
              <div>
                <h3 className='font-semibold text-[#0d2a4e]'>DATE ISSUED</h3>
                <p>{state.dateIssued}</p>
              </div>
            </div>

            <div>
              <h3 className='font-semibold text-[#0d2a4e]'>DATE OF GRADUATION</h3>
              <p>{state.graduationDate}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/verify')}
          className='text-[#0d2a4e] underline text-sm'
        >
          Verify another certificate
        </button>

      </div>
    </div>
  )
}

export default Result;