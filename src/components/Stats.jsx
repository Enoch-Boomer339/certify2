import React from 'react'

const Stats = () => {
  return (
    <div className='flex justify-center px-3 my-2'>
      <ul className='grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-2xl'>
        <li>
          <button className='w-full text-[#0d2a4e] hover:text-[#b48c32] border rounded-md py-2 px-3'>
            <span className='font-bold block'>100%</span>
            <span className='text-sm'>immutable</span>
          </button>
        </li>
        <li>
          <button className='w-full text-[#0d2a4e] hover:text-[#b48c32] border rounded-md py-2 px-3'>
            <span className='font-bold block'>Hyper</span>
            <span className='text-sm'>speed</span>
          </button>
        </li>
        <li>
          <button className='w-full text-[#0d2a4e] hover:text-[#b48c32] border rounded-md py-2 px-3'>
            <span className='font-bold block'>Untouchable</span>
            <span className='text-sm'>record</span>
          </button>
        </li>
        <li>
          <button className='w-full text-[#0d2a4e] hover:text-[#b48c32] border rounded-md py-2 px-3'>
            <span className='font-bold block'>Free</span>
            <span className='text-sm'>to verify</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Stats