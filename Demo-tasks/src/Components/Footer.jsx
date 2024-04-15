import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 px-4 flex justify-center items-center">
            <p>&copy; MyCart.pk - All Rights Reserved</p>
            <ul className="flex items-center ml-4 space-x-4">
                <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Privacy Policy
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
