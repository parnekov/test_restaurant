/* REACT */
import * as React from 'react';
/* MODULES */
import Svg, {Path, SvgProps} from 'react-native-svg';

const CheckIcon = (props: SvgProps & {color: string; size?: number}) => (
  <Svg
    width={props.size || 32}
    height={props.size || 32}
    viewBox="0 0 32 32"
    {...props}>
    <Path
      fill={props.color}
      d="m5 16.577 2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"
    />
  </Svg>
);

export default CheckIcon;
