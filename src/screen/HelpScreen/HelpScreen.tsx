import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import SizedBox from '../../components/SizedBox';
import {moderateScale} from 'react-native-size-matters';
import EachFaq from './components/EachFaq';

const tempData = [1, 2, 3, 4, 5, 6];

export default function HelpScreen() {
  const renderItem = () => {
    return <EachFaq />;
  };
  const renderFooter = () => {
    return <SizedBox height={moderateScale(20)} />;
  };
  const renderSpace = () => {
    return <SizedBox height={moderateScale(10)} />;
  };
  return (
    <View style={GlobalStyle.container}>
      <FlatList
        contentContainerStyle={{paddingTop: moderateScale(30)}}
        data={tempData}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSpace}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
