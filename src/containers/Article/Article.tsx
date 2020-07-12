import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import styles from './styles';

const Article: React.SFC = ({content}) => {
  const navigation = useNavigation();
  const redirectToHome = () => navigation.navigate('Home');
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur</Text>
        <View style={styles.subtitleContainer}>
          <Text style={StyleSheet.flatten([styles.subtitle, { marginBottom: 5 }])}>
            By: Reporter XYZ
          </Text>
          <Text style={styles.subtitle}>Published 10 minutes ago</Text>
        </View>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
      <Button text="Back" onPress={redirectToHome} containerStyle={styles.button} />
    </View>
  );
};

export default React.memo(Article);
