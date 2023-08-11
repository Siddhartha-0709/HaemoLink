import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './navigation/BottomNav';
const App = () =>{
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  );
}

export default App;
