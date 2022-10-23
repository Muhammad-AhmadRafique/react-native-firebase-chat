import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
import {
  EMAIL_REGEX,
  Images,
} from '../../../../../utilities/constants/constants';
import auth from '@react-native-firebase/auth';

const width = Dimensions.get('screen').width;

function SignupScreen(props) {
  const {navigation} = props;
  const [email, onChangeEmail] = useState('');
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [password, onChangePassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const btnActionGoogleLogin = () => {};
  const loginWithFacebook = () => {};
  const btnActionApple = () => {};
  const passwordHidePressed = () => {
    setHidePassword(!hidePassword);
  };

  const signupButtonPressed = () => {
    if (email === '') {
      Alert.alert('Alert', 'Please enter email');
      return;
    }
    if (EMAIL_REGEX.test(email) === false) {
      Alert.alert('Alert', 'Please enter valid email');
      return;
    }
    if (firstName === '') {
      Alert.alert('Alert', 'Please enter first name');
      return;
    }
    if (lastName === '') {
      Alert.alert('Alert', 'Please enter last name');
      return;
    }
    if (password === '') {
      Alert.alert('Alert', 'Please enter password');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User created successfully');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        Alert.alert(error.toString());
      });
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topContainer}>
        <Spacer position="bottom" size="veryLarge" />
        <LightBlueLabel style={styles.text}>New Account</LightBlueLabel>
        <Spacer position="bottom" size="small" />
        <BlackLabel style={styles.subTitle}>Sign up and get started</BlackLabel>
      </View>

      <Spacer position="bottom" size="small" />

      <ScrollView>
        <Spacer position="bottom" size="veryLarge" />
        <Spacer position="bottom" size="large" />
        <View style={styles.mainContainer}>
          <TextInput
            value={email}
            theme={{roundness: 23}}
            label="Email"
            activeOutlineColor={colors.ui.blue}
            outlineColor={colors.ui.lightGrayTextfield}
            mode="outlined"
            style={styles.input}
            onChangeText={onChangeEmail}
          />
          <Spacer position="bottom" size="large" />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: width - 60,
              marginLeft: 30,
            }}>
            <TextInput
              value={firstName}
              theme={{roundness: 23}}
              label="First Name"
              activeOutlineColor={colors.ui.blue}
              outlineColor={colors.ui.lightGrayTextfield}
              mode="outlined"
              style={styles.textInput}
              onChangeText={onChangeFirstName}
            />
            <Spacer position="right" size="large" />
            <TextInput
              value={lastName}
              theme={{roundness: 23}}
              label="Last Name"
              activeOutlineColor={colors.ui.blue}
              outlineColor={colors.ui.lightGrayTextfield}
              mode="outlined"
              style={styles.textInput}
              onChangeText={onChangeLastName}
            />
          </View>
          <Spacer position="bottom" size="large" />
          <TextInput
            value={password}
            theme={{roundness: 23}}
            label="Password"
            secureTextEntry={hidePassword}
            activeOutlineColor={colors.ui.blue}
            outlineColor={colors.ui.lightGrayTextfield}
            mode="outlined"
            style={styles.input}
            onChangeText={onChangePassword}
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
              title="Sign Up"
              width={width - 60}
              height={45}
              onPressed={signupButtonPressed}
            />
          </View>

          <Spacer position="bottom" size="medium" />

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
              title="Sign In"
              width={width - 60}
              height={45}
              onPressed={() => {
                navigation.pop();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;

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
    flex: 1,
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: colors.ui.white,
    shadowColor: colors.ui.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: colors.ui.white,
    shadowColor: colors.ui.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    height: 100,
    flexDirection: 'row',
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
