import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <View>
      <Text>Welcome, {user}!</Text>
      {/* Add more dashboard content as needed */}
    </View>
  );
};

export default Dashboard;
