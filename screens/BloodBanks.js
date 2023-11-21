import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import bloodData from '../constants/blood_bankData.json';
import openMap from 'react-native-open-maps';

const BloodBanks = ({route, navigation}) => {
  const {latitude, longitude} = route.params;
  const [cityName, setCityName] = useState(['NotFound']);
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    const fetchCityNameAndBloodBanks = async () => {
      try {
        const cityName = await returnCityName(latitude, longitude);
        if (cityName) {
          const city = cityName.split(' ');
          const shortCityName = city[0];
          console.log(`The city is: ${shortCityName}`);
          setCityName(shortCityName);
          const filteredBloodBanks = bloodData.filter(
            item => item.City === shortCityName,
          );
          setBloodBanks(filteredBloodBanks);
          console.log(filteredBloodBanks);
        } else {
          console.log('City not found.');
        }
      } catch (error) {
        console.error('Error fetching city and blood banks:', error);
      }
    };

    fetchCityNameAndBloodBanks();
  }, [latitude, longitude]);
  const returnCityName = async (latitude, longitude) => {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      if (data && data.address) {
        return data.address.city || null;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const lat1Rad = toRadians(lat1);
    const lon1Rad = toRadians(lon1);
    const lat2Rad = toRadians(lat2);
    const lon2Rad = toRadians(lon2);
    const dlat = lat2Rad - lat1Rad;
    const dlon = lon2Rad - lon1Rad;
    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  const handleCardPress = (bbLat, bbLon) => {
    console.log('Clicked Here');
    console.log(bbLat);
    console.log(bbLon);
    // openMap({ latitude: bbLat, longitude: bbLon,zoom: 15,
    //   transport: 'driving',
    //   provider: 'google' });
    navigation.navigate('NavigationMap', {bbLat, bbLon, latitude, longitude});
  };
  return (
    <SafeAreaView>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Showing BloodBanks</Text>
        <Text style={styles.subHeadingText}>Current City- {cityName} </Text>
      </View>
      <View style={styles.bloodBankList}>
        <ScrollView>
          <Text style={{color: 'white', margin: 5, fontSize: 15}}>
            Found {bloodBanks.length} BloodBanks in Current City
          </Text>
          {bloodBanks.map((bloodBank, index) => (
            <TouchableOpacity
              key={index}
              style={styles.bloodBankCard}
              onPress={() =>
                handleCardPress(bloodBank.Latitude, bloodBank.Longitude)
              }>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '600',
                  marginBottom: 8,
                }}>
                {bloodBank.BloodBankName}
              </Text>
              <Text style={{color: 'grey'}}>
                Distance:
                {haversineDistance(
                  latitude,
                  longitude,
                  bloodBank.Latitude,
                  bloodBank.Longitude,
                ).toFixed(2)}
                kms
              </Text>
              <Text style={{color: 'grey'}}>
                Contact:{' '}
                {bloodBank.Mobile ? '+91 ' + bloodBank.Mobile : 'Not Available'}
              </Text>
              <Text style={{color: 'grey'}}>
                Blood Component Available: {bloodBank.BloodComponentAvailable}
              </Text>
              <Text style={{color: 'grey', marginBottom: 5}}>
                Service Time:
                {bloodBank.ServiceTime
                  ? bloodBank.ServiceTime
                  : 'Not Available'}
              </Text>
              <Text style={{color: 'grey'}}>
                Category: {bloodBank.Category}
              </Text>
              <Text style={{color: 'grey'}}>
                License ID:{' '}
                {bloodBank.LicenseID ? bloodBank.LicenseID : 'Not Available'}
              </Text>
              <Text style={{color: 'grey'}}>
                Nodal Officer: {bloodBank.NodalOfficer}
              </Text>
              <Text style={{color: 'grey'}}>
                Nodal Officer Contact:{' '}
                {bloodBank.MobileNodalOfficer
                  ? '+91 ' + bloodBank.MobileNodalOfficer
                  : 'Not Available'}
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  color: 'black',
                  textAlign: 'right',
                  marginTop: 8,
                }}>
                Press to Start Navigation
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BloodBanks;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    fontWeight: '700',
    color: 'white',
  },
  subHeadingText: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
  },
  headingContainer: {
    borderRadius: 10,
    backgroundColor: '#EA1179',
    marginHorizontal: 3,
    padding: 8,
  },
  bloodBankList: {
    backgroundColor: '#EA1179',
    margin: 4,
    borderRadius: 10,
    height:'90%',
    paddingBottom:25
  },
  bloodBankCard: {
    backgroundColor: 'white',
    margin: 5,
    padding: 8,
    borderRadius: 4,
  },
});
