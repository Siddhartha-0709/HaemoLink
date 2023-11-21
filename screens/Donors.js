// DonorsScreen.js

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DonorsScreen = ({ route }) => {
  const { donors } = route.params;

  const renderDonorItem = ({ item }) => {
    return (
      <View style={styles.donorItem}>
        <Text style={styles.donorName}>{`${item.firstName} ${item.lastName}`}</Text>
        <Text>Blood Group: {item.bloodGroup}</Text>
        <Text>Phone Number: {item.phoneNumber}</Text>
        <Text>State: {item.selectedState}</Text>
        {/* Add more details as needed */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Donors</Text>
      <FlatList
        data={Object.values(donors)}
        keyExtractor={(donor) => donor.phoneNumber}
        renderItem={renderDonorItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 26,
    color:'#000000'
  },
  donorItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  donorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DonorsScreen;
