import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import {ICON_ASSETS} from '../../assets/IconAssets';
import COLORS from '../../constants/Colors';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';
import {DEVICE} from '../../utils/Device';
import {GlobalStyle} from '../../utils/GlobalStyle';
import SizedBox from '../SizedBox';
import Button from '../button/Button';
interface ChangeLanguageModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const languages = [
  {
    name: 'ភាសាខ្មែរ',
    icon: (
      <ICON_ASSETS.Cambodia
        height={moderateScale(40)}
        width={moderateScale(40)}
      />
    ),
    code: 'kh',
  },
  {
    name: 'English',
    icon: (
      <ICON_ASSETS.America
        height={moderateScale(40)}
        width={moderateScale(40)}
      />
    ),
    code: 'en',
  },
];

const ChangeLanguageModal = ({
  visible,
  setVisible,
}: ChangeLanguageModalProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const close = () => {
    setVisible(false);
  };
  // ================= change Language  ============//
  const changeLanguage = (code: string) => {
    setCurrentLanguage(code);
  };
  // ================= render languages ============= //
  const renderItem = (item: {
    name: string;
    icon: JSX.Element;
    code: string;
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => changeLanguage(item.code)}
        style={[styles.eachLanguage, GlobalStyle.rowView]}
        key={item.name}>
        <View style={GlobalStyle.innerRow}>
          {item.icon}
          <SizedBox width={moderateScale(10)} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
        {currentLanguage === item.code && (
          <View style={styles.tickCircle}>
            <ICON_ASSETS.Tick
              height={moderateScale(15)}
              width={moderateScale(15)}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={close}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={1000}
      animationOutTiming={500}>
      <View style={styles.container}>
        <Text style={styles.header}>Change Language</Text>
        <SizedBox height={moderateScale(20)} />
        {languages.map(item => renderItem(item))}
        <SizedBox height={moderateScale(10)} />
        <Button buttonStyle={styles.confirmButton} label={'Confirm'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: COLORS.BLACK,
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    maxHeight: DEVICE.SCREEN_WIDTH,
    alignSelf: 'center',
  },
  header: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: FONTS_SIZE.font14,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  confirmButton: {
    borderRadius: moderateScale(10),
    width: DEVICE.SCREEN_WIDTH - moderateScale(40),
  },
  eachLanguage: {
    height: moderateScale(55),
    width: DEVICE.SCREEN_WIDTH - moderateScale(40),
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    marginBottom: moderateScale(10),
  },
  title: {
    fontFamily: FONTS.REGULAR,
    fontSize: FONTS_SIZE.font13,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  tickCircle: {
    height: moderateScale(20),
    width: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    backgroundColor: COLORS.WHITE,
  },
});

export default connect()(ChangeLanguageModal);
