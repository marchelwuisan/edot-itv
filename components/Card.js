import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export function Card ({ children }) {
  return (
    <View style={styles.cardContainer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 3,
      padding: 10
    },
  });
  