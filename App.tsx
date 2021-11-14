import React from 'react';
import { StyleSheet } from 'react-native';
import StackNavigation from './app/navigation';
import Store from './app/store';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    'Rubik-Regular': require('./app/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./app/assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('./app/assets/fonts/Rubik-Medium.ttf'),
  });
  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={Store}>
        <StackNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
