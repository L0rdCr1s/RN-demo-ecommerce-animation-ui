import {ROUTES} from 'assets/configs/routes';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, Animated} from 'react-native';
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
// import Animated from 'react-native-reanimated';

interface Props {
  shoe: ShoeType;
  index: number;
  x: Animated.Value;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedCard: React.FC<Props> = ({shoe, index, x}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  // calculate the position of the card
  const position = Animated.subtract(index * wdp(71), x);
  const isFirst = 0;
  const isLast = wdp(100) - wdp(61);
  const isShowing = wdp(100);
  const isHiding = -wdp(71);

  const scale = position.interpolate({
    inputRange: [isHiding, isFirst, isLast, isShowing],
    outputRange: [0.8, 1.2, 1, 1],
  });

  const onPress = () => {
    // select shoe before navigating
    dispatch(selectShoe(shoe));

    // @ts-ignore
    navigation.navigate(ROUTES.DETAILS);
  };

  return (
    <AnimatedPressable
      style={[
        styles.container,
        {backgroundColor: shoe.color, transform: [{scale: scale}]},
      ]}
      onPress={onPress}>
      <Text style={styles.brand}>{shoe.brand}</Text>
      <Text style={styles.name}>{shoe.name}</Text>
      <Text style={styles.price}>{shoe.price}</Text>
      <AntDesign
        name="hearto"
        size={22}
        color="#FFFFFF"
        style={styles.likeButton}
      />
      <Image source={shoe.thumbnail} style={styles.cardImage} />
      <MaterialIcons
        name="arrow-right-alt"
        size={30}
        color="#FFFFFF"
        style={styles.arrowButton}
      />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hdp(30),
    width: wdp(47),
    borderRadius: 20,
    padding: hdp(2),
    marginRight: wdp(24),
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
