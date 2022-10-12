import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../infrastructure/theme/colors';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
