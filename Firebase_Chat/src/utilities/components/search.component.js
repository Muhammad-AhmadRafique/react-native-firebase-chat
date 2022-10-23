import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {Images} from '../../utilities/constants/constants';
import {colors} from '../../infrastructure/theme/colors';
import {fonts} from '../../infrastructure/theme/fonts';

function SearchbarComponent({placeholder, value, onChangeText}) {
  return (
    <View style={styles.searchSection}>
      <Image style={styles.searchIcon} source={Images.search} size={15} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        returnKeyType="search"
      />
    </View>
  );
}

export default SearchbarComponent;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ui.lightGray,
    borderColor: colors.ui.lightGray,
    borderWidth: 2,
    borderRadius: 15,
  },
  searchIcon: {
    margin: 10,
    height: 15,
    width: 15,
  },
  input: {
    flex: 1,
    // paddingTop: 10,
    paddingRight: 10,
    // paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: colors.ui.clear,
    color: colors.ui.black,
    fontFamily: fonts.Poppins_Regular,
    fontSize: 15,
    fontWeight: '400',
  },
});
