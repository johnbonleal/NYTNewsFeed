import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import images from '../../../resources/images';
import styles from './styles';

interface ThumbnailProps {
  onPress: () => void;
  title: string;
  author: string;
  date: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ onPress, title, author, date }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.imageContainer}>
      <Image source={images.placeholder} style={styles.image} />
    </View>
    <View style={styles.content}>
      <Text numberOfLines={2} style={styles.title}>{title}</Text>
      <Text numberOfLines={1}>{author}</Text>
      <Text>{`Published ${date}`}</Text>
    </View>
  </TouchableOpacity>
);

export default Thumbnail;
