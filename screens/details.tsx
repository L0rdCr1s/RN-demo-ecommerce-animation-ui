import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Details: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Show shoe details on this page</Text>
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

export default Details;
