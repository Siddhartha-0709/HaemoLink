import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomNav from './BottomNav';
const Blogs = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'#FFF0F5'} barStyle={'dark-content'} />
      <View>
        {/* <View>
          <Image
            source={require('../components/assets/blood.png')}
            style={styles.topBar1}
          />
        </View> */}
        <View>
          <Text style={styles.heading}>Explore </Text>
        </View>
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.item}></View>
                <View style={styles.item}></View>
                <View style={styles.item}></View>
                <View style={styles.item}></View>
            </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        <View style={styles.blogPostCard}></View>
        </ScrollView>
      </View>
      <BottomNav />
    </SafeAreaView>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row', // Horizontal direction
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
    borderRadius:5

  },
  blogPostCard: {
    marginTop:10,
    height: 250,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5
  },
});
