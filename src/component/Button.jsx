import React from 'react'
import dice from '../assets/images/icon-dice.svg'

const Button = ({handleSubmit}) => {
  return (
    <div className='absolute top-92 lg:top-72'>
        <button type='submit' onClick={handleSubmit} className='flex justify-center items-center bg-[#52ffa8] rounded-4xl h-15 w-15 cursor-pointer button-hover'>
            <img src={dice} alt="Dice" />
        </button>
    </div>
  )
}

export default Button