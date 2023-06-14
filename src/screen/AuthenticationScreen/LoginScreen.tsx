import {
  Animated,
  Easing,
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
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [missingField, setMissingField] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const logoAnimation = useRef(new Animated.Value(0)).current;
  const formAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = formAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '40%'],
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

  const checkField = () => {
    if (password.length === 0 || email.length === 0) {
      return false;
    }
    return true;
  };
  const login = () => {
    if (checkField()) {
      NavigationHelper.navigate({name: ScreenConstant.Tabs.name});
    } else {
      setMissingField(true);
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
          <SizedBox height={moderateScale(30)} />
          <Button label={isLogin ? 'Sign In' : 'Sign Up'} onPress={login} />
          <SizedBox height={moderateScale(10)} />
          <View style={GlobalStyle.innerRow}>
            <Text style={styles.bottomText}>Don't have an account ?</Text>
            <SizedBox width={moderateScale(5)} />
            <TouchableOpacity
              onPress={() => {
                setIsLogin(prev => !prev);
              }}>
              <Text style={styles.pressableText}>
                {isLogin ? 'Sign Up' : 'Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
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
});
