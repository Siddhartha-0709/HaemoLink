import {StyleSheet, View, Pressable, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Blogs from '../screens/Blogs';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Blogs" component={Blogs}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/book.png')}
              style={styles.icon}
            />
          </View>
        ),
      }}
      />
      <Tab.Screen name="Chat" component={Chat} 
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/chat.png')}
              style={styles.icon}
            />
          </View>
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/user.png')}
              style={styles.icon}
            />
          </View>
        ),
      }}
      />
    </Tab.Navigator>
    // <View style={styles.bottomNav}>
    //   <Pressable onPress={goToHome}>
    //     <Image
    //       source={require('../components/assets/home.png')}
    //       style={styles.icon}
    //     />
    //   </Pressable>
    //   <Pressable onPress={goToChat}>
    //     <Image
    //       source={require('../components/assets/chat.png')}
    //       style={styles.icon}
    //     />
    //   </Pressable>
    //   <Pressable onPress={goToBlogs}>
    //     <Image
    //       source={require('../components/assets/book.png')}
    //       style={styles.icon}
    //     />
    //   </Pressable>
    //   <Pressable onPress={goToAccount}>
    //     <Image
    //       source={require('../components/assets/user.png')}
    //       style={styles.icon}
    //     />
    //   </Pressable>
    // </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  bottomNav: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 6,
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default BottomNav;
