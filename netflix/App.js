import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    // lógica de autenticação
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/netflix.png')} style={styles.logo} resizeMode='contain'></Image>
      <TextInput
  style={[styles.input, { borderTopLeftRadius: 5, borderTopRightRadius: 5}]}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, {borderBottomLeftRadius: 5, borderBottomRightRadius: 5}]}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9090B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 150,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'grey',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'transparent',
    height: 50,
    width: '100%',
    borderColor: TouchableWithoutFeedback,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    borderColor: 'white',
    borderWidth: 1.5,
    width: '100%',
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
  },
  forgotPassword: {
    marginTop: 90,
    color: 'white',
    fontWeight: 'bold',
  },
});