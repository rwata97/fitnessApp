import { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import Input from '../components/input/Input';
import { Stack } from '@react-native-material/core';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import { loginUser } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    data = JSON.stringify(data);
    const body = {
      email: data.email,
      password: data.password,
    };
    (async () => {
      try {
        const res = await loginUser(body);
        // const { token } = userData;
        // localStorage.setItem('token', token);
        // dispatch(
        //   logIn({
        //     payload: token,
        //   })
        // );
        console.log(res);
        // navigation.navigate('Home');
      } catch (err) {
        // console.log(err);
      }
    })();
  };

  const handleSignUpBtn = () => {
    navigation.navigate('Signup');
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/login.jpg')}
    >
      <Stack spacing={10} style={styles.container}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="email"
              onChangeFn={(text) => onChange(text)}
              value={value}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="password"
              onChangeFn={(text) => onChange(text)}
              value={value}
              placeholder="Enter password"
  placeholderTextColor="gray"
            />
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          title="Start"
        >
          <LinearGradient
            colors={['#B36AE0', '#83A5D8']}
            style={[styles.btnContainer]}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.6]}
          >
            <Text style={styles.text}>Sign in</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View>
          <Text style={{color: 'white'}}>No account?</Text>
          <Text onPress={handleSignUpBtn} style={styles.text2}>Sign up</Text>
        </View>
      </Stack>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: 'flex-end',
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  container: {
    borderWidth: 5,
    paddingTop: 20,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    borderRadius: 11,
    // margin: 16,
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
  text2: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 57,
    borderRadius: 11,
  },
});

export default LoginScreen;
