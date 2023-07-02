import {FlatList, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';
import {DEVICE} from '../../utils/Device';
import FastImage from 'react-native-fast-image';

interface CarouselProps {
  containerStyle?: ViewStyle;
  width?: string | number;
  height?: string | number;
  durationInterval?: number;
  items?: any;
  CarouselItem?: JSX.Element;
  autoPlayer?: boolean;
}
let interval;
var index = 0;
export default function CustomCarousel({
  containerStyle = {},
  width = DEVICE.SCREEN_WIDTH - moderateScale(20),
  height = moderateScale(120),
  autoPlayer = true,
  CarouselItem,
  items,
  durationInterval = 2000,
}: CarouselProps) {
  const [show, setShow] = useState(true);
  const scrollRef = useRef<any>(null);
  const data = [
    {
      id: '1',
      image:
        'https://img.freepik.com/premium-vector/black-friday-design-promotional-delivery-goods_145865-174.jpg?w=1800',
    },
    {
      id: '2',
      image:
        'https://img.freepik.com/premium-photo/data-center-with-robotic-systems-pick-pack-ship-operations_124507-147653.jpg?w=1380',
    },
    {
      id: '3',
      image:
        'https://img.freepik.com/premium-psd/black-friday-sale-laptops-gadgets-banner-template-3d-render_444361-44.jpg?w=1480',
    },
    {
      id: '4',
      image:
        'https://img.freepik.com/premium-psd/shoes-sale-horizonral-banner-template_554907-427.jpg?w=1380',
    },
    {
      id: '5',
      image:
        'https://img.freepik.com/premium-vector/black-friday-online-shopping-with-illustrations-3d-smartphones-motorbikes_269039-81.jpg?w=1480',
    },
    {
      id: '6',
      image:
        'https://img.freepik.com/premium-vector/black-friday-online-shopping-with-nuances-night_269039-111.jpg?w=1480',
    },
    {
      id: '1',
      image:
        'https://img.freepik.com/premium-vector/black-friday-design-promotional-delivery-goods_145865-174.jpg?w=1800',
    },
  ];
  // ================== InitialCall =======================//

  useEffect(() => {
    stopAuto();
    if (autoPlayer) {
      playAuto(durationInterval);
    }
    return () => {
      stopAuto();
    };
  }, []);

  // ================== Interval logic ==================== //

  const playAuto = (inter = 2000) => {
    interval = setInterval(() => {
      scroll();
    }, inter);
  };
  const stopAuto = () => {
    clearInterval(interval);
  };

  // ===================Check Scroll ===================//
  const checkScroll = ({layoutMeasurement, contentOffset}) => {
    index = parseInt((contentOffset.x / layoutMeasurement.width).toString());
  };

  const scroll = () => {
    if (index < data.length - 1) {
      scrollRef.current.scrollToIndex({index: index + 1, animated: true});
      if (index === data.length - 2) {
        stopAuto();
        playAuto(250);
      }
    } else {
      stopAuto();
      playAuto(2000);
      setShow(false);
      index = 0;
      setShow(true);
    }
  };

  const renderItem = ({item}) => {
    return CarouselItem ? (
      <CarouselItem />
    ) : (
      <FastImage
        source={{
          uri: item.image,
        }}
        style={{
          width: width,
          height: height,
        }}
        resizeMode="cover"
      />
    );
  };
  return (
    <View
      style={[
        styles.container,
        {width: width, height: height},
        containerStyle,
      ]}>
      {show ? (
        <FlatList
          onScroll={({nativeEvent}) => {
            checkScroll(nativeEvent);
          }}
          ref={scrollRef}
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          horizontal={true}
          pagingEnabled={true}
          indicatorStyle="white"
          style={{flex: 1}}
        />
      ) : (
        <View />
      )}
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
