import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';
import {fonts} from '../../infrastructure/theme/fonts';
import LinearGradient from 'react-native-linear-gradient';

function BlueGradientButton({
  title,
  width,
  height,
  onPressed,
  isSelected = true,
}) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.ui.blue,
        borderRadius: height / 2,
      }}
      onPress={onPressed}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.6, y: 1.0}}
        locations={[0, 1]}
        colors={[colors.ui.lightBlue, colors.ui.blue]}
        style={{
          width: width,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: height / 2,
        }}>
        <Text
          style={{
            color: colors.ui.white,
            fontSize: 17,
            fontFamily: fonts.Poppins_Regular,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default BlueGradientButton;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
