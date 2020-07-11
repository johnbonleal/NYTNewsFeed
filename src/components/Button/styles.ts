import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    backgroundColor: 'white',
    padding: 8,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#4A4A4A',
  },
  selectedText: {
    color: 'blue',
  },
  selectedContainer: {
    borderColor: 'blue',
  },
});

export default styles;
