import React from 'react';
import { View, Text } from 'react-native';

const Product = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      {/* Add more product details as needed */}
    </View>
  );
};

export default Product;
