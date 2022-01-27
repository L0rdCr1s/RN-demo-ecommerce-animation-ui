import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';

const BrandsRow: React.FC = () => {
  return (
    /** Sloppy tsx because it's only purpose is to render a row
     * of fixed dummy brands */
    <View style={headerStyles.container}>
      {[
        'Nike',
        'Adidas',
        'Jordan',
        'Puma',
        'Fendi',
        'Lacoste',
        'Gucci',
        'All stars',
      ].map(brand => (
        <Text
          style={
            brand === 'Nike'
              ? headerStyles.activeBrand
              : headerStyles.inactiveBrand
          }
          key={brand}>
          {brand}
        </Text>
      ))}
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wdp(8),
    paddingVertical: hdp(2),
    width: wdp(130),
  },
  activeBrand: {
    fontSize: 20,
    fontWeight: '900',
    marginRight: wdp(5),
  },
  inactiveBrand: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: wdp(12),
    color: 'rgba(0,0,0,0.5)',
  },
});

export default BrandsRow;
