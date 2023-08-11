import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useState, useEffect} from 'react';
const Blogs = () => {
  const serverURL = 'http://152.58.166.24/blogs';
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
  const getGoogleDriveImageUrl = imageId => {
    return `https://drive.google.com/uc?id=${imageId}`;
  };
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'#FFF0F5'} barStyle={'dark-content'} />
      <View>
        <View>
          <Text style={styles.heading}>Explore </Text>
        </View>
        <View></View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
          </ScrollView>
        </View>
        <View style={styles.verticalScroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {arrayOfObjects.map((obj, index) => (
            <TouchableOpacity key={obj._id} style={styles.blogPostCard}>
                <Image
                  source={{uri: getGoogleDriveImageUrl(obj.image)}}
                  style={{width: 400, height: 200}}
                />
                <Text style={[styles.blogPostCardText, {textAlign: 'left'}]}>
                  {obj.heading}
                </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row', 
    padding: 10,
  },
  topBar1: {
    width: 40,
    height: 40,
    marginHorizontal: 175,
  },
  background: {
    backgroundColor: '#FAF3F0',
    height: '100%',
    padding: 8,
  },
  heading: {
    color: '#000000',
    fontSize: 40,
    fontWeight: '700',
  },
  horizontalScroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 6,
  },
  item: {
    width: 150, // Adjust the width as needed
    height: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 5,
  },
  blogPostCard: {
    marginTop: 10,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 0,
  },
  blogPostCardText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
  },
  verticalScroll:{
    height:800
  }
});
