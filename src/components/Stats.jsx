import React from 'react'
import {Link} from 'react-router-dom'

const Stats = () => {
  return (
    <div className='flex justify-center'>
      <div>
            <ul className='flex flex-row link-none '>
              <li><button  className='text-[#0d2a4e] hover:text-[#b48c32] border m-0.5 px-2 '><bold>100%</bold> <br /> immutable</button></li>
              <li><button  className='text-[#0d2a4e] hover:text-[#b48c32] border m-0.5 px-2 '><bold>Hyper</bold> <br /> speed</button></li>
              <li><button className='text-[#0d2a4e] hover:text-[#b48c32] border m-0.5 px-2 '><bold>Untouchable</bold> <br /> record</button></li>
              <li><button className='text-[#0d2a4e] hover:text-[#b48c32] border m-0.5 px-2 '> <bold>Free</bold> <br /> to verify</button></li>
            </ul>
          </div>
    </div>
  )
}

export default Stats
