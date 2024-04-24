/* REACT */
import * as React from 'react';
/* MODULES */
import Svg, {Path, SvgProps} from 'react-native-svg';

const CloseIcon = (props: SvgProps & {color?: string; size?: number}) => (
  <Svg
    width={props.size || 21}
    height={props.size || 21}
    viewBox="0 -0.5 21 21"
    {...props}>
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.018 10 21 18.554 19.48 20l-8.98-8.554L1.518 20 0 18.554 8.98 10 0 1.446 1.518 0 10.5 8.554 19.48 0 21 1.446z"
    />
  </Svg>
);

export default CloseIcon;
