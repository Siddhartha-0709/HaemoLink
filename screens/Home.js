import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};


const Home= ({navigation,route}) => {
  const userDetails = route.params;
  console.log('Users=',userDetails);
  const [donors, setDonors] = useState('not available');
  const [location, setLocation] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const getLocation = async () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position.coords);
            setLocation(position);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
  };
  const handleSetDonors = async ()=>{
    try {
      const database = firebase.database();
      const usersRef = database.ref('users-list');
  
      // Fetch the data once
      const snapshot = await usersRef.once('value');
  
      // Check if data exists
      if (snapshot.exists()) {
        const users = snapshot.val();
        setDonors(users);
        console.log('All Users:', users);
      } else {
        console.log('No users found.');
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  }
  useEffect(() => {
    getLocation();
    handleSetDonors();
  }, []);
  
  const handleButtonPressMaps = ()=>{
    console.log('Latitude-  '+ latitude);
    console.log('Longitude-  '+ longitude);
    navigation.navigate('BloodBanks',{latitude,longitude},{navigation});
  }
  const handleReadBlogs =()=>{
    navigation.navigate('Blogs')
  }
  const handleEmergencyPress = ()=>{
    navigation.navigate('Emergency',{latitude,longitude},{navigation});
  }
  const handleOpenBloodCamps =()=>{
    navigation.navigate('BloodCamps');
  }
  const handleFindADonorPress = ()=>{
    navigation.navigate('Donors',{donors});
  }
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'#FFF0F5'} barStyle={'dark-content'} />
      <View>
        <Image
          source={require('../assets/blood.png')}
          style={styles.topBar1}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Hello,
          {'\n'}
          {userDetails.userData.firstName}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/donor_male.png')}
            style={styles.displayPic}
          />
        </View>
      </View>
      <View>
        <Text style={styles.email}>+91 {userDetails.userData.phoneNumber}</Text>
        <Text style={styles.bloodGroup}>
          🩸{userDetails.userData.bloodGroup} | <Image
          source={require('../assets/age.png')}
          style={{width:20,height:20}}
          /> {userDetails.userData.age}+
          <Text> | <Image
          source={require('../assets/pin.png')}
          style={{width:20,height:20}}
          />{userDetails.userData.selectedState}</Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.map}
        onPress={handleButtonPressMaps}
        >
        <Image
          source={require('../assets/maps_button1.png')}
          style={{width:378, borderRadius:40,height:160}}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.view1} onPress={handleFindADonorPress}>
        <Image
          source={require('../assets/find_donor3.png')}
          style={{width:170, borderRadius:5,height:170,marginLeft:6}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.view2}
        onPress={handleReadBlogs}
        >
        <Image
          source={require('../assets/blogs_icon.png')}
          style={{width:170, borderRadius:5,height:170,marginLeft:2}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.camp}
        onPress={handleOpenBloodCamps}
        >
          <Image
          source={require('../assets/blood_camp2.png')}
          style={{width:372, borderRadius:5,height:150}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  topBar1: {
    width:40,
    height:40,
    marginHorizontal:175
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    maxHeight: 100,
    paddingVertical: 0,
  },
  heading: {
    fontSize: 40,
    marginLeft: 10,
    fontFamily: 'sans-serif-medium',
    fontWeight: '400',
    color: '#000000',
  },
  bloodGroup: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 45,
    color: '#30002F',
  },
  imageContainer: {
    padding: 70,
    marginLeft: 30,
    borderRadius: 100,
    height: 100,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEC4',
    elevation: 6,
  },
  displayPic: {
    width: 100,
    height: 100,
    marginBottom: 9,
    marginLeft: 3,
  },
  email: {
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 20,
    color: '#30002F',
  },
  background: {
    backgroundColor: '#FAF3F0',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    maxHeight: 190,
    paddingVertical: 0,
  },
  view1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 180,
    borderRadius: 8,
    elevation: 8,
    marginRight: 4,
    marginLeft: 4,
  },
  view2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 180,
    borderRadius: 8,
    marginLeft: 4,
    marginRight: 4,
    elevation: 8,
  },
  map: {
    marginHorizontal:10,
    backgroundColor: '#FFFFFF',
    height:160,
    margin: 10,
    borderRadius: 8,
    elevation: 8,
    marginTop:40
  },
  camp: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 8,
    elevation: 8,
    marginTop: 0,
  },
 
});
