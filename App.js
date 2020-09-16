import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import { AppLoading } from 'expo';

import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
  Ranchers_400Regular
} from '@expo-google-fonts/dev';


import Header from './src/components/Header';
import background from './src/assets/snow.jpg';



export default function App() {
  const [location, setLocation] = useState('Barueri');

  const searchInputHandler = (enteredText) => {
    setLocation(enteredText);
  };


  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
    Ranchers_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Header>Weather App</Header>
        <ImageBackground source={background} style={styles.container} opacity={0.8}>

          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Parcialmente Nublado</Text>
          <Text style={[styles.largeText, styles.textStyle]}>20°</Text>

          <TextInput
            autoCorrect={false}
            placeholder="Digite a cidade"
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={searchInputHandler}
          />

          <StatusBar style="light" backgroundColor='#4b6584' />
        </ImageBackground>
      </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Nunito_400Regular'
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  textInput: {
    backgroundColor: '#666',
    color: '#fff',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center'
  }
});
