import { font } from "assets/configs/theme";
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';

const VerticalTags: React.FC = () => {
  return (
    /** Sloppy tsx because it's only purpose is to render a row
     * of fixed dummy brands */
    <TouchableOpacity style={headerStyles.container}>
      {['New', 'Featured', 'Upcoming'].map(tag => (
        <Text
          style={
            tag === 'Featured'
              ? headerStyles.activeBrand
              : headerStyles.inactiveBrand
          }
          key={tag}>
          {tag}
        </Text>
      ))}
    </TouchableOpacity>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: hdp(6),
    width: hdp(30),
    transform: [{rotate: '-90deg'}],
    position: 'absolute',
    left: wdp(-28),
    bottom: wdp(20),
  },
  activeBrand: {
    fontSize: 17,
    fontWeight: '900',
  },
  inactiveBrand: {
    fontFamily: font.family.medium,
    fontSize: 17,
    color: 'rgba(0,0,0,0.5)',
  },
});

export default VerticalTags;
