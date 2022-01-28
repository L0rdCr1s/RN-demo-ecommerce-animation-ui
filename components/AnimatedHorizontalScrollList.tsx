import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, Animated} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import AnimatedCard from 'components/AnimatedCard';
import {sampleShoes} from 'store/utils/fake-data';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const AnimatedScrollList: React.FC = () => {
  const x = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {x}}}], {
    useNativeDriver: true,
  });

  const _renderItem = (item: ListRenderItemInfo<any>) => {
    return <AnimatedCard shoe={item.item} index={item.index} x={x} />;
  };

  return (
    <AnimatedFlatList
      data={sampleShoes}
      renderItem={_renderItem}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      // handle animation on scroll
      onScroll={onScroll}
      scrollEventThrottle={16}
      // snap elements to ensure that always the view
      // remains the same ven after scroll
      snapToStart={true}
      snapToInterval={wdp(73)}
      decelerationRate="fast"
      snapToEnd={true}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: wdp(24),
    height: hdp(39),
    alignItems: 'center',
    overflow: 'visible',
  },
});

export default AnimatedScrollList;
