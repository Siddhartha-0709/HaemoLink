import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import React, {useState} from 'react';
import {Client, Account, ID} from 'appwrite';
import {useNavigation} from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState('');
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65590fd3c264843e9438');

  const account = new Account(client);
  const handleLogin = async () => {
    // Implement your logic for handling phone number and OTP here
    console.log(
      'Login pressed with phone number:',
      phoneNumber,
      'and OTP:',
      otp,
    );
    await addPhoneNumberToFirebase(phoneNumber);

    const session = await account.updatePhoneSession(userId, otp);
    if (session != null) {
      console.log('Login Successfull');
      navigation.navigate('Home');
    } else {
      console.log('Login Failed');
    }
  };
  const navigation = useNavigation();
  const handleGetOTP = async () => {
    // Implement your logic for sending OTP here
    console.log('Get OTP pressed for phone number:', phoneNumber);
    var phoneNumber2 = '+91' + phoneNumber;
    const sessionToken = await account.createPhoneSession(
      ID.unique(),
      phoneNumber2,
    );
    const userId = sessionToken.userId;
    setUserId(userId);
    console.log(userId);
  };
  async function addPhoneNumberToFirebase(phoneNumber) {
    const database = firebase.database();
    const usersRef = database.ref('users-list');
    const userSnapshot = await usersRef.child(phoneNumber).once('value');
    if (!userSnapshot.exists()) {
      console.log('Account not exists Signup');
      navigation.navigate('Signup');
    } else {
      const userData = userSnapshot.val();
      navigation.navigate('Home', {userData});
      console.log(userSnapshot.val());
    }
  }
  return (
    <ImageBackground
      source={require('../assets/signupbg.png')} // Replace with the actual path to your image
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.title2}>Donate Blood | Save Lives</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#E4DCCF"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
          <TouchableOpacity style={styles.getOTPButton} onPress={handleGetOTP}>
            <Text style={styles.getOTPButtonText}>Get OTP</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          placeholderTextColor="#E4DCCF"
          keyboardType="numeric"
          value={otp}
          onChangeText={text => setOtp(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => console.log('Resend OTP pressed')}>
          <Text style={styles.forgotPasswordText}>Resend OTP</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginBottom: 2,
    fontWeight: '400',
    color: 'white',
    textAlign: 'left',
  },
  title2: {
    fontSize: 20,
    marginBottom: 26,
    fontWeight: '300',
    color: 'white',
    textAlign: 'left',
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flexShrink: 1,
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: '#FFF',
    width: '80%',
    borderRadius:20
  },
  getOTPButton: {
    backgroundColor: '#18B7FF',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  getOTPButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#18B7FF',
    padding: 12,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 12,
  },
  forgotPasswordText: {
    color: '#18B7FF',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#FFF',
    marginRight: 5,
  },
  signupLink: {
    color: 'blue',
    fontWeight: '400',
  },
});
