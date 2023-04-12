import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import Input from '../components/input/Input';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Stack } from '@react-native-material/core';
import { signupUser } from '../services/auth';

function SignupScreen() {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    console.log(data);

    (async () => {
      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      console.log(data, data.name);
      try {
        const res = await signupUser(body);
        // const { token } = userData;
        // localStorage.setItem('token', token);
        // dispatch(
        //   logIn({
        //     payload: token,
        //   })
        // );
        console.log(res);
        navigation.navigate('Home');
      } catch (err) {
        console.log(err);
      }
    })();
  };

  const handleSigninBtn = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/signup.jpg')}
    >
      <Stack spacing={10} style={styles.container}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label="name"
              onChangeFn={(text) => onChange(text)}
              value={value}
            />
          )}
        />
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
            <Text style={styles.text}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View>
          <Text style={{color: 'white'}}>Already have an account?</Text>
          <Text onPress={handleSigninBtn} style={styles.text2}>Sign in</Text>
        </View>
      </Stack>
    </ImageBackground>
  );
}

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

export default SignupScreen;
