

import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";

const Menu = () => {
    const { foods, addToCart } = useContext(ShopContext); // assuming ShopContext has foods & addToCart
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("default");
    const [filteredFoods, setFilteredFoods] = useState([]);

    // Filter + Sort logic
    useEffect(() => {
        let filtered = foods.filter((food) =>
            food.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Sorting logic
        switch (sortOption) {
            case "lowToHigh":
                filtered.sort((a, b) => a.price.F - b.price.F);
                break;
            case "highToLow":
                filtered.sort((a, b) => b.price.F - a.price.F);
                break;
            case "name":
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        setFilteredFoods(filtered);
    }, [foods, searchTerm, sortOption]);

    return (
        <div className="container mx-auto px-4 pt-[150px]">
            {/* Search and Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search product..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />

                {/* Sort */}
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                    <option value="default">Sort by</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                    <option value="name">Name (A-Z)</option>
                </select>
            </div>

            {/* Product Grid */}
            {filteredFoods.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-30 gap-10 pt-30">
                    {filteredFoods.map((food) => (
                        <Item key={food.id} food={food} addToCart={addToCart} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;

