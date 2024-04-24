/* REACT */
import {StyleSheet} from 'react-native';
/* UTILS */
import {COLORS, FONT_SIZES} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 2,
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: COLORS.BLACK,
    marginRight: 8,
  },
  checkedIconContainer: {
    backgroundColor: COLORS.PRIMARY_LIGHT,
    borderWidth: 0,
  },
  uncheckedIconContainer: {
    backgroundColor: COLORS.WHITE,
  },
  icon: {},
  title: {
    fontSize: FONT_SIZES.BIG,
    fontWeight: '600',
    color: COLORS.TEXT_SUBTITLE,
  },
});
