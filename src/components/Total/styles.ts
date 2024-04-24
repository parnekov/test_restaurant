/* REACT */
import {StyleSheet} from 'react-native';
/* UTILS */
import {COLORS, FONT_SIZES} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 2,
    marginVertical: 16,
  },
  text: {
    color: COLORS.PRIMARY,
    fontWeight: '700',
    fontSize: FONT_SIZES.BIGGER,
  },
  chf: {
    color: COLORS.PRIMARY,
    fontWeight: '500',
    fontSize: FONT_SIZES.NORMAL,
  },
  amountItems: {
    color: COLORS.PRIMARY,
    fontWeight: '700',
    fontSize: FONT_SIZES.NORMAL,
  },
});
