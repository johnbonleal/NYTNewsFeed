import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  isSelected?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.SFC<ButtonProps> = ({
  text,
  onPress,
  isSelected = false,
  containerStyle,
  textStyle,
}) => (
  <TouchableOpacity
    style={StyleSheet.flatten([
      styles.container,
      containerStyle,
      isSelected && styles.selectedContainer,
    ])}
    onPress={onPress}>
    <Text style={StyleSheet.flatten([styles.text, textStyle, isSelected && styles.selectedText])}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default React.memo(Button);
