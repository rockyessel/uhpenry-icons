import * as React from 'react';
import { IconNameType, UnsrcIconProps } from '../../types';
interface Props extends UnsrcIconProps {
    name: IconNameType;
    className?: string;
    size?: number | string;
    defaultOption?: IconNameType;
}
declare const UnsourceIcon: (props: Props) => React.JSX.Element | null;
export default UnsourceIcon;
