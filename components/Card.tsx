import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  id: string;
  name: string;
  price: string;
  thumbnail: ImageSourcePropType;
}

const Card: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="hearto"
        size={22}
        color="#000000"
        style={styles.likeButton}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>New</Text>
      </View>
      <Image source={props.thumbnail} style={styles.cardImage} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEFE',
    height: wdp(50),
    width: wdp(42),
    borderRadius: 20,
    padding: hdp(2),
    alignItems: 'center',
    justifyContent: 'flex-end',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  likeButton: {
    position: 'absolute',
    top: hdp(1.5),
    right: wdp(4),
  },
  cardImage: {
    height: wdp(29),
    width: wdp(29),
    resizeMode: 'contain',
  },
  name: {
    color: '#000000',
    fontSize: 17,
  },
  price: {
    color: '#000000',
    fontSize: 13,
    marginTop: 5,
  },
  label: {
    color: '#FFFFFF',
  },
  labelContainer: {
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    backgroundColor: '#E84855',
    color: '#FFFFFF',
    paddingHorizontal: wdp(5),
    paddingVertical: hdp(0.4),
    position: 'absolute',
    transform: [{rotate: '-90deg'}],
    top: hdp(2.5),
    left: wdp(-2),
  },
});

export default Card;
