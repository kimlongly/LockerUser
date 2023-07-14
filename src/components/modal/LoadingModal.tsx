import {Modal, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {DEVICE} from '../../utils/Device';
import COLORS from '../../constants/Colors';
import Loading from '../../animation/Loading';
import LoadingIOS from '../../animation/LoadingIOS';

export default function LoadingModal() {
  return (
    <Modal visible={true} transparent animationType="fade">
      <StatusBar translucent backgroundColor={COLORS.BACKDROP} />
      <View style={styles.backDrop}>
        {/* <Loading /> */}
        {/* <LoadingIOS /> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backDrop: {
    height: DEVICE.SCREEN_HEIGHT,
    width: DEVICE.SCREEN_WIDTH,
    backgroundColor: COLORS.BACKDROP,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
