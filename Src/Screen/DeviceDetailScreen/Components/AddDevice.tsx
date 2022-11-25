import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../../Constant/Colors';
import FONTS_SIZE from '../../../Constant/FontSize';
import SizedBox from '../../../Components/SizedBox';
import CustomDropDownPicker from '../../../Components/CustomDropDownPicker';
import {DEVICE} from '../../../Calibration/Device';
import {connect} from 'react-redux';
import {handleAddCamera} from '../../../Redux/Cameras/actions';
import ImageAssets from '../../../Assets/ImageAssets';

const fakeIps = [
  {label: '192.168.210:220 / 8.8.8.8', key: '1'},
  {label: '192.168.210:220 / 0.0.0.0', key: '2'},
];
const AddDevice = (props: any) => {
  const [value, setValue] = useState('');
  const [room, setRoom] = useState('');

  const addCamera = () => {
    const body = {
      room: room,
      image: ImageAssets.Interior,
    };
    props.handleAddCamera(body, props.data);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Adding Type</Text>
        <SizedBox height={moderateScale(10)} />
        <CustomDropDownPicker
          items={fakeIps}
          value={value}
          setValue={setValue}
        />
      </View>
      <SizedBox height={moderateScale(10)} />
      <View>
        <Text style={styles.title}>Allias</Text>
        <SizedBox height={moderateScale(10)} />
        <TextInput
          value={room}
          onChangeText={inp => setRoom(inp)}
          style={styles.input}
          placeholder="New Device 01"
          placeholderTextColor={COLORS.inactive}
        />
      </View>
      <SizedBox height={moderateScale(10)} />
      <View>
        <Text style={styles.title}>Address</Text>
        <SizedBox height={moderateScale(10)} />
        <TextInput
          style={styles.input}
          placeholder="#176c street 10BT, Beong Tumpun"
          placeholderTextColor={COLORS.inactive}
        />
      </View>
      <SizedBox height={moderateScale(10)} />
      <View>
        <Text style={styles.title}>Port</Text>
        <SizedBox height={moderateScale(10)} />
        <TextInput
          style={styles.input}
          placeholder="8000"
          placeholderTextColor={COLORS.inactive}
        />
      </View>
      <SizedBox height={moderateScale(10)} />
      <View>
        <Text style={styles.title}>Password</Text>
        <SizedBox height={moderateScale(10)} />
        <TextInput
          style={styles.input}
          placeholder="Qwerty!23456"
          placeholderTextColor={COLORS.inactive}
        />
      </View>
      <SizedBox height={moderateScale(10)} />
      <TouchableOpacity style={styles.addButton} onPress={addCamera}>
        <Text style={styles.buttonText}>Add Device</Text>
      </TouchableOpacity>
      <SizedBox height={moderateScale(20)} />
    </ScrollView>
  );
};

const mapDispatchToProp = {
  handleAddCamera,
};

const mapStateToProp = (state: any) => {
  const {loading, data} = state.Camera;
  return {
    loading,
    data,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(AddDevice);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    marginTop: moderateScale(10),
  },
  title: {
    color: COLORS.disabled,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '700',
    letterSpacing: moderateScale(0.5),
  },
  input: {
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
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    color: COLORS.commonText,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '700',
  },
  addButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(15),
    width: DEVICE.DEVICE_Width / 2,
    height: DEVICE.DEVICE_Width / 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font14,
    fontWeight: '600',
  },
});
