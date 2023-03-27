import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Stack, TextInput, IconButton } from '@react-native-material/core';
import { LinearGradient } from 'expo-linear-gradient';

function Input() {
  const handleOnPress = () => {
    console.log('working');
  };
  return (
    <Stack spacing={30} style={styles.container}>
      <TextInput label="Email" style={styles.input} />;
      <TextInput label="Password" style={styles.input} />;
      <TouchableOpacity
        style={styles.button}
        onPress={handleOnPress}
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
        <Text>Already have an account </Text>
        <Text>Sign up</Text>
      </View>
    </Stack>
  );
}
const styles = StyleSheet.create({
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
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 57,
    borderRadius: 11,
  },
});
export default Input;
