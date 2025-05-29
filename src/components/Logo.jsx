import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='flex flexwrap-col items-center'>
    <img className='w-10 h-10' src="/logo.png" alt="" />
    <p className='font-bold text-2xl'>BlogSpace</p>
    </div>
  )
}

export default Logo