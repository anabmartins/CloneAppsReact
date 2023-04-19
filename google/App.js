import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

function TelaInicial() {
  return (
    <View style={styles.container}>
     <View style={styles.iconsContainer}>
        <Image source={('./caminho-icone-1.jpg')} style={styles.icon} />
        <Image source={('./caminho-icone-2.jpg')} style={styles.icon} />
      </View>
      <Image source={('https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png')} style={styles.imagem} />
      <TextInput placeholder="Search or type URL" style={styles.input} />
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
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#a1a1a1',
    color: 'grey',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  iconsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default TelaInicial;