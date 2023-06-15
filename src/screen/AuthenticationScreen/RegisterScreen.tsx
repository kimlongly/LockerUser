import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {ICON_ASSETS} from '../../assets/IconAssets';
import {DEVICE} from '../../utils/Device';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../components/SizedBox';
import FastImage from 'react-native-fast-image';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import NavigationHelper from '../../utils/NavigationHelper';
import ScreenConstant from '../../constants/ScreenConstant';

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [room, setRoom] = useState('');
  const confirm = () => {
    NavigationHelper.navigate({name: ScreenConstant.Tabs.name});
  };
  return (
    <View style={[GlobalStyle.container]}>
      <View style={styles.backgroundLogo}>
        <ICON_ASSETS.Logo
          width={DEVICE.SCREEN_WIDTH / 1.3}
          height={DEVICE.SCREEN_WIDTH / 5}
        />
      </View>
      <TouchableOpacity
        style={styles.profilePicture}
        key={'profile picture'}
        activeOpacity={0.6}>
        <ImageBackground
          blurRadius={7}
          resizeMode="cover"
          style={{
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
          source={{
            uri: 'https://assets-prd.ignimgs.com/2023/02/08/jw4-2025x3000-online-character-1sht-keanu-v187-1675886090936.jpg',
          }}>
          <View style={styles.innerImage}>
            <FastImage
              resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri: 'https://assets-prd.ignimgs.com/2023/02/08/jw4-2025x3000-online-character-1sht-keanu-v187-1675886090936.jpg',
              }}
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <SizedBox height={moderateScale(70)} />
      <ScrollView>
        <Input
          label={'Full Name'}
          isRequired={true}
          value={fullName}
          onChange={(inp: string) => setFullName(inp)}
        />
        <SizedBox height={moderateScale(15)} />
        <Input
          label={'Phone Number'}
          isRequired={true}
          value={phoneNumber}
          onChange={(inp: string) => setPhoneNumber(inp)}
        />
        <SizedBox height={moderateScale(15)} />
        <Input
          label={'Dorm/ Room Number'}
          isRequired={true}
          value={room}
          onChange={(inp: string) => setRoom(inp)}
        />
        <SizedBox height={moderateScale(15)} />
        <Button label={'Confirm'} onPress={confirm} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundLogo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    height: DEVICE.SCREEN_WIDTH / 1.5,
    width: DEVICE.SCREEN_WIDTH,
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  innerImage: {
    height: moderateScale(150),
    width: moderateScale(150),
    borderRadius: moderateScale(150),
    overflow: 'hidden',
    borderWidth: 1,
    alignSelf: 'center',
  },
});
