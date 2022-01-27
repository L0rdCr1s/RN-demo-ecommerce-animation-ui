import {useNavigation} from '@react-navigation/native';
import {ROUTES} from 'assets/configs/routes';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const goToCart = () => {
    // @ts-ignore
    navigation.navigate(ROUTES.CART);
  };

  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerTitle}>Discover</Text>
      <View style={headerStyles.iconsContainer}>
        <TouchableOpacity style={headerStyles.headerIcon}>
          <AntDesign name="search1" size={22} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={headerStyles.headerIcon} onPress={goToCart}>
          <AntDesign name="shoppingcart" size={22} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wdp(6),
    paddingVertical: hdp(2),
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '900',
  },
  headerIcon: {
    marginLeft: wdp(5),
    padding: wdp(2),
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 300,
  },
});

export default Header;
