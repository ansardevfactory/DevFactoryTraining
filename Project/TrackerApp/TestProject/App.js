import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
export default function App() {
  return (
    <View>
      <Text>Test</Text>
      <Text>Test</Text>
      <Text>Test</Text>
      <TouchableOpacity style={{backgroundColor: 'red'}}>
        <Text>BUTTON</Text>
      </TouchableOpacity>
      <View>
        <Text>Username</Text>
        <TextInput placeholder='Username'></TextInput>
      </View>
    </View>
  );
}
