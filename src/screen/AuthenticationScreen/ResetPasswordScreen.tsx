import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {moderateScale} from 'react-native-size-matters';
import {ICON_ASSETS} from '../../assets/IconAssets';
import SizedBox from '../../components/SizedBox';
import Input from '../../components/input/Input';
import COLORS from '../../constants/Colors';
import {DEVICE} from '../../utils/Device';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
import Button from '../../components/button/Button';
import NavigationHelper from '../../utils/NavigationHelper';
export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [missingField, setMissingField] = useState(false);
  const [valid, setValid] = useState(false);
  const logoAnimation = useRef(new Animated.Value(0)).current;
  const formAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = formAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '45%'],
  });
  const animate = () => {
    Animated.sequence([
      Animated.timing(logoAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(formAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ]).start();
  };
  const close = () => {
    Animated.timing(formAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(() => {
      setValid(true);
      open();
    });
  };
  const open = () => {
    Animated.timing(formAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };
  const confirm = () => {
    if (valid) {
      NavigationHelper.back();
    } else {
      close();
    }
  };
  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={[GlobalStyle.container, styles.container]}>
      <View style={styles.content}>
        <SizedBox height={moderateScale(0)} />
        <SizedBox height={moderateScale(50)} />
        <Animated.View style={{opacity: logoAnimation}}>
          <ICON_ASSETS.Logo
            width={DEVICE.SCREEN_WIDTH / 1.3}
            height={DEVICE.SCREEN_WIDTH / 5}
          />
        </Animated.View>
        <Animated.View
          key={'InputForm'}
          style={{
            alignItems: 'center',
            height: heightAnimation,
            overflow: 'hidden',
          }}>
          {!valid ? (
            <>
              <Input
                missingField={missingField && email.length === 0}
                isRequired={true}
                label={'Email'}
                value={email}
                onChange={inp => setEmail(inp)}
              />
              <SizedBox height={moderateScale(15)} />
              <Input
                keyboard={'number-pad'}
                limit={4}
                missingField={missingField && code.length < 4}
                isRequired={true}
                label={'Code'}
                value={code}
                onChange={inp => setCode(inp)}
                icon={
                  <TouchableOpacity
                    disabled={email.length === 0}
                    onPress={() => {
                      setCodeSent(prev => !prev);
                    }}>
                    <Text style={styles.getCode}>
                      {codeSent ? 'Resend' : 'Get Code'}
                    </Text>
                  </TouchableOpacity>
                }
              />
            </>
          ) : (
            <>
              <Input
                missingField={missingField && password.length === 0}
                isRequired={true}
                label={'Password'}
                value={password}
                onChange={inp => setPassword(inp)}
              />
              <SizedBox height={moderateScale(15)} />
              <Input
                missingField={missingField && confirmPassword != password}
                isRequired={true}
                label={'Confirm Password'}
                value={confirmPassword}
                onChange={inp => setConfirmPassword(inp)}
              />
            </>
          )}
          <SizedBox height={moderateScale(30)} />
          <Button onPress={confirm} label={'Confirm'} />
        </Animated.View>
        <SizedBox height={moderateScale(0)} />
        <SizedBox height={moderateScale(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: DEVICE.SCREEN_HEIGHT / 1.2,
  },
  getCode: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font11,
  },
});
