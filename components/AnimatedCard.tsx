import {ROUTES} from 'assets/configs/routes';
import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ShoeType} from 'store/utils/types';
import {useNavigation} from '@react-navigation/native';

interface Props extends ShoeType {}

const AnimatedCard: React.FC<Props> = props => {
  const navigation = useNavigation();

  const onPress = () => {
    // @ts-ignore
    navigation.navigate(ROUTES.DETAILS);
  };

  return (
    <Pressable
      style={[styles.container, {backgroundColor: props.color}]}
      onPress={onPress}>
      <Text style={styles.brand}>{props.brand}</Text>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
      <AntDesign
        name="hearto"
        size={22}
        color="#FFFFFF"
        style={styles.likeButton}
      />
      <Image source={props.thumbnail} style={styles.cardImage} />
      <MaterialIcons
        name="arrow-right-alt"
        size={30}
        color="#FFFFFF"
        style={styles.arrowButton}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hdp(30),
    width: wdp(47),
    borderRadius: 20,
    padding: hdp(2),
    marginRight: wdp(25),
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
