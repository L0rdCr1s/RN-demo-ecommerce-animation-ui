import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Card: React.FC = () => {
  return (
    <View style={smallCardStyles.container}>
      <AntDesign
        name="hearto"
        size={22}
        color="#FFFFFF"
        style={smallCardStyles.likeButton}
      />
      <Image
        source={require('assets/img/1.png')}
        style={smallCardStyles.cardImage}
      />
      <Text style={smallCardStyles.name}>AIR-MAX</Text>
      <Text style={smallCardStyles.price}>$350.00</Text>
    </View>
  );
};

const smallCardStyles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: wdp(50),
    width: wdp(45),
    borderRadius: 20,
    padding: hdp(2),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  likeButton: {
    position: 'absolute',
    top: hdp(2),
    right: wdp(5),
  },
  cardImage: {
    height: wdp(27),
    width: wdp(27),
    resizeMode: 'contain',
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
});

export default Card;
