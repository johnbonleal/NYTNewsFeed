import React from 'react';
import { View } from 'react-native';
import map from 'lodash/map';
import Button from '../Button/Button';
import styles from './styles';

interface DataProps {
  id: number;
  title: string;
}

interface ButtonGroupProps {
  data: DataProps[];
  onItemSelected: (item: string) => void;
  itemSelected: string;
}

const ButtonGroup: React.SFC<ButtonGroupProps> = ({ data, onItemSelected, itemSelected }) => (
  <View style={styles.container}>
    {map(data, (item) => {
      const { id, title } = item;
      return (
        <Button
          key={id.toString()}
          text={title}
          onPress={() => onItemSelected(title)}
          isSelected={title === itemSelected}
        />
      );
    })}
  </View>
);

export default ButtonGroup;
