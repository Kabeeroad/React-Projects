import React from 'react'

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="inline-block relative">
            <span className="text-gray-700 hover:underline cursor-pointer" onClick={handleClick}>
                {title}
            </span>
            {isOpen && (
                <div className="absolute mt-1 right-0 bg-white shadow-md rounded-md w-40 py-2">
                    {children}
                </div>
            )}
        </div>
    )
}

export default Dropdown
