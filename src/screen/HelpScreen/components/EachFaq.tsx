import {
  Animated,
  Easing,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {DEVICE} from '../../../utils/Device';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../../constants/Colors';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {ICON_ASSETS} from '../../../assets/IconAssets';
import FONTS from '../../../constants/FontsConstant';
import FONTS_SIZE from '../../../constants/FontSize';
import SizedBox from '../../../components/SizedBox';
import {duration} from 'moment';

export default function EachFaq() {
  const animation = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={GlobalStyle.rowView}
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.create(500, 'easeInEaseOut', 'opacity'),
          );
          setShow(prev => !prev);
        }}>
        <View style={GlobalStyle.innerRow}>
          <View style={styles.iconContainer}>
            <ICON_ASSETS.Help
              height={moderateScale(25)}
              width={moderateScale(25)}
              fill={COLORS.WHITE}
            />
          </View>
          <SizedBox width={moderateScale(10)} />
          <Text style={styles.question}>What is smart locker ?</Text>
        </View>
        {!show && <ICON_ASSETS.RightArrow fill={COLORS.BLACK} />}
        {show && (
          <View style={{transform: [{rotate: '90deg'}]}}>
            <ICON_ASSETS.RightArrow fill={COLORS.BLACK} />
          </View>
        )}
      </TouchableOpacity>
      {show && (
        <View>
          <SizedBox height={moderateScale(5)} />
          <Text style={styles.question}>
            Smart Locker is a mobile application, which enables users to
            conveniently rent lockers for storing their personal belongings. The
            aim of this project is to provide users with a seamless and
            efficient solution for temporary storage while addressing the
            growing need for secure storage options in urban environments.
            Additionally, this abstract discusses the integration of Smart
            Locker with the current logistics industry, highlighting the
            potential benefits and opportunities for collaboration.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    backgroundColor: '#f6f6f6',
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
  iconContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    fontSize: FONTS_SIZE.font12,
  },
});
