import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='flex flexwrap-col items-center'>
    <img className='w-10 h-10' src="../public/logo.png" alt="" />
    <p className='font-semibold text-xl'>BlogSpace</p>
    </div>
  )
}

export default Logo