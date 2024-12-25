'use client';

import * as React from 'react';
import { IconNameType, UnsrcIconProps } from '../../types';
import { getIcon } from '../../lib';

interface Props extends UnsrcIconProps {
  name: IconNameType;
  className?: string;
  size?: number | string;
  defaultOption?: IconNameType;
}

const UnsourceIcon = (props: Props) => {
  const { name, className, size, defaultOption, ...rest } = props;
  if (!name) return null;

  const Icon = getIcon(name, defaultOption);

  return <Icon  size={size} className={className} {...rest} />;
};

export default UnsourceIcon;
