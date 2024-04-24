/* REACT */
import {StyleSheet} from 'react-native';
/* UTILS */
import {COLORS, FONT_SIZES} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY_LIGHT,
    flexDirection: 'row',
    height: 28,
    width: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    borderRadius: 18,
  },
  text: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.NORMAL,
    fontWeight: '600',
  },
});
