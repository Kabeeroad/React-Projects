import React from 'react'

const Header = () => {
    return (
        <header className="bg-gray-800 flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <img src="images/MyCart.png.jfif" alt="MyCart" className="mr-4 h-8" />
                <input type="text" placeholder="Search for products, brands & more" className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" />
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-white hover:underline cursor-pointer">Login & Signup</span>
                <span className="text-white hover:underline cursor-pointer">More</span>
                <img src="images/cart.PNG" alt="Cart" className="h-8" />
            </div>
        </header>
    )
}

export default Header
