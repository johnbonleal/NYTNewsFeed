import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

interface DropdownProps {
  title: string;
}

const Dropdown: React.SFC<DropdownProps> = ({ title }) => (
  <TouchableOpacity style={styles.container}>
    <Text>{title}</Text>
    <Icon name="chevron-down" />
  </TouchableOpacity>
);

export default Dropdown;
