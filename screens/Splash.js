import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    const handleGetStarted =()=>{
        navigation.navigate('Signup');
    }
  return (
    <ImageBackground
      source={require('../assets/signupbg.png')} // Replace with the actual path to your image
      style={styles.background}>
      <Image source={require('../assets/donation.png')} style={styles.image} />
      <Text style={styles.appName}>HaemoLink</Text>
      <Text style={styles.tagline}>Connecting Lives, Sharing Hope</Text>
      <TouchableOpacity style={styles.button}
      onPress={handleGetStarted}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' or 'stretch'
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
    marginHorizontal: 50,
  },
  appName: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#000000', // Adjust color as needed
    textAlign: 'center', // Center the text
    marginBottom: 8, // Add some space between app name and tagline
  },

  tagline: {
    fontSize: 20,
    color: '#000000', // Adjust color as needed
    textAlign: 'center', // Center the text
    fontStyle: 'italic', // Add italic style for a stylish touch
  },
  button: {
    backgroundColor: '#000000', // Use your desired background color
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    width:150,
    marginHorizontal:130,
    marginTop:40
  },

  buttonText: {
    color: '#fff', // White text color for better contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
});
