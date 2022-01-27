import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Show cart content on this page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cart;
