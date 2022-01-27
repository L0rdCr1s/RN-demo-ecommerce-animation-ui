import {heightPercentageToDP as hdp} from 'react-native-responsive-screen';
import {Platform} from 'react-native';

type fontType = {
  family: {regular: string; medium: string; bold: string; light: string};
  size: {
    extraSmallText: number;
    smallText: number;
    text: number;
    bigHeading: number;
    heading: number;
    title: number;
    input: number;
  };
};

export const font: fontType = {
  family: {
    regular: 'Lato-Regular',
    medium: 'Lato-Medium',
    bold: 'Lato-Black',
    light: 'Lato-light',
  },
  size: {
    extraSmallText: hdp(Platform.OS === 'android' ? 1.7 : 1.4),
    smallText: hdp(Platform.OS === 'android' ? 2 : 1.5),
    text: hdp(Platform.OS === 'android' ? 2.2 : 1.8),
    bigHeading: hdp(Platform.OS === 'android' ? 5 : 4.3),
    heading: hdp(Platform.OS === 'android' ? 3.3 : 2.3),
    title: hdp(Platform.OS === 'android' ? 2.5 : 1.9),
    input: hdp(Platform.OS === 'android' ? 2.5 : 2.2),
  },
};

export const dimensions = {
  borderRadius: 2,
  cardRadius: 4,
  circle: 300,
};
