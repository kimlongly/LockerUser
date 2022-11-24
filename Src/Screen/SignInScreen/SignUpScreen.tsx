import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconAssets from '../../Assets/IconAssets';
import COLORS from '../../Constant/Colors';
import { moderateScale } from 'react-native-size-matters';
import SizedBox from '../../Components/SizedBox';
import FONTS from '../../Constant/FontsConstant';
import FONTS_SIZE from '../../Constant/FontSize';
import ImageAssets from '../../Assets/ImageAssets';
import NavigationHelper from '../../Utils/NavigationHelper';
import ScreenConstant from '../../Constant/ScreenConstant';

export default function SignUpScreen() {
  const [firstName, setFirstName] = React.useState()
  const [lastName, setLastName] = React.useState()
  const [gender, setGender] = React.useState()
  const [phone, setPhone] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [confpassword, setConfPassword] = React.useState()

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%'}}>
      <SizedBox height="10%"/>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', paddingHorizontal: moderateScale(30), 
    alignItems: 'center',
   }}>
        <IconAssets.NavBack 
        onPress={() => NavigationHelper.push({ name: ScreenConstant.SignInScreen})}
        height={moderateScale(25)}
        width={moderateScale(25)}
        />
        <SizedBox width="28%"/>
        <Text style={{ color: COLORS.white, fontSize: moderateScale(30), fontWeight: '600' }}>Sign Up</Text>
      </View>
      <SizedBox height={moderateScale(40)}/>
                      {/* information */}
    <View style={{backgroundColor: COLORS.white, height: '100%', width: '100%', borderTopRightRadius: 50, alignItems: 'center', paddingBottom: moderateScale(50)
 }}>
<ScrollView style={{  width: '100%', paddingHorizontal: moderateScale(20), paddingVertical: moderateScale(30)} }>
  {/* first name */}
    
    <TouchableOpacity style={styles.InputContainer}>
    <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>First Name</Text>
    <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="John"
        placeholderTextColor={"#B0B0B0"}
         value={firstName}
         onChangeText={() => {setFirstName}}
         />
    </TouchableOpacity>
    {/* last name */}

    <SizedBox height={moderateScale(20)}/>
    <TouchableOpacity style={styles.InputContainer}>
    <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Last Name</Text>
    <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="Smith"
        placeholderTextColor={"#B0B0B0"}
         value={lastName}
         onChangeText={() => {setLastName}}
         />
    </TouchableOpacity>
  {/* gender */}
 <SizedBox height={moderateScale(20)}/>
    <TouchableOpacity style={styles.InputContainer}>
    <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Gender</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
    <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="Male"
        placeholderTextColor={"#B0B0B0"}
         value={gender}
         onChangeText={() => {setGender}}
         />
         <View style={{flexDirection: 'row',  height: moderateScale(20), alignItems: 'center'}}>
         <View style={{ height: moderateScale(20), width: moderateScale(1), backgroundColor: '#999999'}} />
         <SizedBox width={moderateScale(20)} />
    <Image source={ImageAssets.DropDown} style={{ width: moderateScale(14), height: moderateScale(15), }}/>
    </View>
         </View>
    </TouchableOpacity>
{/* phone Number */}
<SizedBox height={moderateScale(20)}/>
    <TouchableOpacity style={styles.InputContainer}>
    <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Phone Number</Text>
    <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="012 345 678"
        placeholderTextColor={"#B0B0B0"}
         value={phone}
         onChangeText={() => {setPhone}}
         keyboardType= 'number-pad'
         />
    </TouchableOpacity>
{/* email  */}
<SizedBox height={moderateScale(20)}/>
    <TouchableOpacity style={styles.InputContainer}>
    <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Email (Optional)</Text>
    <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="example@email.com"
        placeholderTextColor={"#B0B0B0"}
         value={email}
         onChangeText={() => {setEmail}}
         />
    </TouchableOpacity>
{/* password  */}
<SizedBox height={moderateScale(20)}/>
    <TouchableOpacity style={styles.InputContainer}>
    <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Password</Text>
    <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="Input your password"
        placeholderTextColor={"#B0B0B0"}
         value={password}
         onChangeText={() => {setPassword}}
         secureTextEntry={true}
         />
    </TouchableOpacity>
{/* confirm password  */}
<SizedBox height={moderateScale(20)}/>
    <TouchableOpacity style={styles.InputContainer}>
    <Text style={{color: COLORS.black, fontSize: FONTS_SIZE.font14}}>Confirm Password</Text>
    <TextInput style={{ color: COLORS.black,fontSize: FONTS_SIZE.font14}} placeholder="Confirm your password"
        placeholderTextColor={"#B0B0B0"}
         value={confpassword}
         onChangeText={() => {setConfPassword}}
         secureTextEntry={true}
         />
    </TouchableOpacity>

    <SizedBox height={moderateScale(20)}/>
<View style={{ alignItems: 'center', width: '100%', height: moderateScale(40)}}>
    <TouchableOpacity style={styles.buttonStyle} onPress={() => NavigationHelper.push({name: ScreenConstant.SignInScreen})}>
          <Text style={styles.buttonFont}>Sign Up</Text>
        </TouchableOpacity>
        </View>
    <SizedBox height={moderateScale(10)}/>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',  height:20, alignSelf: 'center', alignContent: 'center', alignItems: 'center', width: moderateScale(180)}}>
  <Text style={{color: "#545454"}}>Already have an account?</Text>
  <TouchableOpacity onPress={() => NavigationHelper.push({ name: ScreenConstant.SignInScreen}) } >
  <Text style={{color: COLORS.primary}}>{'     '}Sign In</Text>
  </TouchableOpacity>
</View>
    <SizedBox height={moderateScale(60)}/>

    </ScrollView>
    </View>

   
   
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  InputContainer:{
    paddingHorizontal: moderateScale(15),
    justifyContent: 'space-evenly',
    paddingTop: moderateScale(10),
    height:moderateScale(60),
    borderRadius: 15,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 4,
  },
  buttonStyle:{
    justifyContent:'center',
    alignItems: 'center',
    width: '73%',
    height:'100%',
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
  },
  buttonFont:{
    color: "#FFFFFF",
    fontWeight: '700',
    fontSize: FONTS_SIZE.font20,
    
  },
});
