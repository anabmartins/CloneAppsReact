import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

function MinhaPagina() {
  return (
    <View style={styles.container}>
      <View style={styles.coluna}>
        <Image source={('https://d35aaqx5ub95lt.cloudfront.net/images/f2a2e608c854822ad2563a09595e7827.png')} style={styles.imagem} />
        <Text style={styles.frase}>Learn a language for free.
        {'\n'}Forever.</Text>
        <View style={styles.botaoContainer}>
          <TouchableOpacity style={styles.botao1}>
            <Text style={styles.botaoTexto}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao2}>
            <Text style={styles.botaoTexto2}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  coluna: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  botaoContainer: {
    marginTop: 20,
  },
  botao1: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
   botao2: {
     backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoTexto2: {
    color: 'green',
    fontWeight: 'bold',
  },
  frase: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MinhaPagina;
