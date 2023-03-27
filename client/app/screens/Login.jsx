import { useState } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import Input from '../components/input/Input';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  const handleOnPress = () => {
    console.log('working');
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  });
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/login.jpg')}
    >
      <Input />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 275,
    height: 57,
    borderRadius: 11,
  },
  background: {
    justifyContent: 'flex-end',
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 80,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
