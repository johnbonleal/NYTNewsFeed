import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import styles from './styles';

interface ComponentProps {
  title: string;
  author: string;
  content: string;
  date: string;
}

const Article: React.SFC<ComponentProps> = ({ title, author, content, date }) => {
  const navigation = useNavigation();
  const redirectToHome = () => navigation.navigate('Home');
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={StyleSheet.flatten([styles.subtitle, { marginBottom: 5 }])}>{author}</Text>
          <Text style={styles.subtitle}>{`Published ${date}`}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
      <Button text="Back" onPress={redirectToHome} containerStyle={styles.button} />
    </View>
  );
};

export default React.memo(Article);
