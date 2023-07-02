import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ICON_ASSETS} from '../../assets/IconAssets';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {DEVICE} from '../../utils/Device';
import SizedBox from '../../components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import FONTS_SIZE from '../../constants/FontSize';
import COLORS from '../../constants/Colors';
import NavigationHelper from '../../utils/NavigationHelper';
import ScreenConstant from '../../constants/ScreenConstant';
import FONTS from '../../constants/FontsConstant';
import Checker from '../../components/background/Checker';
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [missingField, setMissingField] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [codeSent, setCodeSent] = useState(false);
  const logoAnimation = useRef(new Animated.Value(0)).current;
  const formAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = formAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, isLogin ? moderateScale(222) : moderateScale(287)],
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
      setIsLogin(prev => !prev);
      setEmail('');
      setPassword('');
      setCode('');
      setMissingField(false);
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

  const checkField = () => {
    if (password.length === 0 || email.length === 0) {
      return false;
    }
    if (!isLogin && code.length < 4) {
      return false;
    }
    return true;
  };
  const login = () => {
    if (checkField()) {
      isLogin
        ? NavigationHelper.navigate({name: ScreenConstant.Tabs.name})
        : NavigationHelper.navigate({name: ScreenConstant.Auth.Register});
    } else {
      setMissingField(true);
    }
  };
  const forgotPasseword = () => {
    NavigationHelper.navigate({name: ScreenConstant.Auth.ResetPassword});
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <View style={[GlobalStyle.container, styles.container]}>
      <Checker />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <Animated.View style={{opacity: logoAnimation}}>
            <ICON_ASSETS.Logo
              width={DEVICE.SCREEN_WIDTH / 1.3}
              height={DEVICE.SCREEN_WIDTH / 5}
            />
          </Animated.View>
          <SizedBox height={moderateScale(70)} />
          <Animated.View
            key={'InputForm'}
            style={{
              alignItems: 'center',
              height: heightAnimation,
              overflow: 'hidden',
            }}>
            <Input
              missingField={missingField && email.length === 0}
              isRequired={true}
              label={'Email'}
              value={email}
              onChange={inp => setEmail(inp)}
            />
            <SizedBox height={moderateScale(15)} />
            <Input
              isPassword={true}
              missingField={missingField && password.length === 0}
              isRequired={true}
              label={'Password'}
              value={password}
              onChange={inp => setPassword(inp)}
            />
            {!isLogin && <SizedBox height={moderateScale(15)} />}
            {!isLogin && (
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
            )}
            <SizedBox height={moderateScale(30)} />
            <Button label={isLogin ? 'Sign In' : 'Sign Up'} onPress={login} />
            <SizedBox height={moderateScale(10)} />
            <View style={GlobalStyle.innerRow}>
              <TouchableOpacity onPress={forgotPasseword}>
                <Text style={styles.pressableText}>Forgot Password</Text>
              </TouchableOpacity>
              <SizedBox width={moderateScale(5)} />
              <View
                style={{
                  height: moderateScale(5),
                  width: moderateScale(5),
                  borderRadius: moderateScale(5),
                  backgroundColor: COLORS.WHITE,
                }}
              />
              <SizedBox width={moderateScale(5)} />
              <TouchableOpacity onPress={close}>
                <Text style={styles.pressableText}>
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    height: DEVICE.SCREEN_HEIGHT / 1.2,
  },
  bottomText: {
    fontSize: FONTS_SIZE.font12,
    color: COLORS.LIGHTINACTIVE,
    textAlign: 'center',
  },
  pressableText: {
    fontSize: FONTS_SIZE.font12,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  getCode: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font11,
  },
});
