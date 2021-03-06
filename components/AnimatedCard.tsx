import {ROUTES} from 'assets/configs/routes';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  Animated as RNAnimated,
} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {selectShoe} from 'store/reducers/appState';
import {useAppDispatch} from 'store/utils/hooks';
import {ShoeType} from 'store/utils/types';
import {useNavigation} from '@react-navigation/native';

interface Props {
  shoe: ShoeType;
  index: number;
  x: RNAnimated.Value;
}

const AnimatedCard: React.FC<Props> = ({shoe, index, x}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  // calculate the position of the card
  const dynamic_position = RNAnimated.subtract(index * wdp(71), x);
  const pos0 = -wdp(71);
  const pos1 = 0;
  const pos2 = wdp(5);
  const pos3 = wdp(100) - wdp(41);
  const pos4 = wdp(100) - wdp(31);
  const pos5 = wdp(100);

  let scale = dynamic_position.interpolate({
    inputRange: [pos0, pos1, pos4, pos5],
    outputRange: [1, 1.12, 1, 1],
  });

  const shoeRotate = dynamic_position.interpolate({
    inputRange: [pos0, pos1, pos3, pos4, pos5],
    outputRange: ['-20deg', '-20deg', '-55deg', '-75deg', '-75deg'],
  });

  const shoeTranslateX = dynamic_position.interpolate({
    inputRange: [pos0, pos1, pos3, pos4],
    outputRange: [wdp(-80), wdp(8), wdp(15), wdp(2)],
  });

  const cardRotate = dynamic_position.interpolate({
    inputRange: [pos0, pos1, pos2, pos3, pos4, pos5],
    outputRange: ['0deg', '0deg', '-20deg', '30deg', '0deg', '0deg'],
  });

  const cardTranslateX = dynamic_position.interpolate({
    inputRange: [pos0, pos1, pos3, pos4, pos5],
    outputRange: [0, 0, wdp(-20), wdp(-8), 0],
  });

  const onPress = () => {
    // select shoe before navigating
    dispatch(selectShoe(shoe));

    // @ts-ignore
    navigation.navigate(ROUTES.DETAILS);
  };

  return (
    <Pressable onPress={onPress}>
      <RNAnimated.View
        style={[
          styles.container,
          {
            backgroundColor: shoe.color,
            transform: [
              {perspective: -1000},
              {scale: scale},
              {rotateY: cardRotate},
              {translateX: cardTranslateX},
            ],
          },
        ]}>
        <Text style={styles.brand}>{shoe.brand}</Text>
        <Text style={styles.name}>{shoe.name}</Text>
        <Text style={styles.price}>{shoe.price}</Text>
        <AntDesign
          name="hearto"
          size={22}
          color="#FFFFFF"
          style={styles.likeButton}
        />
        <MaterialIcons
          name="arrow-right-alt"
          size={30}
          color="#FFFFFF"
          style={styles.arrowButton}
        />
      </RNAnimated.View>
      <RNAnimated.Image
        source={shoe.thumbnail}
        style={[
          styles.cardImage,
          {
            transform: [{rotate: shoeRotate}, {translateX: shoeTranslateX}],
          },
        ]}
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
    // transform: [{translateX: wdp(2)}],
    position: 'absolute',
    top: hdp(5),
    zIndex: 2999,
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
