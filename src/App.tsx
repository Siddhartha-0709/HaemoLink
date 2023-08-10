
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
} from 'react-native';
import Home from './components/Home';
import Blogs from './components/Blogs';


function App(): JSX.Element {
  return (
    <Blogs/>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
