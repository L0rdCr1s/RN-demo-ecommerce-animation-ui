import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  title: string;
  action?: () => {};
};

const SectionHeading: React.FC<Props> = ({title, action}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity hitSlop={styles.hitSlop} onPress={action}>
        <MaterialIcons name="arrow-right-alt" size={30} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hdp(4),
    paddingHorizontal: wdp(6),
    marginBottom: hdp(2),
  },
  hitSlop: {
    top: hdp(4),
    left: hdp(4),
    right: hdp(4),
    bottom: hdp(4),
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    marginRight: wdp(3),
    color: '#000000',
  },
});

export default SectionHeading;
