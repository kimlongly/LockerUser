import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../constants/Colors';
import SizedBox from '../components/SizedBox';
import {GlobalStyle} from '../utils/GlobalStyle';

export default function LoadingIOS() {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 360,
        useNativeDriver: true,
        duration: 1000,
        easing: Easing.linear,
      }),
    ).start();
  };
  const rotateY = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <Animated.View style={{transform: [{rotate: rotateY}]}}>
        <View style={[GlobalStyle.innerRow, styles.container]}>
          {/* row */}
          <View
            style={[styles.inner1, {backgroundColor: 'rgba(255,255,255,0.6)'}]}
          />
          <SizedBox width={moderateScale(15)} />
          <View style={styles.inner1} />
          {/* col 1 */}
          <View style={styles.container}>
            <View
              style={[
                styles.inner2,
                {backgroundColor: 'rgba(255,255,255,0.8)'},
              ]}
            />
            <SizedBox height={moderateScale(15)} />
            <View
              style={[
                styles.inner2,
                {backgroundColor: 'rgba(255,255,255,0.5)'},
              ]}
            />
          </View>
          {/* col 2 */}
          <View style={[styles.container, {transform: [{rotate: '-45deg'}]}]}>
            <View
              style={[
                styles.inner2,
                {backgroundColor: 'rgba(255,255,255,0.7)'},
              ]}
            />
            <SizedBox height={moderateScale(15)} />
            <View
              style={[
                styles.inner2,
                {backgroundColor: 'rgba(255,255,255,0.4)'},
              ]}
            />
          </View>
          {/* col 3 */}
          <View style={[styles.container, {transform: [{rotate: '45deg'}]}]}>
            <View
              style={[
                styles.inner2,
                {backgroundColor: 'rgba(255,255,255,0.9)'},
              ]}
            />
            <SizedBox height={moderateScale(15)} />
            <View
              style={[
                styles.inner2,
                {backgroundColor: 'rgba(255,255,255,0.3)'},
              ]}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inner1: {
    alignSelf: 'center',
    width: moderateScale(5),
    backgroundColor: COLORS.WHITE,
    height: moderateScale(3),
    borderRadius: moderateScale(10),
  },
  inner2: {
    alignSelf: 'center',
    width: moderateScale(3),
    backgroundColor: COLORS.WHITE,
    height: moderateScale(5),
    borderRadius: moderateScale(10),
  },
});
