import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import * as Sty from './styles';

interface ButtonProps extends TouchableOpacityProps {
  name: string;
}

export function Button({ name, ...rest }: ButtonProps) {
  return (
    <Sty.Button {...rest}>
      <Sty.Name>{name}</Sty.Name>
    </Sty.Button>
  );
}
