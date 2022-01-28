import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAppSelector} from 'store/utils/hooks';

const SampleImagesRow: React.FC = () => {
  const {selectedShoe} = useAppSelector(state => state.appStateData);

  return (
    <View style={styles.container}>
      {selectedShoe.images.map(image => (
        <Pressable key={`${Math.random()}`}>
          {/* I used shoe thumbnail here because the sample images aren't cropped
              Properly and i haven't got time to do that for a demo app, but they are
              already there, just use the image variable and they will show, and then
              you can crop them yourself properly
           */}
          <Image source={selectedShoe.thumbnail} style={styles.image} />
        </Pressable>
      ))}
      <Pressable>
        <Image source={selectedShoe.thumbnail} style={styles.image} />
        <View style={styles.lastImageOverlay}>
          <AntDesign name="play" size={30} color="#FFFEFE" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hdp(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wdp(5),
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    paddingBottom: hdp(2),
  },
  image: {
    height: hdp(6),
    width: hdp(7),
    resizeMode: 'contain',
  },
  lastImageOverlay: {
    height: hdp(6),
    width: hdp(9),
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    left: hdp(-1),
  },
});

export default SampleImagesRow;
