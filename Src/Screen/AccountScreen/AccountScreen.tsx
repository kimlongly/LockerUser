import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../Constant/Colors';

import { moderateScale } from 'react-native-size-matters';
import IconAssets from '../../Assets/IconAssets';
import ImageAssets from '../../Assets/ImageAssets';
import SizedBox from '../../Components/SizedBox';
import FONTS_SIZE from '../../Constant/FontSize';
import FONTS from '../../Constant/FontsConstant';
import LinearGradient from 'react-native-linear-gradient';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
       <Image source={ImageAssets.HomatechWhite} style={{ height: moderateScale(80),
    width: moderateScale(185)}} />
      </View>
      {/* profile picture  */}
      <View style={{alignItems: 'center',}}>
        
        <View style={styles.profileBorder}>
          <Image source={ImageAssets.TepBoyLoy} resizeMode='cover' style={styles.Image}/>
        </View>
        {/* information */}
        <SizedBox height={moderateScale(65)} />
        <View style={styles.informationContainer}>
            <Text style={[styles.titleStyle,{ fontSize: FONTS_SIZE.font17,
    fontFamily: FONTS.BOLD, fontWeight: '700' }]}> 
                Mr. Singhak Tep
            </Text>
            <View style={{flexDirection: 'row'}}>
              <IconAssets.location /> 
              <SizedBox width={moderateScale(5)} />
            <Text style={[styles.titleStyle,{ fontSize: FONTS_SIZE.font13,
    fontFamily: FONTS.REGULAR }]}>
                Sangkat Beong Keng Kang
              </Text>
               </View>
               <SizedBox height={moderateScale(10)} />
            <View style={styles.Divider} />
{/* options */}
              <SizedBox height={moderateScale(50)} />
              {/* first row */}
              <View style={styles.OptionContainer}>
                <TouchableOpacity style={[styles.buttonStyle,{flexDirection: 'row'}]}>
                <IconAssets.ServiceIcons/>
                  <Text style={styles.textStyle}>
                    Control Mode
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle,{flexDirection: 'row'}]}>
                <IconAssets.Camera width={moderateScale(20)} height={moderateScale(20)} />
                <Text style={styles.textStyle}>
                    Control Device
                  </Text>
                </TouchableOpacity>
              </View>
  {/* second row */}
              <SizedBox height={moderateScale(20)} />
              <View style={styles.OptionContainer}>
                <TouchableOpacity style={[styles.buttonStyle,{flexDirection: 'row'}]}>
                <IconAssets.ChatLive/>
                  <Text style={styles.textStyle}>
                    Alert History
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle,{flexDirection: 'row'}]}>
                <IconAssets.myAddress width={moderateScale(20)} height={moderateScale(20)} />
                <Text style={styles.textStyle}>
                    My Address
                  </Text>
                </TouchableOpacity>
              </View>
{/* third row */}
              <SizedBox height='13%'/>
              <View style={[styles.OptionContainer,{ justifyContent:'center' }]}>
                <TouchableOpacity style={[styles.buttonStyle2,{flexDirection: 'row'}]}>
                <IconAssets.Setting/>
                  <Text style={[styles.textStyle, {color: COLORS.white}]}>
                    Setting
                  </Text>
                </TouchableOpacity>
                <SizedBox width={moderateScale(10)}/>
                <TouchableOpacity style={[styles.buttonStyle,{width: moderateScale(90)}]}>
                <Text style={styles.textStyle}>
                    Log Out
                  </Text>
                </TouchableOpacity>
              </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '100%',
  },
  logo:{
    paddingVertical: moderateScale(20),
    width: '100%',
    
    alignItems: 'center',
  },
  profileBorder:{
    zIndex:1,
    position: 'absolute',
    borderRadius: 120,
    width: moderateScale(120),
    height: moderateScale(120),
    borderWidth: 4,
    borderColor: COLORS.white,    
  },
  Image:{
    borderRadius:120,
    width:'100%',
    height: '100%',
  },
  informationContainer:{
    alignItems: 'center',
    paddingTop: moderateScale(55),
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40, 
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  titleStyle:{
    color: COLORS.primary,
  },
  Divider:{
    width:moderateScale(100),
     height:moderateScale(2),
     borderWidth: 1,
     borderColor: COLORS.primary,
     backgroundColor: COLORS.primary,
  },
  buttonStyle:{
    justifyContent:'space-evenly',
    alignItems: 'center',
    width: '40%',
    paddingVertical: moderateScale(7),
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 4,
  },
  buttonStyle2:{
    justifyContent:'space-evenly',
    alignItems: 'center',
    width: '40%',
    paddingVertical: moderateScale(7),
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 4,
  },
  OptionContainer:{
    paddingHorizontal: moderateScale(5),
    justifyContent:'space-around',
    flexDirection: 'row', 
    width: '100%' ,
  },
  textStyle:{
    color: COLORS.black,
    fontSize: FONTS_SIZE.font13,
    fontFamily: FONTS.BOLD,
    fontWeight: '700',
  }
});
