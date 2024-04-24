/* REACT */
import {StyleSheet} from 'react-native';
/* UTILS */
import {COLORS, FONT_SIZES} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  restaurantName: {
    fontSize: FONT_SIZES.BIGGER,
    fontWeight: '700',
    color: COLORS.PRIMARY,
  },
  orderNumber: {
    fontSize: FONT_SIZES.BIG,
    fontWeight: '500',
    color: COLORS.TEXT_SUBTITLE,
  },
});
