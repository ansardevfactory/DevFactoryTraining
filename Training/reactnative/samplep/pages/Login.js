import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style/style';
export default function Login() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.main}>
      <View style={styles.imageview}>
        <Image style={styles.image} source={require('./images/logosnw.png')} />
      </View>
      <TouchableOpacity style={styles.googlebutton}>
        <Image source={require('./images/google.png')} />
        <Text>Sign in with Google</Text>
      </TouchableOpacity>
      <Text style={styles.center}>or Sign in with Email</Text>
      <Text style={styles.labels}>Email*</Text>
      <TextInput
        style={styles.inputs}
        placeholder="mail@website.com"></TextInput>
      <Text style={styles.labels}>Password*</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Min. 8 character"></TextInput>
      <View style={styles.rowmain}>
        <View style={styles.row}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>Remember me</Text>
        </View>
        <Text>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.loginbtn}>
        <Text style={styles.white}>Login</Text>
      </TouchableOpacity>
      <Text style={[styles.center, styles.bold]}>Not registered yet? <Text style={styles.blue}>Create an Account</Text></Text>
    </View>
  );
}
