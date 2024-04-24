/* REACT */
import * as React from 'react';
/* MODULES */
import Svg, {Path, SvgProps} from 'react-native-svg';

const ForkKnifeIcon = (props: SvgProps & {color?: string}) => (
  <Svg width={15} height={15} viewBox="0 0 15 15" {...props}>
    <Path
      fill={props.color}
      d="m3.5 0-1 5.5c-.146.805 1.782 1.181 1.75 2L4 14c-.038 1 1 1 1 1s1.038 0 1-1l-.25-6.5c-.031-.818 1.733-1.18 1.75-2L6.5 0H6l.25 4-.75.5L5.25 0h-.5L4.5 4.5 3.75 4 4 0h-.5zM12 0c-.736 0-1.964.655-2.455 1.637C9.135 2.373 9 4.018 9 5v2.5c0 .818 1.09 1 1.5 1L10 14c-.09.996 1 1 1 1s1 0 1-1V0z"
    />
  </Svg>
);

export default ForkKnifeIcon;
