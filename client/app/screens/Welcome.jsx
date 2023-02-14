import {
  Image,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = () => {
  const handleOnPress = () => {
    console.log('working');
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/front-screen.png')}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={handleOnPress}
        title="Start"
        styles={styles.button}
        // color="#841584"
        // accessibilityLabel="Learn more about this purple button"
      >
        <LinearGradient
          colors={['#B36AE0', '#83A5D8']}
          style={[styles.container]}
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.6]}
        >
          <Text style={styles.text}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 275,
    height: 57,
    left: 43,
    top: 665,
    borderRadius: 11,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
});

export default Welcome;
