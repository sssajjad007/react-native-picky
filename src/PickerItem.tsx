import React from 'react';
import { ColorValue, Text, TextStyle } from 'react-native';

export interface PickerItemProps {
  color?: ColorValue;
  label: string;
  value: string | number;
  testID?: string;
  textStyle?: TextStyle;
}

export const PickerItem = ({ color, label, ...props }: PickerItemProps) => {
  console.log(props);
  return (
    <Text {...props} style={[{ color }, props.textStyle]}>
      {label}
    </Text>
  );
};
