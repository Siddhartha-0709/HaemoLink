import {StyleSheet, View, Pressable, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Blogs from '../screens/Blogs';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import BlogDetails from '../screens/BlogDetails';

import BloodBanks from '../screens/BloodBanks'
import NavigationMap from '../screens/NavigationMap'
import Emergency from '../screens/Emergency';
import BloodCamps from '../screens/BloodCamps';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Donors from '../screens/Donors';
import Splash from '../screens/Splash';
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
          height:0
        },
      }}>
      <Tab.Screen
        name="Splash"
        component={Splash}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            </View>
          ),
          tabBarButton: () => null, // Hide the tab button

        }}
      />
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            </View>
          ),
          tabBarButton: () => null, // Hide the tab button

        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            </View>
          ),
          tabBarButton: () => null, // Hide the tab button

        }}
      />
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
          tabBarButton: () => null, // Hide the tab button

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
        tabBarButton: () => null, // Hide the tab button

      }}
      />
      <Tab.Screen name="Emergency" component={Emergency}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/book.png')}
              style={styles.icon}
            />
          </View>
        ),
        tabBarButton: () => null, // Hide the tab button

      }}
      />
      <Tab.Screen name="BloodCamps" component={BloodCamps}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../assets/book.png')}
              style={styles.icon}
            />
          </View>
        ),
        tabBarButton: () => null, // Hide the tab button

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
        tabBarButton: () => null, // Hide the tab button

      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        // tabBarIcon: ({focused}) => (
        //   <View>
        //     <Image
        //       source={require('../assets/user.png')}
        //       style={styles.icon}
        //     />
        //   </View>
        // ),
        tabBarButton: () => null, // Hide the tab button

      }}
      />
    <Tab.Screen name="BlogDetails" component={BlogDetails} 
      options={{
        tabBarButton: () => null, // Hide the tab button
      }}
    />
    <Tab.Screen name="BloodBanks" component={BloodBanks} 
      options={{
        tabBarButton: () => null, // Hide the tab button
      }}
    />
    <Tab.Screen name="NavigationMap" component={NavigationMap} 
      options={{
        tabBarButton: () => null, // Hide the tab button
      }}
    />
    <Tab.Screen name="Donors" component={Donors} 
      options={{
        tabBarButton: () => null, // Hide the tab button
      }}
    />
    </Tab.Navigator>
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
