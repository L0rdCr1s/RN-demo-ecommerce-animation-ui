import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailsScreenHeader: React.FC = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={goBack}>
        <MaterialIcons name="arrow-right-alt" color="#FFFEFE" size={24} />
      </Pressable>
      <Text style={styles.title}>Nike</Text>
      <Pressable style={styles.likeButton}>
        <AntDesign name="hearto" color="#FFFEFE" size={20} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wdp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wdp(5),
  },
  backButton: {
    transform: [{rotate: '180deg'}],
  },
  likeButton: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: 10,
    borderRadius: 300,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: -3,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  title: {
    fontSize: 23,
    fontWeight: '900',
    color: '#FFFEFE',
  },
});

export default DetailsScreenHeader;
