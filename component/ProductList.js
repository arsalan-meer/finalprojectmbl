import React from 'react';
import { FlatList } from 'react-native';
import Product from './Product';
import useProducts from './useProducts';

const ProductList = () => {
  const { products } = useProducts();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Product product={item} />}
    />
  );
};

export default ProductList;
