// src/context/ShopContext.js
import React, { createContext, useState, useEffect } from "react";
import { foods } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const [cart, setCart] = useState([]);

    // 🟢 Load saved cart
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    // 🟢 Save cart on change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated")); // for Header sync
    }, [cart]);

    // 🟢 Add item
    const addToCart = (food, size) => {
        setCart(prev => {
            const item = prev.find(i => i._id === food._id && i.size === size);

            if (item) {
                return prev.map(i =>
                    i._id === food._id && i.size === size
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }

            return [...prev, { ...food, size, quantity: 1 }];
        });
    };


    // 🟢 Remove item
    const removeFromCart = (id, size) =>
        setCart((prev) => prev.filter((i) => !(i._id === id && i.size === size)));

    // 🟢 Change quantity
    const changeQty = (id, size, delta) =>
        setCart((prev) =>
            prev
                .map((i) =>
                    i._id === id && i.size === size
                        ? { ...i, quantity: i.quantity + delta }
                        : i
                )
                .filter((i) => i.quantity > 0)
        );

    // 🟢 Clear cart (useful for after checkout)
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    return (
        <ShopContext.Provider
            value={{
                foods,
                currency,
                cart,
                addToCart,
                removeFromCart,
                increaseQty: (id, size) => changeQty(id, size, 1),
                decreaseQty: (id, size) => changeQty(id, size, -1),
                clearCart,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
