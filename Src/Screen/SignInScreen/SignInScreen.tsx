import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import IconAssets from '../../Assets/IconAssets';
import ImageAssets from '../../Assets/ImageAssets';
import { moderateScale } from 'react-native-size-matters';
import SizedBox from '../../Components/SizedBox';
import COLORS from '../../Constant/Colors';
import FONTS_SIZE from '../../Constant/FontSize';
import FONTS from '../../Constant/FontsConstant';
import NavigationHelper from '../../Utils/NavigationHelper';
import ScreenConstant from '../../Constant/ScreenConstant';

export default function SignInScreen() {
  const [phone, setPhone] = React.useState()
  return (
    <View style={styles.container}>
              <SizedBox height={moderateScale(60)} />

      <View>
        <Image source={ImageAssets.Homatic} style={{width: moderateScale(200), height: moderateScale(80)}}/>
        <SizedBox height={moderateScale(50)} />

      </View>
      <View style={styles.backgroundCurve}>
      <SizedBox height={moderateScale(20)} />

        <Text style={{ color: COLORS.white, fontSize:FONTS_SIZE.font20, fontFamily:FONTS.BOLD, fontWeight: '700'}}>Sign In</Text>
        <SizedBox height={moderateScale(20)} />
      <View style={styles.phoneContainer}>
        <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Phone Number / Email</Text>
        <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="012 345 678 / example@homatic.com"
        placeholderTextColor={"#B0B0B0"}
         value={phone}
         onChangeText={() => {setPhone}}
         />
      </View>

      <SizedBox height={moderateScale(20)} />

      <View style={styles.phoneContainer}>
        <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Password</Text>
        <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="Input your password"
        placeholderTextColor={"#B0B0B0"}
         value={phone}
         onChangeText={() => {setPhone}}
         secureTextEntry={true}
         />
      </View>
      <SizedBox height={moderateScale(10)} />


      <TouchableOpacity style={{ alignSelf: 'flex-end', paddingRight: moderateScale(20)}}>
        <Text style={{ color: COLORS.white, fontFamily: FONTS.LIGHT}}>Forgot Password?</Text>
      </TouchableOpacity>
      <SizedBox height={moderateScale(35)} />
      <View style={{ alignItems: 'center', width: '100%', height: moderateScale(40)}}>
    <TouchableOpacity style={styles.buttonStyle} onPress={() => NavigationHelper.push({name: ScreenConstant.SignInScreen})}>
          <Text style={styles.buttonFont}>Sign In</Text>
        </TouchableOpacity>
        </View>
      <SizedBox height={moderateScale(20)} />

      <View style={{flexDirection: 'row', justifyContent: 'center',  height:20, alignSelf: 'center', alignContent: 'center', alignItems: 'center'}}>
      <View style={{ height:moderateScale(1), width: '20%', backgroundColor: COLORS.white}}/>
      <SizedBox width={moderateScale(20)}/>
      <View>
      <Text style={{ color: COLORS.white}}>or</Text>
      </View>
      <SizedBox width={moderateScale(20)}/>
      <View style={{ height:moderateScale(1), width: '20%', backgroundColor: COLORS.white}}/>
      
      </View>
      <SizedBox height={moderateScale(20)} />
      
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly',  height:20, alignSelf: 'center', alignContent: 'center', alignItems: 'center', width: moderateScale(180)}}>
        <TouchableOpacity>
        <IconAssets.Facebook/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <IconAssets.Google/>
        </TouchableOpacity>

        <TouchableOpacity>
          <IconAssets.Apple/>
        </TouchableOpacity>
</View>
<SizedBox height={moderateScale(45)} />

<View style={{flexDirection: 'row', justifyContent: 'space-evenly',  height:20, alignSelf: 'center', alignContent: 'center', alignItems: 'center', width: moderateScale(180)}}>
  <Text style={{color: "#545454"}}>Don’t have an account?</Text>
  <TouchableOpacity onPress={() => NavigationHelper.push({ name: ScreenConstant.SignUpScreen}) } >
  <Text style={{color: COLORS.white}}>{'  '}Sign Up</Text>
  </TouchableOpacity>
</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  backgroundCurve:{
    alignItems: 'center',
    height:'100%',
    borderTopStartRadius: 100,
    backgroundColor: COLORS.primary,
    width: '100%',
  },
  phoneContainer:{
    paddingHorizontal: moderateScale(15),
    justifyContent: 'center',
    paddingTop: moderateScale(10),
    height:moderateScale(70),
    borderRadius: 15,
    backgroundColor: COLORS.white,
    width: '90%',
  },
  buttonStyle:{
    justifyContent:'center',
    alignItems: 'center',
    width: '73%',
    height:'100%',
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
  buttonFont:{
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: FONTS_SIZE.font20,
    
  },
});
