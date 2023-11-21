import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { Image } from '@rnmapbox/maps';

const BloodCamps = () => {
  const serverURL = 'https://haemolink.cyclic.app/bloodcamps'; //Change
  const [arrayOfObjects, setArrayOfObjects] = useState([]);

  useEffect(() => {
    axios
      .get(serverURL)
      .then(response => {
        setArrayOfObjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  function formatDate(inputDate) {
    inputDate = new Date(inputDate)
    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = inputDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}
function getTimeFromDate(inputDate) {
  inputDate = new Date(inputDate)
  const hours = inputDate.getHours().toString().padStart(2, '0');
  const minutes = inputDate.getMinutes().toString().padStart(2, '0');
  const seconds = inputDate.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}
  const navigation = useNavigation();
  console.log(arrayOfObjects)
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'#FFF0F5'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.heading}>Blood Camps</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          {arrayOfObjects.map(obj => (
            <TouchableOpacity
              key={obj._id}
              style={styles.blogPostCard}
             >
              <Text style={styles.blogPostCardTextHeading}>{obj.organisation}</Text>
              <Text style={styles.blogPostCardText}>Date: {formatDate(obj.date)}</Text>
              <Text style={styles.blogPostCardText}>Start: {getTimeFromDate(obj.start_time)} AM</Text>
              <Text style={styles.blogPostCardText}>End: {getTimeFromDate(obj.end_time)} PM</Text>
              <Text style={styles.blogPostCardText}>{obj.district}, {obj.state}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BloodCamps;

const styles = StyleSheet.create({
  scroll: {
    height: 770,
  },
  background: {
    backgroundColor: '#FFF0F5',
    flex: 1,
  },
  container: {
    padding: 13,
  },
  heading: {
    color: '#000000',
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 16,
  },
  blogPostCard: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    marginBottom: 10,
    padding: 4, // Increase padding for more spacing
  },
  
  blogPostCardText: {
    color: '#333333', // Use a slightly darker color for better readability
    fontSize: 18,
    fontWeight: '300', // Increase font weight for a more professional look
    marginVertical: 0, // Add more vertical spacing
    marginHorizontal: 12, // Add more horizontal spacing
  },
  blogPostCardTextHeading: {
    color: '#333333', // Use a slightly darker color for better readability
    fontSize: 20,
    fontWeight: '800', // Increase font weight for a more professional look
    marginVertical: 0, // Add more vertical spacing
    marginHorizontal: 12, // Add more horizontal spacing
  },
  
});
