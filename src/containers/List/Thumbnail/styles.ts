import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height / 5,
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 16,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  content: {
    flex: 2,
    justifyContent: 'space-around',
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
