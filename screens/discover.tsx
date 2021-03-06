import React from 'react';
import AnimatedHorizontalScrollList from 'components/AnimatedHorizontalScrollList';
import BottomRow from 'components/BottomRow';
import BrandsRow from 'components/BrandsRow';
import VerticalTags from 'components/VerticalTags';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import DiscoverHeader from 'components/DiscoverHeader';

const Discover: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DiscoverHeader />
      <BrandsRow />

      <View style={styles.topCardsContainer}>
        <View style={styles.testDot} />
        <View style={styles.verticalTags}>
          <VerticalTags />
        </View>
        <AnimatedHorizontalScrollList />
      </View>
      <BottomRow />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFE',
  },
  topCardsContainer: {
    flexDirection: 'row',
  },
  verticalTags: {
    width: hdp(6),
    height: hdp(30),
    left: wdp(6),
    position: 'absolute',
  },
  testDot: {
    height: hdp(30),
    width: wdp(47),
    borderRadius: 20,
    backgroundColor: 'red',
    position: 'absolute',
    transform: [{scale: 1.1}],
    left: wdp(24),
    top: hdp(4.5)
  },
});

export default Discover;
