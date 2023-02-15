import { StatusBar } from 'expo-status-bar';
import Welcome from './app/screens/Welcome';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';

import useFonts from './hooks/useFonts';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };
  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
