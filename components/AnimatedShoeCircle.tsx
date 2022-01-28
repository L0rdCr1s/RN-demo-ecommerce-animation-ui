import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import {useAppSelector} from 'store/utils/hooks';

const AnimatedShoeCircle: React.FC = () => {
  const {selectedShoe} = useAppSelector(state => state.appStateData);

  return (
    <View style={[styles.circle, {backgroundColor: selectedShoe.color}]}>
      <Image source={selectedShoe.thumbnail} style={styles.animatedImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: hdp(70),
    width: hdp(67),
    borderRadius: 300,
    position: 'absolute',
    top: hdp(-30),
    left: hdp(-3),
  },
  animatedImage: {
    height: hdp(32),
    width: hdp(32),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: hdp(-3),
    left: wdp(18),
    transform: [{rotate: '-20deg'}],
  },
});

export default AnimatedShoeCircle;
