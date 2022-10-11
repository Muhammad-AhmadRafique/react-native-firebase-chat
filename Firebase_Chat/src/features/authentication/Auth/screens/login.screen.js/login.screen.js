import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components';
import {colors} from '../../../../../infrastructure/theme/colors';
import {fonts} from '../../../../../infrastructure/theme/fonts';
import {
  BlackLabel,
  LightBlueLabel,
} from '../../../../../infrastructure/theme/global.styles';
import BlueBorderedButton from '../../../../../utilities/components/blue.bordered.button';
import BlueGradientButton from '../../../../../utilities/components/blue.gradient.button';
import {Spacer} from '../../../../../utilities/components/spacer.component';
import {
  Images,
  NavigationKeys,
} from '../../../../../utilities/constants/constants';

const width = Dimensions.get('screen').width;

const ForgotPasswordButton = styled(Text)`
  font-family: ${props => props.theme.fonts.Poppins_Regular};
  font-size: 16px;
  color: ${props => props.theme.colors.ui.lightBlue};
`;

function LoginScreen(props) {
  const {navigation} = props;

  const [email, onChangeEmail] = useState('');
  const [password, onChangePasswrod] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const btnActionGoogleLogin = () => {};
  const loginWithFacebook = () => {};
  const btnActionApple = () => {};

  const passwordHidePressed = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <Spacer position="bottom" size="veryLarge" />
        <LightBlueLabel style={styles.text}>Welcome!</LightBlueLabel>
        <Spacer position="bottom" size="small" />
        <BlackLabel style={styles.subTitle}>Sign in and get started</BlackLabel>
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
          <Spacer position="bottom" size="large" />
          <TextInput
            theme={{roundness: 23}}
            label="Password"
            secureTextEntry={hidePassword}
            activeOutlineColor={colors.ui.blue}
            outlineColor={colors.ui.lightGrayTextfield}
            mode="outlined"
            style={styles.input}
            onChangeText={onChangePasswrod}
            right={
              <TextInput.Icon
                icon={Images.eye}
                outlineColor={colors.ui.black}
                onPress={passwordHidePressed}
              />
            }
          />
          <View style={styles.buttonContainer}>
            <BlueGradientButton
              title="Sign In"
              width={width - 60}
              height={45}
              onPressed={() => {
                console.log('pressed');
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => {
              navigation.push(NavigationKeys.FORGET_PASSWORD);
            }}>
            <ForgotPasswordButton>Forgot Password?</ForgotPasswordButton>
          </TouchableOpacity>

          <Spacer position="bottom" size="veryLarge" />

          <View style={styles.socialMediaContainer}>
            <TouchableOpacity
              style={styles.socialMediaImageContainer}
              onPress={loginWithFacebook}>
              <Image source={Images.facebook} style={styles.socialMediaImage} />
            </TouchableOpacity>

            <Spacer position="right" size="veryLarge" />

            <TouchableOpacity
              style={styles.socialMediaImageContainer}
              onPress={btnActionGoogleLogin}>
              <Image source={Images.google} style={styles.socialMediaImage} />
            </TouchableOpacity>

            <Spacer position="right" size="veryLarge" />

            <View>
              {Platform.OS === 'ios' && (
                <TouchableOpacity
                  style={styles.socialMediaImageContainer}
                  onPress={btnActionApple}>
                  <Image source={Images.apple} style={styles.appleImage} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <Spacer position="bottom" size="veryLarge" />

          <View style={styles.lineContainer} />
          <Spacer position="bottom" size="large" />
          <View style={styles.buttonContainer}>
            <BlueBorderedButton
              title="Sign Up"
              width={width - 60}
              height={45}
              onPressed={() => {
                console.log('pressed');
                navigation.push(NavigationKeys.SIGNUP);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
    height: 10,
    width: 10,
  },
  // input: {
  //   flex: 1,
  //   paddingTop: 10,
  //   paddingRight: 10,
  //   paddingBottom: 10,
  //   paddingLeft: 0,
  //   backgroundColor: '#fff',
  //   color: '#424242',
  // },
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
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  socialMediaImageContainer: {
    height: 50,
    width: 50,
    shadowColor: colors.ui.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    borderRadius: 15,
    backgroundColor: colors.ui.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialMediaImage: {
    height: 25,
    width: 25,
  },
  appleImage: {
    height: 35,
    width: 35,
  },
  lineContainer: {
    height: 1,
    marginLeft: 20,
    marginRight: 20,
    width: width - 60,
    backgroundColor: colors.ui.lightGray,
  },
});
