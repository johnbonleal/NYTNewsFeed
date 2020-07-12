import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import images from '../../../resources/images';
import styles from './styles';

interface ThumbnailProps {
  onPress: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.imageContainer}>
      <Image source={images.placeholder} style={styles.image} />
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>Lorem Ipsum dolor sit amet, consectetur</Text>
      <Text>By: Reporter XYZ</Text>
      <Text>Published: 10 minutes ago</Text>
    </View>
  </TouchableOpacity>
);

export default Thumbnail;
