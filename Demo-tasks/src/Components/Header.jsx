import React from 'react'
import imgbag from '../assets/imgbag.png'
import Dropdown from './Dropdown'
const Header = () => {
    return (
        <header className="  bg-yellow-500 h-10px w-100% flex justify-between items-center px-5 py-10 ">
            <div className="flex items-center">
                <img src="https://www.mycart.pk/skin/frontend/smartwave/porto_child/images/mcpklogo.png" alt="MyCart" className="mr-4 h-8" />
                <input type="text" placeholder="Search for products, brands & more" className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" />
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-white hover:underline cursor-pointer ">Login & Signup</span>
                <span className="text-white hover:underline cursor-pointer">More</span>
                <img src={imgbag} alt="Cart" className="h-8" />

            </div>

        </header >
    )
}

export default Header
