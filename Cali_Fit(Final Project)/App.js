import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';

import { MyDrawer } from './Navigation/MainNavController';

const App = props => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
