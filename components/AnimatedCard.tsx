import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AnimatedCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Nike</Text>
      <Text style={styles.name}>AIR-MAX</Text>
      <Text style={styles.price}>$350.00</Text>
      <AntDesign
        name="hearto"
        size={22}
        color="#FFFFFF"
        style={styles.likeButton}
      />
      <Image source={require('assets/img/1.png')} style={styles.cardImage} />
      <MaterialIcons
        name="arrow-right-alt"
        size={30}
        color="#FFFFFF"
        style={styles.arrowButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: hdp(30),
    width: wdp(47),
    borderRadius: 20,
    padding: hdp(2),
  },
  cardImage: {
    height: hdp(22),
    width: hdp(22),
    resizeMode: 'contain',
    transform: [{translateX: wdp(2)}, {rotate: '-25deg'}],
    position: 'absolute',
    top: hdp(5),
  },
  brand: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },
  name: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 20,
  },
  price: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },
  likeButton: {
    position: 'absolute',
    top: hdp(2),
    right: wdp(5),
  },
  arrowButton: {
    position: 'absolute',
    bottom: hdp(2),
    right: wdp(5),
  },
});

export default AnimatedCard;
