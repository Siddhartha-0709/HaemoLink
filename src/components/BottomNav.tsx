import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

const BottomNav = () => {
  return (
    <View style={styles.bottomNav}>
      <Pressable>
        <Image
          source={require('../components/assets/home.png')}
          style={styles.icon}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../components/assets/chat.png')}
          style={styles.icon}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../components/assets/book.png')}
          style={styles.icon}
        />
      </Pressable>
      <Pressable>
        <Image
          source={require('../components/assets/user.png')}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: '#FFFFFF',
    position: 'absolute', // Set the position to absolute
    bottom: 0, // Position it at the bottom of the parent container
    left: 0, // Align it to the left
    right: 0, // Align it to the right
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    paddingVertical: 6,
  },
  icon:{
    height: 30,
    width: 30,
    marginLeft: 20,
    marginRight: 20,
  },
});
