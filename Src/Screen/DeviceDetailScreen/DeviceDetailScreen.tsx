import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../Constant/Colors';
import SizedBox from '../../Components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import EachCamera from '../../Components/EachCamera';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import DeviceActivity from './Components/DeviceActivity';
import AddDevice from './Components/AddDevice';

export default function DeviceDetailScreen(props: any) {
  const {image, room} = props.route.params;
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    {key: 'first', title: 'Camera Activity'},
    {key: 'second', title: 'Add Device'},
  ]);

  const FirstRoute = () => <DeviceActivity />;
  const SecondRoute = () => <AddDevice />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container}>
      <SizedBox height={moderateScale(10)} />
      <EachCamera image={image} room={room} />
      <SizedBox height={moderateScale(30)} />
      <TabView
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={styles.tabView}
        renderScene={renderScene}
        renderTabBar={props => {
          return (
            <TabBar
              pressColor={COLORS.white}
              {...props}
              indicatorStyle={{backgroundColor: COLORS.primary}}
              style={{backgroundColor: 'white'}}
              tabStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              renderLabel={({route, focused}) => {
                return (
                  <View
                    style={{
                      backgroundColor: COLORS.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: focused ? COLORS.primary : COLORS.disabled,
                        fontSize: moderateScale(16),
                        fontWeight: 'bold',
                      }}>
                      {route.title}
                    </Text>
                  </View>
                );
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  tabView: {
    backgroundColor: 'white',
    marginTop: moderateScale(-10),
    width: '100%',
    height: moderateScale(250),
  },
});
