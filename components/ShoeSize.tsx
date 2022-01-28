import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ShoeSize: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Size</Text>
        <Text style={styles.activeCountry}>UK</Text>
        <Text style={styles.country}>USA</Text>
      </View>
      <View style={styles.headerRow}>
        <View style={[styles.headerRow, styles.sizeButton]}>
          <Text style={styles.sizeText}>Try it</Text>
          <AntDesign
            name="linkedin-square"
            size={17}
            color="#000000"
            style={styles.tryItIcon}
          />
        </View>
        <Pressable style={styles.sizeButton}>
          <Text style={styles.sizeText}>7.5</Text>
        </Pressable>
        <Pressable style={styles.sizeButton}>
          <Text style={styles.sizeText}>8</Text>
        </Pressable>
        <Pressable style={styles.sizeButton}>
          <Text style={styles.sizeText}>9.5</Text>
        </Pressable>
      </View>
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
    marginBottom: hdp(3),
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    flex: 7,
  },
  activeCountry: {
    fontSize: 22,
    fontWeight: '900',
    flex: 1,
  },
  country: {
    fontSize: 22,
    fontWeight: '900',
    flex: 1,
    color: 'rgba(0,0,0,0.2)',
  },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.07)',
    paddingHorizontal: wdp(7),
    marginBottom: 0,
    borderRadius: 5,
  },
  sizeText: {
    fontWeight: '900',
  },
  tryItIcon: {
    marginLeft: wdp(3),
  },
});

export default ShoeSize;
