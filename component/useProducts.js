import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API or database
    // For simplicity, using dummy data here
    const dummyProducts = [
      { id: 1, name: 'Product 1', description: 'Description 1' },
      { id: 2, name: 'Product 2', description: 'Description 2' },
      // Add more products as needed
    ];

    setProducts(dummyProducts);
  }, []);

  return { products };
};

export default useProducts;
