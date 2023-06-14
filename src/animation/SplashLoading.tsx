import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../constants/Colors';

export default function SplashLoading() {
  const animationDot = useRef(new Animated.Value(0)).current;
  const animationBar = useRef(new Animated.Value(0)).current;
  const opacityDot = useRef(new Animated.Value(1)).current;
  const opacityBar = useRef(new Animated.Value(0)).current;
  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationDot, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(opacityDot, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(opacityBar, {
          toValue: 1,
          duration: 0,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(animationBar, {
          toValue: 1,
          duration: 400,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(opacityBar, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };
  useEffect(() => {
    animate();
  });
  const dotPosition = animationDot.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 0],
  });
  const barWidth = animationBar.interpolate({
    inputRange: [0, 1],
    outputRange: [10, moderateScale(100)],
  });
  return (
    <View>
      <Animated.View
        style={[styles.dot, {opacity: opacityDot, bottom: dotPosition}]}
      />
      <Animated.View
        style={[
          styles.dot,
          styles.left,
          {opacity: opacityBar, width: barWidth},
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          styles.right,
          {opacity: opacityBar, width: barWidth},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    height: moderateScale(10),
    width: moderateScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: COLORS.WHITE,
  },
  left: {
    right: 1,
    alignSelf: 'flex-start',
  },
  right: {
    left: 1,
    alignSelf: 'flex-end',
  },
});
