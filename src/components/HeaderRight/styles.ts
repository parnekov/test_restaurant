import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 64,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forkIconContainer: {
    borderRadius: 45,
    backgroundColor: COLORS.PRIMARY_LIGHT,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    borderRadius: 45,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    position: 'absolute',
    top: 0,
    right: -4,
    backgroundColor: COLORS.RED,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 8,
    color: COLORS.WHITE,
    textAlign: 'center',
    fontWeight: '500',
  },
});
