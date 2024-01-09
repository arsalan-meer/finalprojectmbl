import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext';
import Dashboard from './Dashboard';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import Filter from './Filter';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="SearchBar" component={SearchBar} />
          <Stack.Screen name="Filter" component={Filter} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
