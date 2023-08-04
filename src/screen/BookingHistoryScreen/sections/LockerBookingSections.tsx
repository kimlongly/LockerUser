import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../../components/SizedBox';
import {temporaryData} from '../../../utils/Data';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import LockerCard from '../components/LockerCard';

export default function LockerBookingSections() {
  // ====================== Render Flatlist component ============== //

  const renderItem = ({item}: any) => {
    return <LockerCard item={item} />;
  };

  const renderHeader = () => <SizedBox height={moderateScale(10)} />;
  const renderItemSeparator = () => <SizedBox height={moderateScale(10)} />;
  const renderFooter = () => <SizedBox height={moderateScale(10)} />;

  return (
    <View style={GlobalStyle.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={temporaryData}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderItemSeparator}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
