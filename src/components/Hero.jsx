import { NavLink } from "react-router-dom"


import { LuPizza } from "react-icons/lu"
import { MdOutlineShareLocation } from "react-icons/md"
import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.jpg"
import client3 from "../assets/client3.jpg"

const Hero = () => {
    return (
        <section className="hero">
            <div className="container relative  lg:pb-[200px] lg:pt-[300px] pb-[100px] pt-[200px] text-white px-6 md:px-8 lg:px-6 ">
                <div>
                    <h1 className="text-5xl font-bold max-w-176 capitalize">Locally product delivered direct
                        <span className="text-amber-600"> to your door</span></h1>
                </div>
                <p className="regular-16 mt-6 max-w-132 ">
                    Welcome to our food haven, where taste meets quality! Savor
                    dishers crafted with passion, fresh ingredients, and unmatched care.
                    From quick bites to hearty meals, we bring flovors that delight. Let us
                    turn your hunger into happiness, one bite at a time.
                </p>
                <div>
                    <div className="flex md:items-center gap-4 my-10 flex-col md:flex-row">
                        <div className="flex">
                            <img src={client1} alt="" className="h-16 shadow-sm rounded-full " />
                            <img src={client2} alt="" className="h-16 shadow-sm rounded-full -ml-4" />
                            <img src={client3} alt="" className="h-16 shadow-sm rounded-full -ml-4" />
                        </div>
                        <div className="text-lg font-bold">
                            176k <span className="font-normal">Excellent Reviews</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <NavLink
                            to="/menu"
                            className="flex items-center gap-2 hover:bg-white px-5 py-2 rounded-full hover:text-black/65 font-bold bg-amber-600 text-white transition-all duration-300"
                        >
                            <LuPizza className="text-xl" /> Shop Now
                        </NavLink>

                        <NavLink
                            to="/track"
                            className="flex items-center gap-2 bg-white px-5 py-2 rounded-full text-black/65 font-bold hover:bg-amber-600 hover:text-white transition-all duration-300"
                        >
                            <MdOutlineShareLocation className="text-xl" /> Track Order
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
