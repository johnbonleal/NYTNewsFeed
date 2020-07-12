import React from 'react';
import { View, Image, Text } from 'react-native';
import images from '../../resources/images';
import styles from './styles';

const HeaderImage = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={images.placeholder} style={styles.image} />
    </View>
    <Text style={styles.caption}>Caption: Lorem ipsum dolor sit amet, consectetur</Text>
  </View>
);

export default HeaderImage;
