import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

export function AssetExample () {
  return (
    <Image
      source={require('../assets/edot.png')}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'contain'
    },
  });