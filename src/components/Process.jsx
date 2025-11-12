import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import process1 from '../assets/process1.jpg'
import process2 from '../assets/process2.jpg'

const Process = () => {
    return (
        <section className='container relative px-6 md:px-8 lg:px-6 '>
            <div className='flex flex-col gap-20 xl:flex-row'>
                {/* left side */}
                <div className='flex-1 flex flex-col justify-center'>
                    <h4 className='text-2xl font-bold max-w-[411px] mb-7'>Order Your Favorite Food in Just a Few Clicks</h4>
                    <p>
                        Experience the convenience of ordering delicious meals anytime, Anywhere.
                        Follow these simple steps and have your favorite food delivered straight to your door
                    </p>
                    <div className='my-7 flex flex-col gap-3'>
                        <div className='flex items-center gap-x-4'>
                            <span className='flex items-center bg-amber-600 text-white h-6 w-6 p-1.5 rounded-full'><GiCheckMark /></span>
                            <p>Explore a wide variety of dishes and cuisines</p>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='flex items-center bg-amber-600 text-white h-6 w-6 p-1.5 rounded-full'><GiCheckMark /></span>
                            <p>Choose your favorite items and add them to your cart</p>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='flex items-center bg-amber-600 text-white h-6 w-6 p-1.5 rounded-full'><GiCheckMark /></span>
                            <p>Enter your details and confirm your order with ease</p>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <span className='flex items-center bg-amber-600 text-white h-6 w-6 p-1.5 rounded-full'><GiCheckMark /></span>
                            <p>Stay update with real-time tracking until your food arrives</p>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='flex-1 flex items-center md:flex-row flex-col gap-6 xl:gap-12 '>
                    <div>
                        <img src={process1} alt="" className='rounded-xl sm:m-auto shadow-2xl' />
                    </div>
                    <div className='md:relative top-8 '>
                        <img src={process2} alt="" className='rounded-xl shadow-2xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
