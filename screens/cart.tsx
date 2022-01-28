import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tempt me to finish up the cart screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default Cart;
