import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import WebView from 'react-native-webview';

const Chat = () => {
  const urlMap = 'https://www.google.com/';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <WebView
          source={{ uri: urlMap }}
          style={styles.map}
          startInLoadingState={true}
          // Optional: Handle errors and loading states
          renderError={(errorDomain, errorCode, errorDesc) => (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Error loading content</Text>
            </View>
          )}
          renderLoading={() => (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Adjust the background color as needed
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: 'black',
  },
});

export default Chat;
