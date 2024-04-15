import React from 'react';
import Header from './Components/Header';
// import CategoreMenu from './Components/CategoreMenu';
import CategoryMenu from './Components/CategoryMenu';
import ProductList from './Components/ProductList';

function App() {
  const productSections = [
    {
      title: 'School Bags',
      images: [
        'images/bag1.png',
        'images/bag2.png',
        'images/bag3.png',
        'images/bag4.png',
        'images/bag5.png',
      ],
      prices: [999, 799, 599, 399, 1299],
    },
    {
      title: 'Earphones',
      images: [
        'images/earphone1.png',
        'images/earphone2.png',
        'images/earphone3.png',
        'images/earphone4.png',
        'images/earphone5.png',
      ],
      prices: [1000, 799, 599, 399, 1200],
    },
    // Add more product sections here
    {
      title: 'Teddy Bears',
      images: [
        'images/teddy1.png',
        'images/teddy2.png',
        'images/teddy3.png',
        'images/teddy4.png',
        'images/teddy5.png',
      ],
      prices: [599, 599, 599, 599, 599],
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <Header />
      <CategoryMenu />
      <img src="images/banner1.jpg" alt="Banner" className="w-full" />
      {productSections.map((section) => (
        <ProductList key={section.title} {...section} />
      ))}
    </div>
  );
}

export default App;
