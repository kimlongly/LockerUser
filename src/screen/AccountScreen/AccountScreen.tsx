import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {ICON_ASSETS} from '../../assets/IconAssets';
import {IMAGE_ASSETS} from '../../assets/ImageAssets';
import SizedBox from '../../components/SizedBox';
import COLORS from '../../constants/Colors';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';
import {DEVICE} from '../../utils/Device';
import {GlobalStyle} from '../../utils/GlobalStyle';

const services = [
  {
    id: '1',
    title: 'Profile',
    onPress: () => {},
    icon: (
      <ICON_ASSETS.Profile
        height={moderateScale(25)}
        width={moderateScale(25)}
        fill={COLORS.WHITE}
      />
    ),
  },
  {
    id: '2',
    title: 'Change Language',
    onPress: () => {},
    icon: (
      <ICON_ASSETS.Language
        height={moderateScale(25)}
        width={moderateScale(25)}
        fill={COLORS.WHITE}
      />
    ),
  },
  {
    id: '3',
    title: 'Help',
    onPress: () => {},
    icon: (
      <ICON_ASSETS.Help
        height={moderateScale(25)}
        width={moderateScale(25)}
        fill={COLORS.WHITE}
      />
    ),
  },
  {
    id: '4',
    title: 'Patch Notes',
    onPress: () => {},
    icon: (
      <ICON_ASSETS.PatchNotes
        height={moderateScale(25)}
        width={moderateScale(25)}
        fill={COLORS.WHITE}
      />
    ),
  },
];

export default function AccountScreen() {
  // ============== render Service ============= //
  const renderService = (item: {
    id: string;
    title: string;
    onPress: () => void;
    icon: JSX.Element;
  }) => {
    return (
      <TouchableOpacity
        style={[styles.options, GlobalStyle.rowView]}
        key={item.id}>
        <View style={GlobalStyle.innerRow}>
          <View style={styles.iconContainer}>{item.icon}</View>
          <SizedBox width={moderateScale(10)} />
          <Text style={[styles.title]}>{item.title}</Text>
        </View>
        <ICON_ASSETS.RightArrow fill={COLORS.BLACK} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={GlobalStyle.container}>
      <ImageBackground
        style={styles.upper}
        resizeMode="cover"
        source={IMAGE_ASSETS.SmartLockerBlack}>
        <TouchableOpacity style={styles.imageContainer}>
          <FastImage
            source={{
              uri: 'https://assets-prd.ignimgs.com/2023/02/08/jw4-2025x3000-online-character-1sht-keanu-v187-1675886090936.jpg',
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.middle}>
        <Text style={styles.userName}>Ly kimlong</Text>
        <Text style={styles.email}>ly.kimlong19@kit.edu.kh</Text>
      </View>
      <SizedBox height={moderateScale(10)} />
      <View style={styles.lower}>
        {services.map(item => renderService(item))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upper: {
    width: DEVICE.SCREEN_WIDTH,
    height: moderateScale(160),
    alignSelf: 'center',
  },
  imageContainer: {
    height: moderateScale(120),
    width: moderateScale(120),
    borderWidth: 1.5,
    borderColor: COLORS.WHITE,
    borderRadius: moderateScale(100),
    position: 'absolute',
    bottom: -60,
    left: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  middle: {
    alignItems: 'flex-end',
    padding: moderateScale(10),
    width: DEVICE.SCREEN_WIDTH,
    paddingHorizontal: moderateScale(10),
    alignSelf: 'center',
  },
  userName: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font18,
  },
  email: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: FONTS_SIZE.font12,
  },
  lower: {
    height: DEVICE.SCREEN_HEIGHT - moderateScale(320),
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    overflow: 'hidden',
  },
  options: {
    marginBottom: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    backgroundColor: COLORS.WHITE,
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    width: DEVICE.SCREEN_WIDTH - moderateScale(40),
    alignSelf: 'center',
  },
  iconContainer: {
    backgroundColor: COLORS.BLACK,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.DARKCOMMONTEXT,
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font13,
  },
});
