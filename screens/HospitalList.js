import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import HospitalLst from '../constants/hospitalList.json'
const HospitalList = ({route, navigation}) => {
  const {latitude, longitude} = route.params;
  const [cityName, setCityName] = useState(['NotFound']);
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    const fetchCityNameAndBloodBanks = async () => {
      try {
        const cityName = await returnCityName(latitude, longitude);
        if (cityName) {
          const city = cityName.split(' ');
          const shortCityName = city[0];
          console.log(`The city is: ${shortCityName}`);
          setCityName(shortCityName);
          const filteredHospitals = HospitalLst.filter(
            item => item.City === shortCityName,
          );
          setHospitals(filteredHospitals);
          console.log(filteredHospitals);
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
  return (
    <View>
      <Text>HospitalList</Text>
    </View>
  )
}

export default HospitalList

const styles = StyleSheet.create({})