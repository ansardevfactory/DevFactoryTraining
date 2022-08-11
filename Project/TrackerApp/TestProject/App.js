import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const handleClick = e => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <TouchableOpacity
        style={{backgroundColor: 'red'}}
        onPress={e => handleClick(e)}>
        <Text>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
}
