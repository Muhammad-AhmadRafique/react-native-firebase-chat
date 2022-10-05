import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {MainContainer} from '../../../../../infrastructure/theme/global.styles';

function SignupScreen(props) {
  return (
    <MainContainer>
      <Text style={styles.text}>Signup screen</Text>
    </MainContainer>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
