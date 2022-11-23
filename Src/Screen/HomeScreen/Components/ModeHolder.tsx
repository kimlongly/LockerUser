import {StyleSheet, Text, View} from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import React, {ReactElement, useState} from 'react';
import COLORS from '../../../Constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import FONTS_SIZE from '../../../Constant/FontSize';
import {DEVICE} from '../../../Calibration/Device';
import SizedBox from '../../../Components/SizedBox';

interface holderProps {
  label: string;
  icon?: ReactElement;
  enabled: boolean;
}

export default function ModeHolder({enabled, label, icon}: holderProps) {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const changeMode = () => {
    setIsEnabled(prev => !prev);
  };

  return (
    <View style={styles.holder}>
      <SizedBox height={moderateScale(5)} />
      {icon}
      <SizedBox height={moderateScale(10)} />
      <Text style={styles.labelText}>{label}</Text>
      <SizedBox height={moderateScale(30)} />
      <View style={styles.rowView}>
        <Text style={styles.enableText}>{isEnabled ? 'On' : 'Off'}</Text>
        <SwitchToggle
          switchOn={isEnabled}
          onPress={changeMode}
          containerStyle={{
            width: moderateScale(60),
            height: moderateScale(30),
            borderRadius: moderateScale(30),
          }}
          circleStyle={{
            width: moderateScale(25),
            height: moderateScale(25),
            borderRadius: moderateScale(15),
          }}
          circleColorOff={COLORS.white}
          circleColorOn={COLORS.white}
          backgroundColorOff={COLORS.inactive}
          backgroundColorOn={COLORS.buttonPrimary}
          buttonStyle={{
            marginLeft: isEnabled ? moderateScale(-3) : moderateScale(3),
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  holder: {
    width: DEVICE.DEVICE_Width / 2.2,
    height: DEVICE.DEVICE_Width / 2.5,
    backgroundColor: COLORS.primary,
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '600',
  },
  enableText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font12,
  },
});
