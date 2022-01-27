import AnimatedCard from 'components/AnimatedCard';
import Card from 'components/Card';
import BrandsRow from 'components/BrandsRow';
import SectionHeading from 'components/SectionHeading';
import VerticalTags from 'components/VerticalTags';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP as hdp,
  widthPercentageToDP as wdp,
} from 'react-native-responsive-screen';
import DiscoverHeader from 'components/DiscoverHeader';

const Discover: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DiscoverHeader />
      <BrandsRow />
      <View style={styles.topCardsContainer}>
        <View style={styles.verticalTags}>
          <VerticalTags />
        </View>
        <AnimatedCard />
      </View>
      <SectionHeading title={'More'} />
      <View style={styles.cardsRowContainer}>
        <Card />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsRowContainer: {
    marginTop: hdp(3),
    marginLeft: wdp(5),
  },
  topCardsContainer: {
    flexDirection: 'row',
    marginLeft: wdp(6),
    paddingTop: hdp(3),
  },
  verticalTags: {
    width: hdp(6),
    height: hdp(30),
    marginRight: wdp(3),
  },
});

export default Discover;
