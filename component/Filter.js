import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Filter = ({ onFilter }) => {
  const [filter, setFilter] = useState('');

  const handleFilter = () => {
    onFilter(filter);
    setFilter('');
  };

  return (
    <View>
      <TextInput
        placeholder="Filter products"
        value={filter}
        onChangeText={(text) => setFilter(text)}
      />
      <Button title="Filter" onPress={handleFilter} />
    </View>
  );
};

export default Filter;
