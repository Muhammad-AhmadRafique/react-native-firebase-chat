import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../infrastructure/theme/colors';
import {fonts} from '../../../../infrastructure/theme/fonts';
import {Spacer} from '../../../../utilities/components/spacer.component';
import {
  Images,
  NavigationKeys,
} from '../../../../utilities/constants/constants';

function SplashScreen(props) {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      // navigation.replace(NavigationKeys.LOGIN);
      navigation.replace(NavigationKeys.TUTORIAL);
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.ui.black}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1.0}}
        locations={[0, 1]}
        colors={[colors.ui.lightBlue, colors.ui.blue]}
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={Images.chat} style={styles.img} resizeMode="contain" />
          <Spacer position="bottom" size="large" />
          <Text style={styles.text}>Connect to people...</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
  },
  text: {
    fontFamily: fonts.Poppins_Regular,
    fontSize: 19,
    color: colors.ui.white,
  },
});
