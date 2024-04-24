/* REACT */
import {StyleSheet} from 'react-native';
/* UTILS */
import {COLORS, FONT_SIZES} from '../utils/theme';

export default StyleSheet.create({
  tabBarLabelStyle: {
    textTransform: 'none',
    fontSize: FONT_SIZES.BIG,
    fontWeight: '600',
    color: COLORS.TEXT_SUBTITLE,
  },
  tabBarIndicatorStyle: {
    backgroundColor: COLORS.PRIMARY_LIGHT,
  },
});
