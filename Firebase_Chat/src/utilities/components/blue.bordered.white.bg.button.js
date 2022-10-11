import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';
import {fonts} from '../../infrastructure/theme/fonts';
import LinearGradient from 'react-native-linear-gradient';

function BlueBorderedWhiteBGButton({
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
        backgroundColor: colors.ui.clear,
        borderRadius: height / 2,
        borderColor: colors.ui.blue,
        borderWidth: 1,
      }}
      onPress={onPressed}>
      <Text
        style={{
          color: colors.ui.black,
          fontSize: 17,
          fontFamily: fonts.Poppins_Regular,
          fontWeight: '500',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default BlueBorderedWhiteBGButton;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
