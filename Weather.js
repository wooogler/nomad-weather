import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstom: {
    iconName: "ios-thunderstorm",
    gradient: ['#203A43','#2C5364']
  },
  Drizzle: {
    iconName: "md-rainy",
    gradient: ['#3E5151','#DECBA4']
  },
  Rain: {
    iconName: 'ios-rainy',
    gradient: ['#bdc3c7','#2c3e50']
  },
  Snow: {
    iconName: 'ios-snow',
    gradient: ['#005AA7','#FFFDE4']
  },
  Clear: {
    iconName: 'ios-sunny',
    gradient: ['#CAC531','#F3F9A7']
  },
  Clouds: {
    iconName: 'ios-cloud',
    gradient: ['#4B79A1','#283E51']
  },
  Mist: {
    iconName: 'ios-reorder',
    gradient: ['#c2e59c','#64b3f4']
  }
}

export default function Weather({temp, condition}) {
  return (
    <LinearGradient
      colors={weatherOptions[condition.main].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <Ionicons name={weatherOptions[condition.main].iconName} size={100} color='white'/>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{condition.main}</Text>
        <Text style={styles.subtitle}>{condition.description}</Text>
      </View>
    </LinearGradient>

  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 36,
    color: 'white',
  },
  title: {
    fontWeight: '300',
    fontSize: 44,
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 30,
    color: 'white',
  },
  textContainer: {
    alignItems: 'flex-start'
  }
})