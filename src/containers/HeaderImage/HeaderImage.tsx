import React from 'react';
import { View, Image, Text } from 'react-native';
import images from '../../resources/images';
import styles from './styles';

interface ComponentProps {
  image: string | undefined;
  caption: string;
}

const HeaderImage: React.SFC<ComponentProps> = ({
  image,
  caption = 'Lorem ipsum dolor sit amet, consectetur',
}) => {
  const imageDisplay = typeof image === 'string' ? { uri: image } : images.placeholder;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageDisplay} style={styles.image} />
      </View>
      <Text style={styles.caption}>{`Caption: ${caption}`}</Text>
    </View>
  );
};

export default HeaderImage;
