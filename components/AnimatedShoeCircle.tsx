import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';

const AnimatedShoeCircle: React.FC = () => {
  return (
    <View style={styles.circle}>
      <Image
        source={require('assets/img/1.png')}
        style={styles.animatedImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#6b52ae',
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
