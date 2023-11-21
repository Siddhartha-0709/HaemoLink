// Signup.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import DatePicker from 'react-native-date-picker';
import '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';

import {useNavigation} from '@react-navigation/native';

const bloodGroupOptions = [
  {key: 1, label: 'A+'},
  {key: 2, label: 'A-'},
  {key: 3, label: 'O+'},
  {key: 4, label: 'O-'},
  {key: 5, label: 'B+'},
  {key: 6, label: 'B-'},
  {key: 7, label: 'AB+'},
  {key: 8, label: 'AB-'},
];

const stateOptions = [
  {key: 1, label: 'Andhra Pradesh'},
  {key: 2, label: 'Arunachal Pradesh'},
  {key: 3, label: 'Assam'},
  {key: 4, label: 'Bihar'},
  {key: 5, label: 'Chhattisgarh'},
  {key: 6, label: 'Goa'},
  {key: 7, label: 'Gujarat'},
  {key: 8, label: 'Haryana'},
  {key: 9, label: 'Himachal Pradesh'},
  {key: 10, label: 'Jharkhand'},
  {key: 11, label: 'Karnataka'},
  {key: 12, label: 'Kerala'},
  {key: 13, label: 'Madhya Pradesh'},
  {key: 14, label: 'Maharashtra'},
  {key: 15, label: 'Manipur'},
  {key: 16, label: 'Meghalaya'},
  {key: 17, label: 'Mizoram'},
  {key: 18, label: 'Nagaland'},
  {key: 19, label: 'Odisha'},
  {key: 20, label: 'Punjab'},
  {key: 21, label: 'Rajasthan'},
  {key: 22, label: 'Sikkim'},
  {key: 23, label: 'Tamil Nadu'},
  {key: 24, label: 'Telangana'},
  {key: 25, label: 'Tripura'},
  {key: 26, label: 'Uttar Pradesh'},
  {key: 27, label: 'Uttarakhand'},
  {key: 28, label: 'West Bengal'},
  {key: 29, label: 'Andaman and Nicobar Islands'},
  {key: 30, label: 'Chandigarh'},
  {key: 31, label: 'Dadra and Nagar Haveli and Daman and Diu'},
  {key: 32, label: 'Lakshadweep'},
  {key: 33, label: 'Delhi'},
  {key: 34, label: 'Puducherry'},
];

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [bloodGroup, setBloodGroup] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [age, setAge] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Implement your logic for handling sign-up data here
    console.log('Sign Up pressed with data:', {
      firstName,
      lastName,
      phoneNumber,
      age,
      bloodGroup,
      selectedState,
    });
    addToFirebase(
      firstName,
      lastName,
      phoneNumber,
      age,
      bloodGroup,
      selectedState,
    );
    navigation.navigate('Login');
  };

  async function addToFirebase(
    firstName,
    lastName,
    phoneNumber,
    age,
    bloodGroup,
    selectedState,
  ) {
    const phoneNumberString = phoneNumber.toString();
    const database = firebase.database();
    const usersRef = database.ref('users-list');
    const userSnapshot = await usersRef.child(phoneNumberString).once('value');
    if (!userSnapshot.exists()) {
      await usersRef.child(phoneNumber).set({
        phoneNumber,
        firstName,
        lastName,
        dateOfBirth,
        bloodGroup,
        selectedState,
        age,
      });
    } else {
      console.log('Account already exist!');
      //TODO: Account alreay exist display snackbar
      navigation.navigate('Login');
    }
  }

  return (
    <ImageBackground
      source={require('../assets/signupbg.png')} // Replace with the actual path to your image
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello,</Text>
        <Text style={styles.title2}>Begin your Journey to a Noble Work!</Text>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require('../assets/phone.png')} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/age2.png')} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            keyboardType="phone-pad"
            value={age}
            onChangeText={text => setAge(text)}
          />
        </View>

        {/* <TouchableOpacity
          style={styles.dateOfBirthContainer}
          onPress={() => setDatePickerVisibility(true)}>
          <Text style={styles.dateOfBirthLabel}>Date of Birth: </Text>
          <Text>{dateOfBirth.toISOString().split('T')[0]}</Text>
        </TouchableOpacity>
        {isDatePickerVisible && (
          <DatePicker
            date={dateOfBirth}
            mode="date"
            onDateChange={selectedDate => {
              setDatePickerVisibility(false);
              setDateOfBirth(selectedDate);
            }}
            androidVariant="nativeAndroid"
            textColor="#333"
          />
        )} */}

        <ModalSelector
          data={bloodGroupOptions}
          initValue="Select Blood Group"
          selectStyle={styles.modalSelect}
          selectTextStyle={styles.modalSelectText}
          onChange={option => setBloodGroup(option.label)}
          cancelText="Cancel"
          cancelStyle={styles.modalCancel}
          optionContainerStyle={styles.modalOptionContainer}
          optionTextStyle={styles.modalOptionText}
          cancelTextStyle={styles.modalCancelText}
        />

        <ModalSelector
          data={stateOptions}
          initValue="Select State"
          selectStyle={styles.modalSelect}
          selectTextStyle={styles.modalSelectText}
          onChange={option => setSelectedState(option.label)}
          cancelText="Cancel"
          cancelStyle={styles.modalCancel}
          optionContainerStyle={styles.modalOptionContainer}
          optionTextStyle={styles.modalOptionText}
          cancelTextStyle={styles.modalCancelText}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{marginTop:50}}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>Already have and Account?<Text style={{color:'blue'}}> Login</Text></Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

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
    marginBottom: 26,
    fontWeight: '400',
    color: 'white',
    textAlign: 'left',
  },
  title2: {
    fontSize: 20,
    marginBottom: 26,
    fontWeight: '300',
    color: 'white',
  },
  image: {
    height: 30,
    width: 30,
  },
  input: {
    width: '70%',
    height: 40,
    padding: 10,
    borderRadius: 20,
    color: '#000000',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  dateOfBirthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
  },
  dateOfBirthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF', // Set a background color if needed
    borderRadius: 20,
    marginBottom: 16,
    width: 320,
    height: 60,
  },

  dateOfBirthLabel: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },

  dateOfBirthText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },

  modalSelect: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
    marginBottom: 16,
    width:330,
    borderRadius:20,
  },

  modalSelectText: {
    fontSize: 18,
    color: '#000000',
  },

  modalCancel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
  },

  modalCancelText: {
    fontSize: 18,
    color: '#FF0000',
  },

  modalOptionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    },

  modalOptionText: {
    fontSize: 18,
    color: '#000000',
    padding: 12,
  },
});

export default Signup;
