import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';
import {fonts} from '../../infrastructure/theme/fonts';
import {TopHeading} from '../../infrastructure/theme/global.styles';

export const ToolBar = ({
  showLeftIcon,
  leftIcon,
  onLeftPressed,
  showRightIcon,
  rightIcon,
  heading,
  onRightPressed,
  isText,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <TopHeading style={styles.topHeading}>{heading}</TopHeading>
      </View>

      {showLeftIcon && (
        <TouchableOpacity onPress={onLeftPressed} style={styles.leftContainer}>
          <Image source={leftIcon} resizeMode="contain" />
        </TouchableOpacity>
      )}
      {showRightIcon && (
        <TouchableOpacity
          onPress={() => {
            onRightPressed;
          }}
          style={
            isText ? styles.rightTextContainer : styles.rightNonTextContainer
          }>
          {isText && <Text style={styles.rightTextStyle}>Setting</Text>}
          {!isText && <Image source={rightIcon} resizeMode="contain" />}
        </TouchableOpacity>
      )}
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
  },
  leftContainer: {
    marginLeft: 5,
    width: 16,
    height: 16,
    flex: 1,
    position: 'absolute',
    top: 20,
    left: 5,
  },
  topHeading: {
    alignSelf: 'center',
  },
  rightTextContainer: {
    marginRight: 5,
    width: 65,
    height: 30,
    flex: 1,
    position: 'absolute',
    top: 20,
    right: 15,
    justifyContent: 'center',
    backgroundColor: colors.ui.purple,
    borderRadius: 5,
  },
  rightNonTextContainer: {
    marginRight: 5,
    width: 16,
    height: 16,
    flex: 1,
    position: 'absolute',
    top: 6,
    right: 15,
  },
  rightTextStyle: {
    fontFamily: fonts.Poppins_Regular,
    fontSize: 16,
    color: colors.ui.blue,
    textAlign: 'center',
    fontWeight: '500',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: colors.ui.lightGray,
  },
});
