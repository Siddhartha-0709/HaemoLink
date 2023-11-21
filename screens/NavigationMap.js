import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

const NavigationMap = ({ route }) => {
  // Destructure the parameters from the route.params object
  const { bbLat, bbLon, latitude, longitude } = route.params;

  const generateMapUrl = (start, end) => {
    return `https://www.google.com/maps/dir/${start.latitude},${start.longitude}/${end.latitude},${end.longitude}`;
  };

  const urlMap = generateMapUrl({ latitude: bbLat, longitude: bbLon }, { latitude, longitude });

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: urlMap }}
        style={styles.map}
        startInLoadingState={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    maxHeight:800,
    marginTop:0
  },
});

export default NavigationMap;
