import React from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import AnimatedCard from 'components/AnimatedCard';
import {sampleShoes} from 'store/utils/fake-data';
import {ShoeType} from 'store/utils/types';

const AnimatedScrollList: React.FC = () => {
  const _renderItem = (item: ListRenderItemInfo<ShoeType>) => {
    return <AnimatedCard {...item.item} />;
  };

  return (
    <FlatList
      data={sampleShoes}
      renderItem={_renderItem}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingLeft: wdp(20),
  },
});

export default AnimatedScrollList;
