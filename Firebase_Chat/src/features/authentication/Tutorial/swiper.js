import React, {Component} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';

import Swiper from 'react-native-swiper';
import Tutorial1Screen from './tutorial1.screen';
import Tutorial2Screen from './tutorial2.screen';
import Tutorial3Screen from './tutorial3.screen';

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <Tutorial1Screen />
        <Tutorial2Screen />
        <Tutorial3Screen />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('myproject', () => SwiperComponent);
