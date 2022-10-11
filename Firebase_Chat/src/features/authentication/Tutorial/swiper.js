import React, {Component, useRef, useState} from 'react';
import {
  AppRegistry,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Swiper from 'react-native-swiper';
import {colors} from '../../../infrastructure/theme/colors';
import BlueBorderedButton from '../../../utilities/components/blue.bordered.button';
import BlueBorderedWhiteBGButton from '../../../utilities/components/blue.bordered.white.bg.button';
import BlueGradientButton from '../../../utilities/components/blue.gradient.button';
import {Spacer} from '../../../utilities/components/spacer.component';
import {NavigationKeys} from '../../../utilities/constants/constants';
import Tutorial1Screen from './tutorial1.screen';
import Tutorial2Screen from './tutorial2.screen';
import Tutorial3Screen from './tutorial3.screen';

const width = Dimensions.get('screen').width;

export default SwiperComponent = props => {
  const {navigation} = props;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Swiper
        style={styles.swiper}
        activeDotColor={colors.ui.blue}
        loop={false}>
        <View style={styles.slide}>
          <Tutorial1Screen />
        </View>
        <View style={styles.slide}>
          <Tutorial2Screen />
        </View>
        <View style={styles.slide}>
          <Tutorial3Screen />
        </View>
      </Swiper>

      <View style={styles.buttonContainer}>
        <BlueGradientButton
          title="Sign Up"
          width={width - 100}
          height={45}
          onPressed={() => {
            navigation.replace(NavigationKeys.SIGNUP);
          }}
        />
        <Spacer position="bottom" size="large" />
        <BlueBorderedWhiteBGButton
          title="Sign In"
          width={width - 100}
          height={45}
          onPressed={() => {
            navigation.replace(NavigationKeys.LOGIN);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  swiper: {
    marginTop: 100,
  },
  slide: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: 'center',
    height: 150,
  },
});

AppRegistry.registerComponent('myproject', () => SwiperComponent);
