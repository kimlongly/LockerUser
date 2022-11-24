import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import IconAssets from '../../../Assets/IconAssets';
import SizedBox from '../../../Components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../../Constant/Colors';
import FONTS_SIZE from '../../../Constant/FontSize';
const fakeData = [{}, {}, {}, {}];
export default function DeviceActivity() {
  return (
    <ScrollView
      style={{
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScale(10),
      }}>
      {fakeData.map(item => {
        return (
          <View style={styles.alertHolder}>
            <View style={styles.whiteHolder}>
              <IconAssets.Alarm />
            </View>
            <SizedBox width={moderateScale(10)} />
            <View>
              <Text style={styles.Title}>
                Detect a person at the front gate
              </Text>
              <Text style={styles.Description}>
                Some one look suspiscios and might break in
              </Text>
            </View>
          </View>
        );
      })}
      <TouchableOpacity style={styles.touchHolder}>
        <Text style={styles.showMore}>Show More</Text>
        <SizedBox width={moderateScale(10)} />
        <IconAssets.DropDown
          height={moderateScale(15)}
          width={moderateScale(15)}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  alertHolder: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(10),
    backgroundColor: COLORS.ascent,
    elevation: 1,
  },
  whiteHolder: {
    padding: moderateScale(10),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(10),
  },
  Title: {
    color: COLORS.black,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '700',
  },

  Description: {
    color: COLORS.disabled,
    fontSize: FONTS_SIZE.font11,
  },
  showMore: {
    color: COLORS.primary,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '700',
  },
  touchHolder: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
