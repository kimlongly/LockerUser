import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../Constant/Colors';
import FONTS_SIZE from '../Constant/FontSize';
import IconAssets from '../Assets/IconAssets';
import {DEVICE} from '../Calibration/Device';
import SizedBox from './SizedBox';

interface DropDownProps {
  items: any;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function CustomDropDownPicker({
  items,
  value,
  setValue,
}: DropDownProps) {
  const [isVisible, setISVisible] = useState(false);
  const setVisible = () => {
    setISVisible(prev => !prev);
  };

  const handleSelect = item => {
    setValue(item.label);
    setVisible();
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleSelect(item)}>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.dropDownTouch,
          {
            borderBottomLeftRadius: isVisible ? 0 : moderateScale(15),
            borderBottomRightRadius: isVisible ? 0 : moderateScale(15),
          },
        ]}
        onPress={setVisible}>
        <Text
          style={[
            styles.valueText,
            {color: value ? COLORS.commonText : COLORS.inactive},
          ]}>
          {value || 'IP/Domain'}
        </Text>
        <IconAssets.DropDown
          filled={COLORS.black}
          height={moderateScale(20)}
          width={moderateScale(20)}
        />
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.dropDownPicker}>
          <FlatList
            data={items}
            keyExtractor={item => item.key}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <SizedBox height={moderateScale(5)} />
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownTouch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '99%',
    alignSelf: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(15),
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(15),
  },
  valueText: {
    color: COLORS.inactive,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '700',
  },
  dropDownPicker: {
    width: '99%',
    alignSelf: 'center',
    padding: moderateScale(10),
    borderBottomLeftRadius: moderateScale(15),
    borderBottomRightRadius: moderateScale(15),
    backgroundColor: COLORS.white,
    maxHeight: DEVICE.DEVICE_Width / 3,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemText: {
    color: COLORS.primary,
  },
});
