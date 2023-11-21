import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './navigation/BottomNav';
import firebase from '@react-native-firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyBpITDKUE9_IF5mICYbVVT0GyV9EqhZWF8",
  authDomain: "haemolink.firebaseapp.com",
  databaseURL: "https://haemolink-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "haemolink",
  storageBucket: "haemolink.appspot.com",
  messagingSenderId: "641222699864",
  appId: "1:641222699864:web:2571ded0282b56ce45932d"
};
const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  console.log('Firebase Initialized');
};

const App = () =>{
  initFirebase();

  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  );
}

export default App;
