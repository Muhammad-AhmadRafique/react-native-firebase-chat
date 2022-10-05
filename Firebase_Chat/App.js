/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from './src/infrastructure/theme/fonts';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';
import Routes from './src/navigators/routes';
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.Lato_Bold,
    fontSize: 20,
  },
});
