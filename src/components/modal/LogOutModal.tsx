import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import COLORS from '../../constants/Colors';
import {DEVICE} from '../../utils/Device';
import {moderateScale} from 'react-native-size-matters';
import {ICON_ASSETS} from '../../assets/IconAssets';
import SizedBox from '../SizedBox';
import FONTS_SIZE from '../../constants/FontSize';
import FONTS from '../../constants/FontsConstant';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Button from '../button/Button';

interface logoutProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LogOutModal({visible, setVisible}: logoutProps) {
  const close = () => {
    setVisible(false);
  };
  return (
    <Modal
      isVisible={visible}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      onBackdropPress={close}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}>
      <View style={styles.container}>
        <ICON_ASSETS.PowerButton
          height={moderateScale(60)}
          width={moderateScale(60)}
          fill={COLORS.WHITE}
        />
        <SizedBox height={moderateScale(10)} />
        <Text style={styles.alertText}>You are about to log out</Text>
        <SizedBox height={moderateScale(10)} />
        <View style={GlobalStyle.rowView}>
          <Button
            onPress={close}
            buttonStyle={styles.cancelButton}
            label={'Cancel'}
            labelStyle={styles.cancelLabel}
          />
          <SizedBox width={moderateScale(10)} />
          <Button
            buttonStyle={styles.confirmButton}
            label={'Confirm'}
            labelStyle={styles.confirmLabel}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    height: DEVICE.SCREEN_WIDTH / 2,
    width: DEVICE.SCREEN_WIDTH - moderateScale(20),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertText: {
    color: COLORS.WHITE,
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.SEMIBOLD,
    textAlign: 'center',
  },
  cancelButton: {
    borderRadius: moderateScale(10),
    flex: 1,
    backgroundColor: COLORS.BLACK,
    borderWidth: moderateScale(1),
    borderColor: COLORS.WHITE,
  },
  cancelLabel: {
    color: COLORS.WHITE,
  },
  confirmButton: {
    borderRadius: moderateScale(10),
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  confirmLabel: {
    color: COLORS.BLACK,
  },
});
