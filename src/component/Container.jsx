import React, { useState, useEffect } from 'react'
import axios from 'axios'
import divider from '../assets/images/pattern-divider-desktop.svg'
import mobileDivider from '../assets/images/pattern-divider-mobile.svg'
import Button from './Button'
import Content from './Content'

const Container = () => {

    const [count, setCount] = useState(1)
    const [advice, setAdvice] = useState('')

    useEffect(() => {
        getRandomAdvice()
    }, [])

    const getRandomAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice')
            const data =  response.data
            if (advice !== data.slip.advice) {
                setAdvice(data.slip.advice)
                setCount(prevCount => prevCount + 1)
            }
        } catch (error) {
            console.error('Could not fetch advice', error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        getRandomAdvice()
    }

    function clicks() {
        return count
    }

    return (
        <div className='flex flex-col justify-center items-center gap-y-4 lg:gap-y-6 relative h-100 w-100 lg:h-80 lg:w-140 bg-[#323a49] rounded-xl p-8'>
            <div>
                <h2 className='text-[#52ffa8]'>Advice #{clicks()}</h2>
            </div>
            <Content
                advice={advice}
            />
            <div >
                <img src={divider} alt="Pattern Divider" className='hidden lg:block'/>
                <img src={mobileDivider} alt="Pattern Divider" className='lg:hidden' />
            </div>
            <Button
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Container