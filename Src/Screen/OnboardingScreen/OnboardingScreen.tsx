import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageAssets from '../../Assets/ImageAssets';
import IconAssets from '../../Assets/IconAssets';
import { moderateScale } from 'react-native-size-matters';
import FONTS from '../../Constant/FontsConstant';
import SizedBox from '../../Components/SizedBox';
import FONTS_SIZE from '../../Constant/FontSize';
import NavigationHelper from '../../Utils/NavigationHelper';
import ScreenConstant from '../../Constant/ScreenConstant';

export default function OnboardingScreen() {
  return (

      <ImageBackground source={ImageAssets.Linear} style={styles.container}>
        <View>
        {/* style={{paddingVertical: '30%'}} */}
       
       
        <View style={{
      alignItems: 'center',}}>
        <Image source={ImageAssets.Onboarding} style={{width: moderateScale(300), height: moderateScale(200)}}/>
        <SizedBox height={moderateScale(60)}/>

        <Text style={styles.textStyle}>
        Welcome to our first
        </Text>
        <Text style={styles.textStyle}>
        Home Security Mobile App
        </Text>
        <SizedBox height={moderateScale(20)}/>
        <Text style={styles.textStyleSec}>
        We offer home security system that detect
 
        </Text>
        <Text style={styles.textStyleSec}>
        burglaries in action and alerts the local police
        </Text>
        <SizedBox height={moderateScale(40)}/>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => NavigationHelper.push({name: ScreenConstant.SignInScreen})}>
          <Text style={styles.buttonFont}>Get Started</Text>
        </TouchableOpacity>
        </View>

        </View>
        </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignSelf:'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textStyle:{
    color: "#191B8D",
    fontSize: moderateScale(21),
    fontFamily: FONTS.MEDIUM,
  },
  textStyleSec:{
    color: "#191B8D",
    fontSize: moderateScale(14),
    fontFamily: FONTS.MEDIUM,
  },
  buttonFont:{
    color: "#FFFFFF",
    fontWeight: '700',
    fontSize: FONTS_SIZE.font20,
    
  },
  buttonStyle:{
    justifyContent:'center',
    alignItems: 'center',
    width: '53%',
    height:'10%',
    borderRadius: 20,
    backgroundColor: "#19388D",
    shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 4,
  }
  });
