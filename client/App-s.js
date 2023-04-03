// import { StatusBar } from 'expo-status-bar';
// import Welcome from './app/screens/WelcomeScreen';
// import { StyleSheet, Text, View } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import React, { useState } from 'react';
// import Routes from './App';

// import useFonts from './hooks/useFonts';

// export default function App() {
//   const [IsReady, SetIsReady] = useState(false);

//   const LoadFonts = async () => {
//     await useFonts();
//   };
//   if (!IsReady) {
//     return (
//       <AppLoading
//         startAsync={LoadFonts}
//         onFinish={() => SetIsReady(true)}
//         onError={() => {}}
//       />
//     );
//   }
//   return (
//     <View style={styles.container}>
//       <Routes />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
