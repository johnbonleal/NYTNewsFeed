import React from 'react';
import { View, Image, Text } from 'react-native';
import images from '../../resources/images';
import styles from './styles';

interface ComponentProps {
  image: string | undefined;
}

const HeaderImage: React.SFC<ComponentProps> = ({ image }) => {
  const imageDisplay = typeof image === 'string' ? { uri: image } : images.placeholder;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageDisplay} style={styles.image} />
      </View>
      <Text style={styles.caption}>Caption: Lorem ipsum dolor sit amet, consectetur</Text>
    </View>
  );
}
export default HeaderImage;
