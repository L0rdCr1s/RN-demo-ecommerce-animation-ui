import Card from 'components/Card';
import SectionHeading from 'components/SectionHeading';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import {sampleShoes} from 'store/utils/fake-data';

const BottomRow: React.FC = () => {
  return (
    <View>
      <SectionHeading title={'More'} />
      <View style={styles.cardsRowContainer}>
        <Card {...sampleShoes[0]} thumbnail={require('assets/img/5.png')} />
        <Card {...sampleShoes[1]} thumbnail={require('assets/img/6.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsRowContainer: {
    marginTop: hdp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wdp(5),
  },
});

export default BottomRow;
