import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../Constant/Colors';
import HomeHeader from './Components/HomeHeader';
import SizedBox from '../../Components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import FONTS_SIZE from '../../Constant/FontSize';
import ActivityCarousel from '../../Components/ActivityCarousel';
import ModeHolder from './Components/ModeHolder';
import IconAssets from '../../Assets/IconAssets';
import OnboardingScreen from '../OnboardingScreen/OnboardingScreen';
import NavigationHelper, { navigationRef } from '../../Utils/NavigationHelper';
import ScreenConstant from '../../Constant/ScreenConstant';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Live Feed</Text>
        <SizedBox height={moderateScale(10)} />
        <ActivityCarousel />
        <SizedBox height={moderateScale(10)} />
        <Text style={styles.title}>Mode</Text>
        <SizedBox height={moderateScale(10)} />
        <View style={styles.rowView}>
          <ModeHolder
            label="High Alert"
            icon={<IconAssets.Alert />}
            enabled={true}
          />
          <ModeHolder
            label="Night Time"
            icon={<IconAssets.Moon />}
            enabled={true}
          />
        </View>
        <SizedBox height={moderateScale(10)} />
        <View style={styles.rowView}>
          <ModeHolder
            label="Monitor"
            icon={<IconAssets.Eye />}
            enabled={false}
          />
          <ModeHolder
            label="Idle"
            icon={<IconAssets.Idling />}
            enabled={false}
          />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={()=> NavigationHelper.push({name: ScreenConstant.OnboardingScreen}) } style={styles.onboarding}>
        <Text>Go to Onboarding Screen</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: moderateScale(10),
  },
  title: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: FONTS_SIZE.font16,
  },
  rowView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  onboarding:{
    height: '5%',
    width: '50%',
    backgroundColor: COLORS.darkBlue,
  }
});
