import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'space-between',
    padding: 24,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
  },
  button: {
    alignSelf: 'center',
  },
});

export default styles;
