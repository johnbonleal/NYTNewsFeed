import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onItemSelected: () => void;
  isSelected: boolean;
}

const Button: React.SFC<ButtonProps> = ({ text, onItemSelected, isSelected }) => (
  <TouchableOpacity
    style={StyleSheet.flatten([styles.container, isSelected && styles.selectedContainer])}
    onPress={onItemSelected}>
    <Text style={StyleSheet.flatten([styles.text, isSelected && styles.selectedText])}>{text}</Text>
  </TouchableOpacity>
);

export default React.memo(Button);
