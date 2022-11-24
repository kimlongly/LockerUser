import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import COLORS from '../../Constant/Colors';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../Components/SizedBox';
import FONTS_SIZE from '../../Constant/FontSize';
import IconAssets from '../../Assets/IconAssets';

const fakeData = [{}, {}, {}, {}];

export default function ActivityScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.rowView}>
          <Text style={styles.title}>Today</Text>
          <TouchableOpacity>
            <Text style={styles.deleteText}>delete all</Text>
          </TouchableOpacity>
        </View>
        <SizedBox height={moderateScale(20)} />
        {fakeData.map(item => {
          return (
            <View style={styles.alertHolder}>
              <View style={styles.whiteHolder}>
                <IconAssets.Alarm />
              </View>
              <SizedBox width={moderateScale(10)} />
              <View>
                <Text style={styles.TitleText}>
                  Detect a person at the front gate
                </Text>
                <Text style={styles.Description}>
                  Some one look suspiscios and might break in
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <SizedBox height={moderateScale(10)} />
      <View>
        <View style={styles.rowView}>
          <Text style={styles.title}>Yesterday</Text>
          <TouchableOpacity>
            <Text style={styles.deleteText}>delete all</Text>
          </TouchableOpacity>
        </View>
        <SizedBox height={moderateScale(20)} />
        {fakeData.map(item => {
          return (
            <View style={styles.alertHolder}>
              <View style={styles.whiteHolder}>
                <IconAssets.Alarm />
              </View>
              <SizedBox width={moderateScale(10)} />
              <View>
                <Text style={styles.TitleText}>
                  Detect a person at the front gate
                </Text>
                <Text style={styles.Description}>
                  Some one look suspiscios and might break in
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <SizedBox height={moderateScale(20)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: moderateScale(10),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: COLORS.commonText,
    fontSize: FONTS_SIZE.font18,
    fontWeight: 'bold',
  },
  deleteText: {
    color: COLORS.redButton,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '400',
  },
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
  TitleText: {
    color: COLORS.black,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '700',
  },

  Description: {
    color: COLORS.disabled,
    fontSize: FONTS_SIZE.font11,
  },
});
