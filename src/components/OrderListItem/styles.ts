/* REACT */
import {StyleSheet} from 'react-native';
/* UTILS */
import {COLORS, FONT_SIZES} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    marginTop: 16,
    justifyContent: 'space-between',
    borderRadius: 2,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  chfContainer: {
    alignItems: 'flex-end',
  },
  chf: {
    color: COLORS.PRIMARY_LIGHT,
    fontWeight: '500',
  },
  chfAmount: {
    color: COLORS.PRIMARY,
    fontWeight: '700',
    fontSize: FONT_SIZES.BIGGER,
  },
  paid: {
    fontWeight: '700',
    fontSize: FONT_SIZES.BIGGER,
    color: COLORS.PRIMARY_LIGHT,
    backgroundColor: COLORS.GRADIENT_BOTTOM,
    padding: 4,
  },
});
