import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../infrastructure/theme/fonts';
import BlueBorderedButton from '../../../utilities/components/blue.bordered.button';
import BlueGradientButton from '../../../utilities/components/blue.gradient.button';
import {Spacer} from '../../../utilities/components/spacer.component';
import {Images} from '../../../utilities/constants/constants';

const width = Dimensions.get('screen').width;

function Tutorial2Screen(props) {
  const {navigation} = props;

  return (
    <View style={styles.mainContainer}>
      <Image source={Images.message} style={styles.img} resizeMode="contain" />

      <Spacer position="bottom" size="veryLarge" />
      <Spacer position="bottom" size="veryLarge" />

      <View>
        <Text style={styles.heading}>Quick chat!</Text>
        <Spacer position="bottom" size="large" />
        <Text style={styles.subHeading}>
          Quickly and easy to chat and messeging with your friends.
        </Text>
      </View>

      <Spacer position="bottom" size="veryLarge" />
      <Spacer position="bottom" size="veryLarge" />

      <View style={styles.buttonContainer}>
        <BlueGradientButton
          title="Sign Up"
          width={width - 100}
          height={45}
          onPressed={() => {
            console.log('pressed');
          }}
        />
        <Spacer position="bottom" size="large" />
        <BlueBorderedButton
          title="Sign In"
          width={width - 100}
          height={45}
          onPressed={() => {
            console.log('pressed');
            navigation.pop();
          }}
        />
      </View>
    </View>
  );
}

export default Tutorial2Screen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  img: {
    width: 250,
    height: 250,
  },
  heading: {
    fontSize: 30,
    fontFamily: fonts.Poppins_Medium,
    textAlign: 'left',
  },
  subHeading: {
    fontSize: 18,
    fontFamily: fonts.Poppins_Medium,
    textAlign: 'left',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
