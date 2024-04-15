import React from 'react'

const ProductList = ({ title, images, prices }) => {
    return (
        <div className="bg-white py-4 px-4">
            <h2>{title}</h2>
            <hr />
            <div className="grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={image} alt={`Product ${index + 1}`} className="h-48 object-cover" />
                        <p className="text-green-500 mt-2 text-sm">Price: {prices[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList
