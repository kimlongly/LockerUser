import React from 'react';
import {View} from 'react-native';

interface SizedBoxProps {
  height?: number | undefined;
  width?: number | undefined;
}

export default function SizedBox({height = 0, width = 0}: SizedBoxProps) {
  return <View style={{height: height, width: width}} />;
}
