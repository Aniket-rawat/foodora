import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import Item from './Item'
import { ShopContext } from '../context/ShopContext'

const PopularFoods = () => {

    const { foods } = useContext(ShopContext)
    const [popularFoods, setPopularFoods] = useState([])

    useEffect(() => {
        const data = foods.filter(item => item.popular);
        setPopularFoods(data.slice(0, 4));
    }, [foods])

    return (
        <section className='pt-[150px] container relative px-6 md:px-8 lg:px-6'>
            <Title title1={"Popular"} title2={"Foods"}
                titleStyles={'text-center !pb-20'} paraStyles={'!block max-w-[480px] mx-auto'} />
            {/* container */}

            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 
                        lg:grid-cols-4  gap-8 gap-y-36 pt-20 '>
                {
                    popularFoods.map((food) => (
                        <div key={food.id}
                        >
                            <Item food={food} />
                        </div>
                    ))
                }
            </div>


        </section>
    )
}

export default PopularFoods
