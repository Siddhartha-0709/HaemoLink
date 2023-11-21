import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; 

const Blogs = () => {
  const serverURL = 'https://haemolink.cyclic.app/blogs';
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
  const handleBlogPress = (obj) => {
    setSelectedBlog(obj);
  };
  const getGoogleDriveImageUrl = imageId => {
    return `https://drive.google.com/uc?id=${imageId}`;
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'#FFF0F5'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.heading}>Explore</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          {arrayOfObjects.map(obj => (
            <TouchableOpacity key={obj._id} style={styles.blogPostCard}
            onPress={() => navigation.navigate('BlogDetails', { selectedBlog: obj })}
            >
              <Image
                source={{ uri: getGoogleDriveImageUrl(obj.image) }}
                style={styles.blogImage}
              />
              <Text style={styles.blogPostCardText}>{obj.heading}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scroll:{
    height:770
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
    borderRadius: 10,
    marginBottom: 16,
    elevation: 3, 
  },
  blogImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  blogPostCardText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 12,
    marginHorizontal: 3,
  },
});
export default Blogs;
