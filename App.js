import React from 'react';
import axios from 'axios';
import {Alert} from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import Weather from './Weather';

const API_KEY = 'eb41090086a067b82256174fb7549af2';

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const { 
      data: {
        main: {temp},
        weather,
      } 
    } = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: latitude,
          lon: longitude,
          appid: API_KEY,
          units: 'metric'
        }
      }
    )
    console.log(weather);
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0],
    })
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch(e) {
      Alert.alert("Can't find you.");
      console.error(e);
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {isLoading, temp, condition} = this.state;
    console.log(condition);
    return isLoading ? <Loading/> : <Weather temp={+temp.toFixed(1)} condition={condition}/>;
  }
}
