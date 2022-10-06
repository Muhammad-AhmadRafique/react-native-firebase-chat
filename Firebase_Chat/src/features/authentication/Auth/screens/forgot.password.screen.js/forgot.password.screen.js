import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../../../../../infrastructure/theme/colors';
import {fonts} from '../../../../../infrastructure/theme/fonts';
import {
  BlackLabel,
  LightBlueLabel,
} from '../../../../../infrastructure/theme/global.styles';
import BlueBorderedButton from '../../../../../utilities/components/blue.bordered.button';
import BlueGradientButton from '../../../../../utilities/components/blue.gradient.button';
import {Spacer} from '../../../../../utilities/components/spacer.component';
const width = Dimensions.get('screen').width;

function ForgotPasswordScreen(props) {
  const {navigation} = props;
  const [email, onChangeEmail] = useState('');

  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <Spacer position="bottom" size="veryLarge" />
        <LightBlueLabel style={styles.text}>Forgot password?</LightBlueLabel>
        <Spacer position="bottom" size="small" />
        <BlackLabel style={styles.subTitle}>Enter email to reset</BlackLabel>
      </View>

      <Spacer position="bottom" size="small" />

      <ScrollView>
        <Spacer position="bottom" size="veryLarge" />
        <Spacer position="bottom" size="large" />
        <View style={styles.mainContainer}>
          <TextInput
            theme={{roundness: 23}}
            label="Email"
            activeOutlineColor={colors.ui.blue}
            outlineColor={colors.ui.lightGrayTextfield}
            mode="outlined"
            style={styles.input}
            onChangeText={onChangeEmail}
          />

          <Spacer position="bottom" size="veryLarge" />

          <View style={styles.buttonContainer}>
            <BlueGradientButton
              title="Submit"
              width={width - 60}
              height={45}
              onPressed={() => {
                console.log('pressed');
              }}
            />
            <Spacer position="bottom" size="large" />

            <BlueBorderedButton
              title="Back"
              width={width - 60}
              height={45}
              onPressed={() => {
                console.log('pressed');
                navigation.pop();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  topContainer: {
    padding: 30,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    backgroundColor: colors.ui.white,
  },
  text: {
    fontFamily: fonts.Poppins_Regular,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 23,
  },
  subTitle: {
    fontFamily: fonts.Poppins_Regular,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 17,
  },
  mainContainer: {
    flex: 1,
  },
  input: {
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 20,
    backgroundColor: colors.ui.white,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
  },
});
