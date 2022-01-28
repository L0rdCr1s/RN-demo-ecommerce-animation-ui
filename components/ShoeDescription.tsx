import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';

const ShoeDescription: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Air-Max-270</Text>
        <Text style={styles.title}>$150.00</Text>
      </View>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>
      <Pressable style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>MORE DETAILS</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wdp(5),
    marginTop: hdp(3),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
  },
  description: {
    fontSize: 17,
    color: 'rgba(0,0,0,0.5)',
    marginVertical: hdp(1.5),
    lineHeight: 25,
  },
  subtitle: {
    fontSize: 14,
    paddingBottom: 5,
  },
  subtitleContainer: {
    width: wdp(23),
    borderBottomColor: 'rgba(0,0,0,0.7)',
    borderBottomWidth: 2,
  },
});

export default ShoeDescription;
