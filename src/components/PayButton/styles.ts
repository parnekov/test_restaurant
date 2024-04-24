/* REACT */
import {StyleSheet} from 'react-native';
/* UTILS */
import {COLORS, FONT_SIZES} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.PRIMARY_LIGHT,
    padding: 16,
    borderRadius: 32,
  },
  text: {
    color: COLORS.WHITE,
    fontWeight: '700',
    fontSize: FONT_SIZES.BIGGER,
  },
});
