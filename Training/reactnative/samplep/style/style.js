import {StyleSheet} from 'react-native';
const white = 'white';
const blue = 'blue';

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: blue,
    color: white,
  },
  white: {
    color: 'white',
    padding:20,
    fontWeight:'bold'
  },
  header: {
    color: white,
    fontSize: 30,
  },
  secondary: {
    color: 'white',
  },
});

export default styles;
