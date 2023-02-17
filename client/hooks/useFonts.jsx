import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    Inter: require('../app/assets/fonts/Inter/static/Inter-Regular.ttf'),
  });
