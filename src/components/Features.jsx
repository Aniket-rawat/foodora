import React from 'react'
import shipping from "../assets/shipping-fast.svg"
import hot from "../assets/hot-food.svg"
import fresh from "../assets/fresh-food.svg"
import hat from "../assets/hat-chef.svg"

const Features = () => {
    return (
        <section className='container relative px-6 md:px-8 lg:px-6 '>
            <div className='flex flex-wrap items-center gap-y-12 justify-center  md:justify-between py-[50px] lg:py-[100px] '>
                <div className='flex flex-col items-center justify-center'>
                    <img src={shipping} alt="" height={44} width={44} />
                    <div className='my-4'>
                        <h5>Fast Delivery</h5>
                        <hr className='w-8 bg-amber-600 h-1 rounded-full border-none mx-auto' />
                    </div>
                    <p className='text-center w-[300px]  '>Get your order quickly with our reliable and effecient service</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={hot} alt="" height={44} width={44} />
                    <div className='my-4'>
                        <h5 >Hot Foods</h5>
                        <hr className='w-8 bg-amber-600 h-1 rounded-full border-none mx-auto' />
                    </div>
                    <p className='text-center w-[300px]'>Savor freshly prepared, steaming hot meals delivered straight to you</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={fresh} alt="" height={44} width={44} />
                    <div className='my-4'>
                        <h5 >Fresh Foods</h5>
                        <hr className='w-8 bg-amber-600 h-1 rounded-full border-none mx-auto' />
                    </div>
                    <p className='text-center w-[300px]'>We serve meals made from the freshest and finest ingredient daily</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img src={hat} alt="" height={44} width={44} />
                    <div className='my-4'>
                        <h5 >Expert Chefs</h5>
                        <hr className='w-8 bg-amber-600 h-1 rounded-full border-none mx-auto' />
                    </div>
                    <p className='text-center w-[300px]'>Our skills chefs craft every dish with passion and precision</p>
                </div>

            </div>
        </section>
    )
}

export default Features
