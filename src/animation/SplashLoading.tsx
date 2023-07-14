import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../constants/Colors';

export default function SplashLoading() {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }),
        Animated.timing(animation, {
          toValue: 2,
          useNativeDriver: true,
          duration: 1000,
        }),
        Animated.timing(animation, {
          toValue: 3,
          useNativeDriver: true,
          duration: 1000,
        }),
      ]),
    ).start();
  };
  const rotateY = animation.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ['0deg', '90deg', '180deg', '270deg'],
  });

  return (
    <View>
      <Animated.View style={[styles.bar, {transform: [{rotate: rotateY}]}]}>
        <View style={styles.innerHole} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerHole: {
    backgroundColor: COLORS.BLACK,
    height: moderateScale(15),
    width: moderateScale(15),
    borderRadius: moderateScale(5),
  },
});
