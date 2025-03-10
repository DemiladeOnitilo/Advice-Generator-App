import React from 'react'

const Content = ({advice}) => {
  return (
    <div className='text-center text-[#cee3e9]'>
        <p className='text-3xl'>
            {advice}
        </p>
    </div>
  )
}

export default Content