import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../infrastructure/theme/fonts';
import BlueBorderedButton from '../../../utilities/components/blue.bordered.button';
import BlueGradientButton from '../../../utilities/components/blue.gradient.button';
import {Spacer} from '../../../utilities/components/spacer.component';
import {Images} from '../../../utilities/constants/constants';

const width = Dimensions.get('screen').width;

function Tutorial3Screen(props) {
  const {navigation} = props;

  return (
    <View style={styles.mainContainer}>
      <Image
        source={Images.networking}
        style={styles.img}
        resizeMode="contain"
      />

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
    </View>
  );
}

export default Tutorial3Screen;

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
    fontFamily: fonts.Poppins_Semibold,
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
