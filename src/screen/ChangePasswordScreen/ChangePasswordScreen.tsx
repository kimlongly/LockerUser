import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import SizedBox from '../../components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import {ICON_ASSETS} from '../../assets/IconAssets';
import {DEVICE} from '../../utils/Device';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function ChangePasswordScreen() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [conPassword, setConPassword] = useState('');

  return (
    <View
      style={[
        GlobalStyle.container,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <ICON_ASSETS.Logo
        width={DEVICE.SCREEN_WIDTH / 1.3}
        height={DEVICE.SCREEN_WIDTH / 5}
      />
      <SizedBox height={moderateScale(50)} />
      <Input
        label={'Old password'}
        value={oldPassword}
        onChange={inp => {
          setOldPassword(inp);
        }}
      />
      <SizedBox height={moderateScale(10)} />
      <Input
        label={'New password'}
        value={newPassword}
        onChange={inp => {
          setNewPassword(inp);
        }}
      />
      <SizedBox height={moderateScale(10)} />
      <Input
        label={'Confirm password'}
        value={conPassword}
        onChange={inp => {
          setConPassword(inp);
        }}
      />
      <SizedBox height={moderateScale(20)} />
      <Button label={'Confirm'} />
    </View>
  );
}

const styles = StyleSheet.create({});
