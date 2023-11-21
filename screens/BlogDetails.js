import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const BlogDetails = ({route}) => {
  const {selectedBlog} = route.params;
  const getGoogleDriveImageUrl = imageId => {
    return `https://drive.google.com/uc?id=${imageId}`;
  };
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView keyboardShouldPersistTaps='handled'>
      <View>
        <Image
          source={require('../assets/blood.png')}
          style={styles.topBar1}
        />
      </View>
        <View style={styles.container}>
          <Image
            source={{uri: getGoogleDriveImageUrl(selectedBlog.image)}}
            style={styles.blogImage}
          />
          <Text style={styles.blogTitle}>{selectedBlog.heading}</Text>
          <Text style={styles.blogContent}>{selectedBlog.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background:{
    backgroundColor:'#FFF0F5'
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'#FFF0F5'
  },
  topBar1: {
    width:40,
    height:40,
    marginHorizontal:175,
    backgroundColor:'#FFF0F5'
  },
  blogImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    marginBottom: 12,
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color:'#000000'
  },
  blogContent: {
    fontSize: 15,
    color: '#000000',
    fontWeight:'500'
  },
});

export default BlogDetails;
