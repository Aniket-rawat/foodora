import React, { useContext, useState } from 'react'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { TbShoppingBagPlus } from 'react-icons/tb'
import { ShopContext } from '../context/ShopContext'

const Item = ({ food }) => {
    const { currency } = useContext(ShopContext)
    const [size, setSize] = useState(food.sizes[0])
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="p-4 bg-white rounded-xl shadow-md relative">
            <div className="flex items-center justify-center m-6 absolute left-0 right-0 -top-[111px]">
                <img src={food.image} alt={food.name} height={177} width={177} className="object-contain rounded-xl" />
            </div>

            <div className='pt-20'>
                <h4 className="text-xl font-semibold">{food.name}</h4>
                <div className='flex justify-between py-3'>
                    <h5 className="text-sm text-gray-500">{food.category}</h5>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
                        <span className="text-gray-500 font-semibold text-lg ml-1">4.5</span>
                    </div>
                </div>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{food.description}</p>

                <div className="mt-3 flex gap-2">
                    {["H", "F", "S", "M", "L", "XL"]
                        .filter((s) => food.sizes.includes(s))
                        .map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setSize(s)}
                                className={`h-6 w-8 text-xs font-semibold rounded-sm border ${size === s ? "bg-amber-500 text-white" : "bg-white text-black border-gray-300"}`}
                            >
                                {s}
                            </button>
                        ))}
                </div>

                <button
                    onClick={() => addToCart(food, size)}
                    className="flex items-center gap-2 mt-4 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
                    <TbShoppingBagPlus size={18} />
                    <span>Add to Cart</span>
                </button>
            </div>

            <div className='popularfood flex items-center justify-between rounded-xl py-3 text-[13px]'>
                <div className='flex flex-col gap-1'>
                    <h5>Prep</h5><p>5m</p>
                </div>
                <hr className='h-8 w-px bg-gray-400' />
                <div className='flex flex-col gap-1'>
                    <h5>Cook</h5><p>20m</p>
                </div>
                <hr className='h-8 w-px bg-gray-400' />
                <div className='flex flex-col gap-2'>
                    <h5>Price</h5><p>{currency}{food.price[size]}</p>
                </div>
            </div>
        </div>
    )
}

export default Item
