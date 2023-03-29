import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Stack, TextInput, IconButton } from '@react-native-material/core';
import { LinearGradient } from 'expo-linear-gradient';
import { useController } from 'react-hook-form';

function Input({ label, name, onChangeFn, value }) {
  return (
    <TextInput
      label={label}
      style={styles?.input}
      value={value}
      onChangeText={onChangeFn}
      type={label}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: 250,
    borderRadius: 11,
    marginBottom: 20,
    // margin: 16,
  },
});
export default Input;
