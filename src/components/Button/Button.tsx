import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: React.SFC<ButtonProps> = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

export default React.memo(Button);
