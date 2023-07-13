import {
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {DEVICE} from '../../utils/Device';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/FontsConstant';
import FONTS_SIZE from '../../constants/FontSize';
import SizedBox from '../../components/SizedBox';
import {ICON_ASSETS} from '../../assets/IconAssets';
import FastImage from 'react-native-fast-image';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function ProfileScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dorm, setDorm] = useState('');

  return (
    <ScrollView style={[GlobalStyle.container]}>
      <ImageBackground
        source={{
          uri: 'https://steamuserimages-a.akamaihd.net/ugc/2015958559375593815/712C953220091CEE6C3D8CE3797999C61DC32FC7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        }}
        resizeMode="cover"
        style={styles.profileContainer}
        blurRadius={5}>
        <View style={GlobalStyle.rowView}>
          <TouchableOpacity style={styles.backContainer}>
            <ICON_ASSETS.RightArrow fill={COLORS.BLACK} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
          <SizedBox width={moderateScale(40)} />
        </View>
        <TouchableOpacity style={styles.cameraContainer}>
          <ICON_ASSETS.Camera
            height={moderateScale(22)}
            width={moderateScale(22)}
            fill={COLORS.BLACK}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={GlobalStyle.container}>
        <TouchableOpacity style={styles.imageContainer}>
          <FastImage
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={{
              uri: 'https://steamuserimages-a.akamaihd.net/ugc/2015958559375593815/712C953220091CEE6C3D8CE3797999C61DC32FC7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            }}
          />
        </TouchableOpacity>
        <SizedBox height={moderateScale(80)} />
        <Text style={styles.name}>Ly kimlong</Text>
        <Text style={styles.userId}>User ID: #1101901060</Text>
        <SizedBox height={moderateScale(10)} />
        <Input
          label={'Full Name'}
          value={fullName}
          onChange={inp => setFullName(inp)}
        />
        <SizedBox height={moderateScale(10)} />
        <Input label={'Email'} value={email} onChange={inp => setEmail(inp)} />
        <SizedBox height={moderateScale(10)} />
        <Input
          label={'Dorm Number'}
          value={dorm}
          onChange={inp => setDorm(inp)}
        />
      </View>
      <SizedBox height={moderateScale(10)} />
      <Button label={'Confirm'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: DEVICE.SCREEN_WIDTH,
    height: moderateScale(200),
    paddingHorizontal: moderateScale(10),
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : DEVICE.SCREEN_HEIGHT - DEVICE.SCREEN_HEIGHT * 0.95,
  },
  backContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '180deg'}],
  },
  headerText: {
    fontFamily: FONTS.BOLD,
    fontSize: FONTS_SIZE.font16,
    color: COLORS.WHITE,
  },
  cameraContainer: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  imageContainer: {
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: moderateScale(100),
    position: 'absolute',
    backgroundColor: COLORS.WHITE,
    alignSelf: 'center',
    top: -75,
    borderWidth: 3,
    borderColor: COLORS.BLACK,
    overflow: 'hidden',
  },
  name: {
    textAlign: 'center',
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font18,
    color: COLORS.WHITE,
  },
  userId: {
    textAlign: 'center',
    fontFamily: FONTS.REGULAR,
    fontSize: FONTS_SIZE.font12,
    color: COLORS.LIGHTINACTIVE,
  },
});
