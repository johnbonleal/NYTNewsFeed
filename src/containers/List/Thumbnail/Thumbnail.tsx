import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import images from '../../../resources/images';
import styles from './styles';

interface ThumbnailProps {
  onPress: () => void;
  title: string;
  author: string;
  date: string;
  image: string | undefined;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ onPress, title, author, date, image }) => {
  const displayImage = typeof image === 'string' ? {uri: image} : images.placeholder;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={displayImage} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
        <Text numberOfLines={1}>{author}</Text>
        <Text>{`Published ${date}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Thumbnail;
