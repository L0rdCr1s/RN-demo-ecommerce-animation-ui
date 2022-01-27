import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Discover: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Show discoveries on this page</Text>
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

export default Discover;
