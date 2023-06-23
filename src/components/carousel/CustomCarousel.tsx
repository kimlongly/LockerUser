import {FlatList, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';
import {DEVICE} from '../../utils/Device';
import FastImage from 'react-native-fast-image';

interface CarouselProps {
  containerStyle?: ViewStyle;
  width?: string | number;
  height?: string | number;
}
let interval;
var index = 0;
export default function CustomCarousel({
  containerStyle = {},
  width = DEVICE.SCREEN_WIDTH - moderateScale(20),
  height = moderateScale(120),
}: CarouselProps) {
  var data = [1, 2, 3, 4, 5, 6];
  const scrollRef = useRef<any>(null);
  useEffect(() => {
    stopAuto();
    playAuto();
    return () => {
      stopAuto();
    };
  }, []);
  const playAuto = () => {
    interval = setInterval(() => {
      scroll();
    }, 1000);
  };
  const stopAuto = () => {
    clearInterval(interval);
  };
  const scroll = () => {
    if (index < data.length - 1) {
      index = index + 1;
      scrollRef.current.scrollToIndex({index: index, animated: true});
    } else {
      index = 0;
      scrollRef.current.scrollToIndex({index: index, animated: true});
    }
  };
  const renderItem = ({item}) => {
    return (
      <FastImage
        source={{
          uri: 'https://assets-prd.ignimgs.com/2023/02/08/jw4-2025x3000-online-character-1sht-keanu-v187-1675886090936.jpg',
        }}
        style={{
          width: width,
          height: height,
        }}
        resizeMode="cover"
      />
      //   <View
      //     style={{
      //       width: width,
      //       height: height,
      //       backgroundColor: COLORS.WHITE,
      //     }}>
      //     <Text style={{color: COLORS.BLACK}}>{item}</Text>
      //   </View>
    );
  };
  return (
    <View
      style={[
        styles.container,
        {width: width, height: height},
        containerStyle,
      ]}>
      <FlatList
        ref={scrollRef}
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        indicatorStyle="white"
        style={{flex: 1}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: moderateScale(120),
    backgroundColor: COLORS.DARKCOMMONTEXT,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
  },
});
