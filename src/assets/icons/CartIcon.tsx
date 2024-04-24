/* REACT */
import * as React from 'react';
/* MODULES */
import Svg, {Path, SvgProps} from 'react-native-svg';

const CartIcon = (props: SvgProps & {color?: string}) => (
  <Svg width={20} height={20} viewBox="0 0 16 16" {...props}>
    <Path
      fill={props.color || '#444'}
      d="M14 13.1V12H4.6l.6-1.1 9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5 5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z"
    />
  </Svg>
);

export default CartIcon;