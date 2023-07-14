import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../constants/Colors';

export default function Loading() {
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
      <View style={styles.outer} />
      <Animated.View style={[styles.inner, {transform: [{rotate: rotateY}]}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    borderWidth: 5,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  inner: {
    position: 'absolute',
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    borderWidth: 5,
    borderColor: 'rgba(255,255,255,0.3)',
    borderTopColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
