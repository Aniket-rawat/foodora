import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Import toast

const Cart = () => {
    const { cart, currency, increaseQty, decreaseQty, removeFromCart, clearCart } =
        useContext(ShopContext);

    const total = cart.reduce(
        (acc, item) => acc + item.price[item.size] * item.quantity,
        0
    );

    // ✅ Checkout click handler
    const handleCheckout = () => {
        toast.success("🎉 Order placed successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    if (cart.length === 0)
        return (
            <section className="pt-[150px] container relative px-6 md:px-8 lg:px-6">
                <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                        alt="empty-cart"
                        className="w-32 mb-4 opacity-70"
                    />
                    <h2 className="text-xl font-semibold">Your cart is empty</h2>
                    <Link
                        to="/menu"
                        className="mt-4 bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
                    >
                        Browse Menu
                    </Link>
                </div>
            </section>
        );

    return (
        <section className="pt-[150px] container relative px-6 md:px-8 lg:px-6">
            <div className="container mx-auto px-4 md:px-10 py-10 grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
                    <div className="flex flex-col gap-5">
                        {cart.map((item) => (
                            <div
                                key={`${item._id}-${item.size}`}
                                className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                            >
                                {/* Product */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-xl object-cover border"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                                        <p className="text-sm text-gray-700">
                                            {currency}
                                            {item.price[item.size]}
                                        </p>
                                    </div>
                                </div>

                                {/* Quantity + Remove */}
                                <div className="flex flex-col items-end gap-2">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => decreaseQty(item._id, item.size)}
                                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQty(item._id, item.size)}
                                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item._id, item.size)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Checkout Summary */}
                <div className="sticky top-24 h-fit bg-white shadow-lg rounded-2xl p-6 border">
                    <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
                    <div className="flex justify-between text-gray-600 mb-2">
                        <span>Subtotal</span>
                        <span>
                            {currency}
                            {total.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between text-gray-600 mb-2">
                        <span>Delivery Fee</span>
                        <span>{currency}20</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-semibold text-gray-800">
                        <span>Total</span>
                        <span>
                            {currency}
                            {(total + 20).toFixed(2)}
                        </span>
                    </div>

                    {/* ✅ Toast Trigger */}
                    <button
                        onClick={clearCart}
                        className="mt-6 w-full bg-amber-500 text-white py-3 rounded-xl font-semibold text-lg hover:bg-amber-600 transition"
                    ><span onClick={handleCheckout}>Proceed to Checkout</span>

                    </button>

                    <Link
                        to="/menu"
                        className="block text-center text-amber-600 mt-3 hover:underline"
                    >
                        ← Continue Shopping
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cart;
