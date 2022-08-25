import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Homescreen = () => {
  return (
    <View style={styles.homes}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
  }
})

export default Homescreen;
