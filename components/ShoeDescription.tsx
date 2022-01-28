import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import {useAppSelector} from 'store/utils/hooks';

const ShoeDescription: React.FC = () => {
  const {selectedShoe} = useAppSelector(state => state.appStateData);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{selectedShoe.name}</Text>
        <Text style={styles.title}>{selectedShoe.price}</Text>
      </View>
      <Text style={styles.description}>{selectedShoe.description}</Text>
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
