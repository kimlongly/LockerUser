import {Text, View} from 'react-native';
import React from 'react';

interface SizedBoxProps {
  height: number;
  width: number;
}

export default function SizedBox({height = 0, width = 0}: SizedBoxProps) {
  return <View style={{height: height, width: width}} />;
}
