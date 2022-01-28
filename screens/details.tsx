import AnimatedShoeCircle from 'components/AnimatedShoeCircle';
import DetailsScreenHeader from 'components/DetailsScreenHeader';
import ShoeDescription from 'components/ShoeDescription';
import ShoeSize from 'components/ShoeSize';
import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import SampleImagesRow from 'components/SampleImagesRow';

const Details: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedShoeCircle />
      <DetailsScreenHeader />
      <SampleImagesRow />
      <ShoeDescription />
      <ShoeSize />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>ADD TO BAG</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFEFE',
  },
  button: {
    backgroundColor: '#E84855',
    marginHorizontal: wdp(5),
    paddingVertical: hdp(2),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFEFE',
  },
});

export default Details;
