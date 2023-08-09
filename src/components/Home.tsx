import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Pressable
} from 'react-native';
import React from 'react';
const Home = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'#FFF0F5'} barStyle={'dark-content'} />
      <View>
        <Image
          source={require('../components/assets/blood.png')}
          style={styles.topBar1}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Hello
          {'\n'}
          Siddhartha
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../components/assets/donor_male.png')}
            style={styles.displayPic}
          />
        </View>
      </View>
      <Text style={styles.email}>@sidd_myself</Text>
      <Text style={styles.bloodGroup}>
        Blood Group- O⁺<Text style={{fontSize: 15}}>ve</Text>
      </Text>
      <View>
        <TouchableOpacity style={styles.map}>
          <Image
          source={require('../components/assets/maps_button.png')}
          style={{width:372, borderRadius:40,height:160}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.view1}></TouchableOpacity>
        <TouchableOpacity style={styles.view2}></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.camp}>
          <Image
          source={require('../components/assets/blood_camp.png')}
          style={{width:372, borderRadius:5,height:150}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <Pressable>
          <Text style={{fontSize:40,marginLeft:10}}>⌂</Text>
        </Pressable>
        <Pressable>
          <Text>H</Text>
        </Pressable>
        <Pressable>
          <Text>H</Text>
        </Pressable>
        <Pressable>
          <Text>H</Text>
        </Pressable>
        <Pressable>
          <Text>H</Text>
        </Pressable>
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
    fontSize: 20,
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
    paddingHorizontal: 7,
    maxHeight: 190,
    paddingVertical: 0,
  },
  view1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: 180,
    borderRadius: 8,
    elevation: 8,
    marginRight: 4,
    marginLeft: 4,
  },
  view2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
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
    width:372,
    margin: 10,
    borderRadius: 8,
    elevation: 8,
  },
  camp: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 8,
    elevation: 8,
    marginTop: 0,
  },
  bottomNav:{
    backgroundColor:'#000000',
    position: 'absolute', // Set the position to absolute
    bottom: 0, // Position it at the bottom of the parent container
    left: 0,   // Align it to the left
    right: 0,  // Align it to the right
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  }
});
