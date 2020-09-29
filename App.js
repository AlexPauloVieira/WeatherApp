import { Chivo_400Regular } from '@expo-google-fonts/dev';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';


import Header from './src/components/Header';
import SearchInput from './src/components/SearchInput';

import { fetchLocationId, fetchWeather } from './src/utils/api';
import getImage from './src/utils/getImage';

//import background from './src/assets/snow.jpg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
    };
  }

  componentDidMount() {
    this.handleUpdateLocation('São Paulo');
  }

  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId,
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  render() {
    const { loading, location, error, weather, temperature } = this.state;

    return (
      <>
        <Header>Tempo App</Header>
        <ImageBackground source={getImage(weather)} style={styles.imageContainer}>
          <View style={styles.componentsContainer}>
            <ActivityIndicator animating={loading} color='#ffcc00' size='large' />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Não conseguimos carregar o tempo, tente outra cidade por favor!
                  </Text>
                )}
                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {location}
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>
                      {(
                        weather === 'Showers' ? 'Olha a chuva' :
                          weather === 'Clear' ? 'Deu Praia' :
                            weather === 'Hail' ? 'Olha a neblina' :
                              weather === 'Heavy Cloud' ? 'Nuvens Pesadas' :
                                weather === 'Light Cloud' ? 'Nuvenzinhas de leve' :
                                  weather === 'Heavy Rain' ? 'Que chovona hein?!?' :
                                    weather === 'Light Rain' ? 'Olha a garoa!' :
                                      weather === 'Sleet' ? 'Ta chovendo gelo, parça!' :
                                        weather === 'Snow' ? 'Ta nevandooooo!!!' : 'Cuidado com os raios'
                      )}
                    </Text>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {`${Math.round(temperature)}°`}
                    </Text>
                  </View>
                )}

                <SearchInput
                  placeholder="Digite a cidade"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}
          </View>
        </ImageBackground>
        <StatusBar style="light" backgroundColor='#203e5f' />
      </>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  componentsContainer: {
    paddingVertical: 130
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffcc00'
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
