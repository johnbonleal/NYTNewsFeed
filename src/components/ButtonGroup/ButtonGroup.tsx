import React from 'react';
import { View } from 'react-native';
import Button from '../Button/Button';
import styles from './styles';

interface DataProps {
  id: number;
  title: string;
}

interface ButtonGroupProps {
  data: DataProps[];
  onPress: () => void;
}

const ButtonGroup: React.SFC<ButtonGroupProps> = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      {data.length > 0 &&
        data.map((item) => {
          const { id, title } = item;
          return <Button key={id.toString()} text={title} onPress={onPress} />;
        })}
    </View>
  );
};

export default ButtonGroup;
